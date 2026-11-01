<script>
    import ChartTemplate from '#lib/components/molecules/ChartTemplate.svelte';
    
    let { data } = $props();

</script>


<ChartTemplate
  chartType='line'
  title="voertuigtypes"
  chartLabels={data.vehicleType}
  chartData={data.vehicleAmount}
  dataLabel="Soorten voertuigtypes"
/>

<ChartTemplate
chartType='bar'
title="Transporttypes"
chartLabels={data.transportType}
chartData={data.transportAmount}
dataLabel="Soorten transporttypes"
/>

<ChartTemplate
chartType='bar'
title="Activiteit"
chartLabels={data.activityType}
chartData={data.activityAmount}
dataLabel="Soorten activiteiten"
/>

<ChartTemplate
chartType='bar'
title="Locatie Activiteit"
chartLabels={data.activityLocationType}
chartData={data.activityLocationAmount}
dataLabel="Locaties activiteiten"
/>

<!-- Tijdelijk: toont de geparste data om te checken of het inladen werkt.
     JSON.stringify maakt het object leesbaar, 2 = inspringing) -->
<!-- <pre>{JSON.stringify(data.parsed.data, null, 2)}</pre> -->
