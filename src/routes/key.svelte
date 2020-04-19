<script>
  import Button from '../components/common/Button.svelte';
  import Input from '../components/common/Input.svelte';
  import Wizard from '../components/common/Wizard.svelte';
</script>

<svelte:head>
	<title>Tallii - Key</title>
</svelte:head>

<Wizard title="Let's get started" description="Do you have access?">
	
  <Input placeholder="Key" />

  <Button>Next</Button>
</Wizard>

<style>
  :global(button) {
    margin-top: 16px;
    justify-self: flex-end;
  }
</style>
