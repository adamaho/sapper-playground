<script>
  export let schema;

  import { createEventDispatcher } from 'svelte';

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
    const errors = {};

    try {
      await schema.validate(values, { abortEarly: false });
    } catch (error) {      
      error.inner.forEach((e) => {
        if (errors[e.path] == null) {
          errors[e.path] = [...e.errors];
        } else {
          errors[e.path] = [...errors[e.path], ...e.errors];
        }
      });
    }

    dispatch('submit', { values , errors });
  }
</script>

<form on:submit={handleSubmit}>
  <slot></slot>
</form>
