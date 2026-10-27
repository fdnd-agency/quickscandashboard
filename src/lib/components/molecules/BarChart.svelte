<script>
  import Chart from 'chart.js/auto'
  import '../../../stylesheet.css'

  let {
    title,
    chartLabels,
    chartData,
    dataLabel,
    onReload,
  } = $props()

  let canvas = $state()

  // kleur van de text
  Chart.defaults.color = '#E5E1F4'
  // kleur van de grafiek gridlines
  Chart.defaults.borderColor = 'hsl(257, 36%, 27%)'

  $effect(() => {
    if (!canvas) return

    const chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: $state.snapshot(chartLabels),
        datasets: [{
          label: dataLabel,
          data: $state.snapshot(chartData),
          // kleur van de line
          backgroundColor: ['hsl(257, 89%, 74%)']
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        }
      }
    })

    // wordt uitgevoerd vóór de volgende run en bij het verwijderen van het component
    return () => chart.destroy()
  })
</script>

<ul class="wrapper">
  <li class="head">
    <p>{title}</p>
  </li>
  <li>
    <canvas bind:this={canvas}></canvas>
  </li>
</ul>

<style>



</style>