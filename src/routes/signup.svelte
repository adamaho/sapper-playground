<script>
  import { goto } from '@sapper/app';

  import Key from '../components/signup/Key.svelte';
  import Signup from '../components/signup/Signup.svelte';

  let currentIndex = 0;
  let key = '';

</script>

<svelte:head>
	<title>Tallii - Sign Up</title>
</svelte:head>

{#if currentIndex === 0}
  <Key bind:currentIndex bind:key />
{/if}

{#if currentIndex === 1}
  <Signup bind:currentIndex bind:key />
{/if}

<style>
</style>
