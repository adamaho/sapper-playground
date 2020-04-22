<script>
  import * as yup from 'yup';

  import { post } from '../../utils/post';

  import Button from '../common/Button.svelte';
  import FormItem from '../common/FormItem.svelte';
  import Input from '../common/Input.svelte';
  import Wizard from '../common/Wizard.svelte';

  // export let currentIndex;

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

    console.log('asdfasdfasdf');

    try {
      await post('signup', {formValues, key_id: '9374f913-328c-4690-b4d3-19eadfe3e91a'});
    } catch (error) {
      console.log(error);
      saveError = true;
    }

    // console.log(foo);
    // currentIndex += 1;
  }
</script>


<Wizard title="Sign up" description="What's your email and password?">
  <div class="signup">
    <FormItem error={emailError} errorMessage="The provided email is invalid">
      <Input placeholder="Email" bind:value={email}/>
    </FormItem>
    <FormItem error={passwordError} errorMessage="Your password should be at least 8 characters long.">
      <Input placeholder="Password" bind:value={password} />
    </FormItem>
    <FormItem error={saveError} errorMessage="Oops, something went wrong">
      <Button on:click={handleNext}>Sign up</Button>
    </FormItem>
  </div>
</Wizard>

<style>
  .signup :global(button) {
    width: 100%;
  }
</style>