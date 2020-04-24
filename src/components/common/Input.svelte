<script>
  export let name;
  export let placeholder;
  export let value = '';
</script>

<input bind:value {placeholder} {name} />

<style>
  input {
    background: white;
    box-sizing: border-box;

    border: none;
    border-radius: 6px;
    outline: 0;

    font-family: inherit;
    font-size: 15px;
    font-weight: 300;
    color: black;

    padding: 8px 16px;

    width: 100%;
  }

  input::placeholder {
    color: black;
  }
</style>