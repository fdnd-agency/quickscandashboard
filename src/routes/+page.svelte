  <script>
    import Progress from '$lib/components/Progress.svelte';
    let count = $state(0); 
           // $state maakt deze variabele reactief, verandert hij, dan bouwt Svelte de pagina opnieuw
</script>
  

<Progress waarde={count} max={10}/>


<button onclick={() => count++}> +1 </button>
<button onclick={() => count--}> -1 </button>