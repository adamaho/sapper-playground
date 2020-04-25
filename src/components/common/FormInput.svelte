<script>
  import { getContext } from 'svelte';
  import Input from './Input.svelte';
  import FormItem from './FormItem.svelte';

  const { errors, setValue } = getContext('form');

  export let name = '';
  export let placeholder;

  function onBlur(e) {
    setValue(name, e.target.value);
  }
  console.log($errors, name);
</script>

<FormItem errors={$errors[name] == null ? [] : $errors[name]}>
  <Input {name} {placeholder} on:blur={onBlur} />
</FormItem>

