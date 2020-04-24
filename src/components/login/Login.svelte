<script>
  import * as yup from 'yup';

  import { post } from '../../utils/post';

  import Button from '../common/Button.svelte';
  import Form from '../common/Form.svelte';
  import FormItem from '../common/FormItem.svelte';
  import Input from '../common/Input.svelte';
  import Wizard from '../common/Wizard.svelte';

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Are you sure that is your email?")
      .required("We need your email so we know who you are."),
    password: yup
      .string()
      .required("We need a password to keep you secure.")
  });

  async function handleNext(values) {
    // validate form

    console.log(values.detail);

    // try {
    //   const response = await post('login', formValues);
    //   const jwt = await response.json();

    //   console.log(jwt);
    // } catch (error) {
    //   saveError = true;
    // }
  }
</script>


<Wizard title="Welcome Back" description="Enter your email and password to login.">
  <div class="signup">
    <Form {schema} on:submit={handleNext}>
      <Input placeholder="Email" name="email" /> 
      <Input placeholder="Password" name="password" />
      <Button type="submit">Login</Button>
    </Form>
  </div>
</Wizard>

<style>
  .signup :global(button) {
    width: 100%;
  }
</style>