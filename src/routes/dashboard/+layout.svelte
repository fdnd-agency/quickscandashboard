<script>
	import Sidebar from '#lib/components/organisms/sidebar-page.svelte'
	import favicon from '#lib/assets/favicon.svg';
	import '../../stylesheet.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Sidebar />
{@render children()}
