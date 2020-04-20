<script type="module">
  import { goto } from '@sapper/app';
  import { fade, fly } from 'svelte/transition';

  import { post } from '../../utils/post';

  import Button from '../common/Button.svelte';
  import FormItem from '../common/FormItem.svelte';
  import Input from '../common/Input.svelte';
  import Wizard from '../common/Wizard.svelte';

  export let currentIndex;

  async function handleNext() {
    currentIndex += 1;
  }
</script>


<Wizard title="Sign up" description="What's your email and password?">
  <div class="signup">
    <Input placeholder="Email" />
    <Input placeholder="Password" />
    <Button on:click={handleNext}>Sign up</Button>
  </div>
</Wizard>