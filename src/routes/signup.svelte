<script>
  import { goto } from '@sapper/app';

  import Button from '../components/common/Button.svelte';
  import Input from '../components/common/Input.svelte';
  import Wizard from '../components/common/Wizard.svelte';

  import Key from '../components/signup/Key.svelte';

  let currentIndex = 0;

  function handleNext() {
    currentIndex += 1;
  }

  function handleBack() {
    currentIndex -= 1;
  }

</script>

<svelte:head>
	<title>Tallii - Sign Up</title>
</svelte:head>

{#if currentIndex === 0}
  <Key />
{/if}

{#if currentIndex === 1}
  <Wizard title="Sign up" description="What's your email and password?">
    <div class="signup">
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button>Sign up</Button>
    </div>
  </Wizard>
{/if}

<p>{currentIndex}</p>

<Button on:click={handleNext}>next</Button>
<Button on:click={handleBack}>back</Button>

<style>
</style>
