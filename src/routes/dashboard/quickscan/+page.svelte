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

<BarChart
title="Transporttypes"
chartLabels={data.transportType}
chartData={data.transportAmount}
dataLabel="Soorten transporttypes"
onReload={invalidateAll}
/>

<BarChart
title="Activiteit"
chartLabels={data.activityType}
chartData={data.activityAmount}
dataLabel="Soorten activiteiten"
onReload={invalidateAll}
/>

<BarChart
title="Locatie Activiteit"
chartLabels={data.activityLocationType}
chartData={data.activityLocationAmount}
dataLabel="Locaties activiteiten"
onReload={invalidateAll}
/>

<!-- Tijdelijk: toont de geparste data om te checken of het inladen werkt.
     JSON.stringify maakt het object leesbaar, 2 = inspringing) -->
<!-- <pre>{JSON.stringify(data.parsed.data, null, 2)}</pre> -->
