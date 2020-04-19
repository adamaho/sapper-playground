<script>
	import { goto } from '@sapper/app';
	import Button from '../components/common/Button.svelte';
	import Wizard from '../components/common/Wizard.svelte';

	const handleNavigation = async (route) => {
		await goto(route);
	}
</script>

<svelte:head>
	<title>Tallii</title>
</svelte:head>

<Wizard title="Tallii" description="Keep score.">
	<Button on:click={() => handleNavigation('/login')}>Login</Button>
		<div class="main-button-divider">
			<hr />
			<span>or</span>
			<hr />
		</div>
	<Button on:click={() => handleNavigation('/key')}>Get Started</Button>
</Wizard>

<style>
	.main-button-divider {
		width: 100%;
		display: flex;
		align-items: center;

		margin: 20px 0;
	}

	hr {
		flex: 1;
		border-top: 1px solid white;
		border-right: 0;
		border-left: 0;
		border-bottom: 0;
	}

	span {
		color: white;
		margin: 0 10px;
	}

	:global(button) {
		width: 100%;
	}
</style>
