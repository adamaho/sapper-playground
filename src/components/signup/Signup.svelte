<script>
  import * as yup from 'yup';

  import { post } from '../../utils/post';

  import Button from '../common/Button.svelte';
  import Form from '../common/Form.svelte';
  import FormItem from '../common/FormItem.svelte';
  import Input from '../common/Input.svelte';
  import Wizard from '../common/Wizard.svelte';

  export let currentIndex;

  let emailError = false;
  let email = ''

  let password = '';
  let passwordError = false;

  let saveError = false;

  const loginForm = yup.object().shape({
    email: yup.string().email("The provided email is invalid").required(),
    password: yup.string().min(8, "Password must be 8 characters or longer.").required()
  });

  async function handleNext() {
    // validate form
    const formValues = {
      email,
      password
    };

    // validate the form
    try {
      await loginForm.validate(formValues);
    } catch (error) {
      switch (error.path) {
        case 'email': {
          emailError = true;
          break;
        }
        case 'password': {
          passwordError = true;
          break;
        }
      }
      return;
    }

    // post the sign up
    try {
      await post('signup', {...formValues, key_id: 'a804e66f-4d83-4ef7-add3-1d74fd8d9145'});
      currentIndex += 1;
    } catch (error) {
      saveError = true;
    }
  }


  function handleSubmit({ detail }) {
    console.log(detail);
  }
</script>


<Wizard title="Sign up" description="What's your email and password?">
  <div class="signup">
    <Form on:submit={handleSubmit}>
      <FormItem error={emailError} errorMessage="The provided email is invalid">
        <Input name="email" placeholder="Email" />
      </FormItem>
      <FormItem error={passwordError} errorMessage="Your password should be at least 8 characters long.">
        <Input name="password" placeholder="Password" />
      </FormItem>
      <FormItem error={saveError} errorMessage="Oops, something went wrong">
        <Button type="submit">Sign up</Button>
        <Button type="reset">reset</Button>
      </FormItem>
    </Form>
  </div>
</Wizard>

<style>
  .signup :global(button) {
    width: 100%;
  }
</style>