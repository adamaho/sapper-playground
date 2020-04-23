<script>
  import * as yup from 'yup';

  import { post } from '../../utils/post';

  import Button from '../common/Button.svelte';
  import Form from '../common/Form.svelte';
  import FormItem from '../common/FormItem.svelte';
  import Input from '../common/Input.svelte';
  import Wizard from '../common/Wizard.svelte';

  let emailError = false;
  let email = ''

  let password = '';
  let passwordError = false;

  let saveError = false;

  const schema = yup.object().shape({
    email: yup.string().email("Are you sure that is your email?").required(),
    password: yup.string().min(8, "Try to make it at least 8 characters long.").required("We need a password to keep you secure.")
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
      <FormItem error={emailError} errorMessage="The provided email is invalid">
        <Input placeholder="Email" name="email" />
      </FormItem>
      <FormItem error={passwordError} errorMessage="Your password should be at least 8 characters long.">
        <Input placeholder="Password" name="password" />
      </FormItem>
      <FormItem error={saveError} errorMessage="Hmm... we couldn't find you. Did you mean to sign up?">
        <Button type="submit">Login</Button>
      </FormItem>
    </Form>
  </div>
</Wizard>

<style>
  .signup :global(button) {
    width: 100%;
  }
</style>