<script context="module">
	export async function preload (page, session) {
		console.log(session);
    if (!session) {
      this.redirect(302, 'login')
    }
  }
</script>

<script>
// 	import { stores } from '@sapper/app';

// 	import { Button } from '../../components/common';
// 	const { session } = stores();

// 	function handleDestroy() {
// 		$session.destroy();
// 	}
</script>

<svelte:head>
	<title>Tallii</title>
</svelte:head>


<h1>App</h1>