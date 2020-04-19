<script>
  import { goto } from '@sapper/app';

  import Button from '../components/common/Button.svelte';
  import Input from '../components/common/Input.svelte';
  import Wizard from '../components/common/Wizard.svelte';

  let key;

  async function handleNext() {

    const response = await fetch('http://localhost:8080/users');
    const data = await response.json();

    console.log(data);
    await goto('/signup');
  }

  function handleChange(e) {
    key = e.target.value;
    console.log(e);
  }


</script>

<svelte:head>
	<title>Tallii - Key</title>
</svelte:head>

<Wizard title="Let's get started" description="Do you have access?">
  <div class="key">
    <Input placeholder="Key" on:input={handleChange} />
    <Button on:click={handleNext}>Next</Button>
    <p>{key}</p>
  </div>
</Wizard>

<style>
  .key :global(button) {
    width: 100%;
    margin-top: 16px;
  }
</style>
