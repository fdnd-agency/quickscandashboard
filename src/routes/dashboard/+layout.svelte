<script>
	import Sidebar from '#lib/components/organisms/sidebar-page.svelte';
	import favicon from '#lib/assets/favicon.svg';
	import '../../stylesheet.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Coding The Curbs Dashboard</title>
</svelte:head>

<Sidebar />
<main>
	{@render children()}
</main>
