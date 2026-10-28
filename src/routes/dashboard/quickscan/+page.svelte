<script>
    import ChartTemplate from '#lib/components/molecules/ChartTemplate.svelte';
    
    // invalidateAll laat SvelteKit alle load()-functies opnieuw draaien,
    // zodat de reload-knop de nieuwste data uit de spreadsheet ophaalt
    import { invalidateAll } from '$app/navigation';

    let { data } = $props();

</script>


<ChartTemplate
  chartType='line'
  title="voertuigtypes"
  chartLabels={data.voertuigLabels}
  chartData={data.voertuigAantallen}
  dataLabel="Soorten voertuigtypes"
  onReload={invalidateAll}
/>

<!-- Tijdelijk: toont de geparste data om te checken of het inladen werkt.
     JSON.stringify maakt het object leesbaar, 2 = inspringing) -->
<!-- <pre>{JSON.stringify(data.parsed.data, null, 2)}</pre> -->
