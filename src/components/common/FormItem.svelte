<script>
  import { getContext } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  export let name;

  const { errors } = getContext('form');

</script>

<div class="form-item">
  <slot></slot>
  {#if $errors[name] !== undefined && $errors[name].length > 0}
    <p in:fly="{{ y: -20, duration: 150 }}" out:fade={{ duration: 100 }} class="form-item-error-message">{$errors[name][0]}</p>
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