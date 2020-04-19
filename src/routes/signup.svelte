<script>
  import { goto } from '@sapper/app';

  import Button from '../components/common/Button.svelte';
  import Input from '../components/common/Input.svelte';
  import Wizard from '../components/common/Wizard.svelte';


  const handleSignup = async () => {
    // check signup and then move to the app
    await goto('/app');
  }
</script>

<svelte:head>
	<title>Tallii - Sign Up</title>
</svelte:head>

<Wizard title="Sign up" description="What's your email and password?">
  <div class="signup">
    <Input placeholder="Email" />
    <Input placeholder="Password" />
    <Button on:click={handleSignup}>Sign up</Button>
  </div>
</Wizard>

<style>
  .signup :global(input:first-child) {
    margin-bottom: 24px;
  }

  .signup :global(button) {
    margin-top: 24px;
    width: 100%;
  }
</style>
