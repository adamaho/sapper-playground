<script type="module">
  import { goto } from '@sapper/app';
  import { fade, fly } from 'svelte/transition';

  import { post } from '../../utils/post';

  import Button from '../common/Button.svelte';
  import FormItem from '../common/FormItem.svelte';
  import Input from '../common/Input.svelte';
  import Wizard from '../common/Wizard.svelte';

  let key = '';
  let keyError = false;

  export let currentIndex;

  async function handleNext() {
    if (key !== '') {
      console.log(key);
      try {
        const response = await post('keys', { key });

        if (response.ok) {
          currentIndex += 1;
        } else {
          keyError = true
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
</script>

<Wizard title="Let's get started" description="Do you have access?">
  <div class="key">
    <FormItem error={keyError} errorMessage="The key provided is invalid or already taken.">
      <Input placeholder="Key" bind:value={key}/>
    </FormItem>
    <Button disabled={key === ''} on:click={handleNext}>Next</Button>
  </div>
</Wizard>

<style>
  .key :global(button) {
    width: 100%;
    margin-top: 16px;
  }
</style>
