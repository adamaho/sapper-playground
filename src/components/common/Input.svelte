<script>
  export let placeholder;
</script>

<input on:change {placeholder} />

<style>
  input {
    background: white;
    box-sizing: border-box;

    border: none;
    border-radius: 6px;
    outline: 0;

    font-size: 15px;
    font-weight: 300;
    color: black;

    padding: 8px 16px;

    width: 100%;
  }

  :global(button) {
    width: 100%;
  }
</style>