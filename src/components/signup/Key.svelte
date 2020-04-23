<script>
  import { goto } from '@sapper/app';
  import * as yup from 'yup';

  import { post } from '../../utils/post';

  import Button from '../common/Button.svelte';
  import Form from '../common/Form.svelte';
  import FormItem from '../common/FormItem.svelte';
  import Input from '../common/Input.svelte';
  import Wizard from '../common/Wizard.svelte';

  let key = '';
  let keyError = false;

  let schema = yup.object().shape({
    key: yup.string().required("asdfasdfasdfasdf")
  });

  export let currentIndex;

  async function handleNext({ detail }) {
    if (detail.key !== '') {
      try {
        await post('keys', { key: detail.key });
        
        currentIndex += 1;
      } catch (error) {
        keyError = true
      }
    }
  }
</script>

<Wizard title="Let's get started" description="Do you have access?">
  <div class="key">
    <Form on:submit={handleNext} {schema}>
      <FormItem error={keyError} errorMessage="The key provided is invalid or already taken.">
        <Input placeholder="Key" bind:value={key} name="key"/>
      </FormItem>
      <Button on:click={handleNext} type="submit">Next</Button>
    </Form>
  </div>
</Wizard>

<style>
  .key :global(button) {
    width: 100%;
  }
</style>
