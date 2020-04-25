<script>
  import * as yup from 'yup';
  import { goto } from '@sapper/app';
  import { post } from '../../utils/post';

  export let key;

  import {
    Button,
    Form,
    FormInput,
    Wizard
  } from '../common';

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Are you sure that is your email?")
      .required("We need your email so we know who you are."),
    password: yup
      .string()
      .min(8, "Try to make your password at least 8 characters long.")
      .required("We need a password to keep you secure.")
  });

  async function signup({ detail }) {
    try {
      console.log(key);
      const response = await post('signup', { ...detail, key_id: key });
      const jwt = await response.json();

      // do something with the jwt here
      console.log(jwt);

      // proceed to main app
      goto('/app');
    } catch (error) {
      saveError = true;
    }
  }
</script>



<Wizard title="Sign up" description="What's your email and password?">
  <div class="signup">
    <Form {schema} on:submit={signup}>
      <FormInput name="email" placeholder="Email" />
      <FormInput name="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </Form>
  </div>
</Wizard>

<style>
  .signup :global(button) {
    width: 100%;
  }
</style>