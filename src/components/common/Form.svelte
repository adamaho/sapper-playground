<script>
  export let schema;

  import { createEventDispatcher, setContext } from 'svelte';
  import { writable } from 'svelte/store';


  const errors = writable({});

  setContext('form', { errors });

  const dispatch = createEventDispatcher();

  function deserializeForm(elements) {
    let values = {};

    [...elements].forEach(({name, type, value}) => {
      if (type !== 'submit' && type !== 'reset') {
        values[name] = value;
      }
    });

    return values;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const values = deserializeForm(e.target.elements);
    const validationErrors = {};

    try {
      await schema.validate(values, { abortEarly: false });
    } catch (error) {      
      error.inner.forEach((e) => {
        if (validationErrors[e.path] == null) {
          validationErrors[e.path] = [...e.errors];
        } else {
          validationErrors[e.path] = [...validationErrors[e.path], ...e.errors];
        }
      });
    }

    $errors = validationErrors;

    dispatch('submit', { values , errors });
  }
</script>

<form on:submit={handleSubmit}>
  <slot></slot>
</form>
