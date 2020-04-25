<script>
  import * as yup from 'yup';
  import { goto, stores } from '@sapper/app';

  import { post } from '../../utils/post';

  import {
    Button,
    Form,
    FormInput,
    Wizard
  } from '../common';

  const { session } = stores();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Are you sure that is your email?")
      .required("We need your email so we know who you are."),
    password: yup
      .string()
      .required("We need a password to keep you secure.")
  });

  async function login({ detail }) {
    try {
      const response = await post('login', detail);
      const jwt = await response.json();

      $session.jwt = jwt;
      $session.user = true;
      // proceed to app
      goto('/app');
    } catch (error) {
      console.log(error);
    }
  }
</script>


<Wizard title="Welcome Back" description="Enter your email and password to login.">
  <div class="login">
    <Form {schema} on:submit={login}>
      <FormInput name="email" placeholder="Email" />
      <FormInput name="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </Form>
  </div>
</Wizard>

<style>
  .login :global(button) {
    width: 100%;
  }
</style>