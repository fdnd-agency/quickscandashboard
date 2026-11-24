<script>
	import ChartTemplate from '#lib/components/molecules/ChartTemplate.svelte';

	let { data } = $props();
</script>
<section>
<ChartTemplate
	chartType="bar"
	title="voertuigtypes"
	chartLabels={data.vehicleType}
	chartData={data.vehicleAmount}
	dataLabel="Soorten voertuigtypes"
/>

<ChartTemplate
	chartType="bar"
	title="Transporttypes"
	chartLabels={data.transportType}
	chartData={data.transportAmount}
	dataLabel="Soorten transporttypes"
/>

<ChartTemplate
	chartType="pie"
	title="Activiteit"
	chartLabels={data.activityType}
	chartData={data.activityAmount}
	dataLabel="Soorten activiteiten"
/>

<ChartTemplate
	chartType="bar"
	title="Locatie Activiteit"
	chartLabels={data.activityLocationType}
	chartData={data.activityLocationAmount}
	dataLabel="Locaties activiteiten"
/>
</section>

<style>
section {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
}
</style>