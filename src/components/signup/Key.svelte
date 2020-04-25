<script>
  import * as yup from 'yup';
  import { post } from '../../utils/post';
  import {
    Button,
    Form,
    FormInput,
    Wizard
  } from '../common';

  export let currentIndex;
  export let key;

  const schema = yup.object().shape({
    key: yup.string().required("We need to check if you have access")
  });

  async function checkKey({ detail }) {

    console.log(detail);
    try {
      await post('keys', detail);

      key = detail.key;
      currentIndex += 1;
    } catch (error) {
      console.log(error);
    }
  }
</script>

<Wizard title="Let's get started" description="Do you have access?">
  <div class="key">
    <Form {schema} on:submit={checkKey}>
      <FormInput name="key" placeholder="Key" />
      <Button type="submit">Next</Button>
    </Form>
  </div>
</Wizard>

<style>
  .key :global(button) {
    width: 100%;
  }
</style>