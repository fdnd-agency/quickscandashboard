<<<<<<< Updated upstream
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
=======
  <script>
    import Progress from '$lib/components/Progress.svelte';
    let count = $state(0); 
           // $state maakt deze variabele reactief, verandert hij, dan bouwt Svelte de pagina opnieuw
</script>
  

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>


<Progress waarde={count} max={10}/>


<button onclick={() => count++}> +1 </button>
<button onclick={() => count--}> -1 </button>
>>>>>>> Stashed changes
