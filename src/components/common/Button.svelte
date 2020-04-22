<script>
  export let disabled = false;
</script>

<button on:click {disabled}>
  <slot></slot>
</button>

<style>
  button {
    background: white;
    border: none;
    border-radius: 6px;

    color: black;
    cursor: pointer;
  
    display: block;

    font-family: inherit;
    font-size: 15px;
    font-weight: 700;

    outline: 0;

    padding: 8px 8px;

    transition: opacity 0.15s ease-in-out;
  }

  button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  button:active,
  button:hover {
    opacity: 0.8;
  }

  button::-moz-focus-inner {
    border: none;
  }
</style>