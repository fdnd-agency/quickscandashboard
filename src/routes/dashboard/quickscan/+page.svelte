<script>
    import BarChart from '#lib/components/molecules/BarChart.svelte';
    
    // invalidateAll laat SvelteKit alle load()-functies opnieuw draaien,
    // zodat de reload-knop de nieuwste data uit de spreadsheet ophaalt
    import { invalidateAll } from '$app/navigation';

    let { data } = $props();

</script>


<BarChart
  title="voertuigtypes"
  chartLabels={data.vehicletype}
  chartData={data.vehicleamount}
  dataLabel="Soorten voertuigtypes"
  onReload={invalidateAll}
/>

<BarChart
title="Transporttypes"
chartLabels={data.transportType}
chartData={data.transportamount}
dataLabel="Soorten transporttypes"
onReload={invalidateAll}
/>

<BarChart
title="Activiteit"
chartLabels={data.activityType}
chartData={data.activityamount}
dataLabel="Soorten activiteiten"
onReload={invalidateAll}
/>


<!-- Tijdelijk: toont de geparste data om te checken of het inladen werkt.
     JSON.stringify maakt het object leesbaar, 2 = inspringing) -->
<!-- <pre>{JSON.stringify(data.parsed.data, null, 2)}</pre> -->
