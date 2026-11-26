<script>
	import Chart from 'chart.js/auto';

	let { title, chartLabels, chartData, dataLabel, chartType } = $props();

	let canvas = $state();

	// maak een cssVar functie
	const cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

	$effect(() => {
		if (!canvas) return;

		// onderstaande dataset regels zijn gemaakt door claude, heeft te maken met het uitlezen van verschillende
		// kleuren uit de stylesheet met JS, hij telt langs de variabelen (--chart-1 & --chart-2 etc)
		// maak van css-variablele een JS-variabele
		const textColor = cssVar('--text-color');
		const gridColor = cssVar('--component-outline');

		// Palet uit de stylesheet
		const palette = ['--chart-1', '--chart-2', '--chart-3', '--chart-4', '--chart-5'].map((name) =>
			cssVar(name)
		);

		// pie en doughnut gedragen zich anders dan line en bar
		const isCircular = chartType === 'pie' || chartType === 'doughnut';

		// één kleur per segment, palet loopt rond als er meer data dan kleuren is
		const data = $state.snapshot(chartData);
		const segmentColors = data.map((_, i) => palette[i % palette.length]);

		// kleur van de text
		Chart.defaults.color = textColor;
		// kleur van de grafiek gridlines
		Chart.defaults.borderColor = gridColor;

		const chart = new Chart(canvas, {
			type: chartType,
			data: {
				labels: $state.snapshot(chartLabels),
				datasets: [
					{
						label: dataLabel,
						data,

						// kleur van het vierkant op de hover
						backgroundColor: isCircular ? segmentColors : palette[0],
						// kleur/styling van de line
						borderColor: isCircular ? cssVar('--component-background') : palette[0],
						borderWidth: isCircular ? 2 : undefined,
						tension: isCircular ? undefined : 0.4,
						pointStyle: isCircular ? undefined : false
					}
				]
			},
			options: {
				plugins: {
					legend: { display: isCircular }
				}
			}
		});

		// wordt uitgevoerd vóór de volgende run en bij het verwijderen van het component
		return () => chart.destroy();
	});
</script>

<ul class="wrapper">
	<li class="head">
		<h2>{title}</h2>
	</li>
	<li>
		<canvas bind:this={canvas}></canvas>
	</li>
</ul>

<style>
	/* chart styling */

	article.wrapper {
		padding: var(--spacing-16px);
		background: var(--component-background);
		color: var(--text-color);
		border: solid var(--component-outline) 2px;
		border-radius: 1em;

		h2 {
			margin: 0;
			padding-bottom: var(--spacing-8px);
			font-size: var(--text-size-s);
			font-weight: 500;
		}
	}
</style>
