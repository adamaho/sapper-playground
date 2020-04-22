<script>
  import { fade, fly } from 'svelte/transition';

  export let error = false;
  export let errorMessage;

</script>

<div class="form-item" class:error>
  <slot></slot>
  {#if error}
    <p in:fly="{{ y: -20, duration: 150 }}" out:fade class="form-item-error-message">{errorMessage}</p>
  {/if}
</div>

<style>
  .form-item {
    margin-bottom: 16px;
  }

  p {
    background: rgba(255, 175, 0, 0.1);
    margin-top: 4px;
    padding: 4px 8px;
    border-radius: 6px;
    color: rgb(255, 175, 0);
    text-align: left;
    font-size: 12px;
  }
</style>