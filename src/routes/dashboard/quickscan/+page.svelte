<script>
    import ChartTemplate from '#lib/components/molecules/ChartTemplate.svelte';
    
    let { data } = $props();

</script>


<ChartTemplate
  chartType='line'
  title="voertuigtypes"
  chartLabels={data.voertuigLabels}
  chartData={data.voertuigAantallen}
  dataLabel="Soorten voertuigtypes"
/>

<!-- Tijdelijk: toont de geparste data om te checken of het inladen werkt.
     JSON.stringify maakt het object leesbaar, 2 = inspringing) -->
<!-- <pre>{JSON.stringify(data.parsed.data, null, 2)}</pre> -->
