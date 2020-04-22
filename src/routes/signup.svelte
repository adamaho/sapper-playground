<script>
  import { goto } from '@sapper/app';

  import Key from '../components/signup/Key.svelte';
  import Signup from '../components/signup/Signup.svelte';

  let currentIndex = 0;

</script>

<svelte:head>
	<title>Tallii - Sign Up</title>
</svelte:head>

{#if currentIndex === 0}
  <Key bind:currentIndex />
{/if}

{#if currentIndex === 1}
  <Signup bind:currentIndex />
{/if}

<style>
</style>
