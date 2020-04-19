<script>
</script>

<button on:click>
  <slot></slot>
</button>

<style>
  button {
    display: block;
    background: white;

    border: none;
    border-radius: 6px;
    outline: 0;

    font-size: 15px;
    font-weight: 700;
    color: black;

    padding: 8px 8px;
  }

  button:active,
  button:hover {
    opacity: 0.8;
  }

  button::-moz-focus-inner {
    border: none;
  }
</style>