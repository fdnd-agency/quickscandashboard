<script>
	import Sidebar from '#lib/components/organisms/sidebar-page.svelte';
	import favicon from '#lib/assets/favicon.svg';
	import '#lib/styles/stylesheet.css';

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

<style>
	:global(body:has(.collapsible-menu :checked)) {
		/*border: 10px solid red;*/
		main {
			margin-left: 75px;
		}
	}
        h1 {
            font-size: var(--text-size-m);
            margin-top: var(--spacing-8px);
            color: var(--text-color);
        }

	main {
		min-height: 100vh;
		display: grid;
		place-items: center;
		margin-left: 275px;
	}
</style>
