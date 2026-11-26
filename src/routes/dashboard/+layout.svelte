<script>
	import Sidebar from '#lib/components/organisms/sidebar-page.svelte';
	import favicon from '#lib/assets/favicon.svg';
	import '#lib/styles/stylesheet.css';

	import { page } from '$app/state';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Coding The Curbs Dashboard</title>
</svelte:head>

<Sidebar />



<header>
    <h1>{page.url.pathname.split('/').at(-1)}</h1>
    <!-- in een grote string/route elke keer als een"/" word gevonden word de string opgesplitst de .at(-1) selecteerd de laatste split/item in de array.
    (de array begint altijd bij 0 bij -1 loopt het naar de laatste -2 de een na laatste) -->
</header>

<main>
	{@render children()}
</main>

<style>

	:global(:has(.collapsible-menu :checked)) {
	    header {
			margin-left: 100px;	
		}
	    
		main {
			margin-left: 75px;
		}
    }

    header {
        margin-left: 300px;
        height: 75px;

        h1 {
            font-size: var(--text-size-m);
            margin-top: var(--spacing-8px);
            color: var(--text-color);
        }
    }

	main {
		min-height: 100vh;
		display: grid;
		place-items: center;
		margin-left: 275px;
	}
	
</style>
