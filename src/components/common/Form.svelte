<script>
  export let schema;

  import { createEventDispatcher, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  const errors = writable({});
  const values = writable({});
  const touchedFields = writable({});
  const submitted = writable(false);

  setContext('form', {
    errors,
    setValue
  });

  const dispatch = createEventDispatcher();

  async function validate() {
    const validationErrors = {};

    try {
      await schema.validate($values, { abortEarly: false });
    } catch (error) {
      error.inner.forEach((e) => {
        if ($touchedFields[e.path]) {
          if (validationErrors[e.path] == null) {
            validationErrors[e.path] = [...e.errors];
          } else {
            validationErrors[e.path] = [...validationErrors[e.path], ...e.errors];
          }
        }
      });
    }

    $errors = validationErrors;
  }
  
  async function setValue(name, value) {
    $touchedFields[name] = true;

    $values = {
      ...$values,
      [name]: value
    }

    if ($submitted) {
      await validate();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    $submitted = true;

    await validate();

    dispatch('submit', $values);
  }
</script>

<form on:submit={handleSubmit}>
  <slot />
</form>
