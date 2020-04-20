<script>
	import { fade, fly } from 'svelte/transition';

  export let title;
	export let description;
</script>

<main in:fade="{{ duration: 400, delay: 300 }}" out:fly="{{ x: -200, duration: 400 }}">
	<div class="wizard-container">
		<div class="wizard-title-container">
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
		<div class="wizard-content-container">
      <slot></slot>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 100%;

		margin-top: -40px;
	}

	.wizard-container {
    text-align: center;

		width: 100%;
		max-width: 350px;

    padding: 32px;
	}

	.wizard-title-container {
		margin-bottom: 64px;
	}

	h1 {
		margin-bottom: 16px;
  }
</style>