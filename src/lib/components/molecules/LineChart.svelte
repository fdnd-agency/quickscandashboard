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
      type: 'line',
      data: {
        labels: $state.snapshot(chartLabels),
        datasets: [{
          label: dataLabel,
          data: $state.snapshot(chartData),
          tension: 0.4,
          pointStyle: false,

          // kleur van het vierkant op de hover
          backgroundColor: ['hsl(257, 89%, 74%)'],
          // kleur van de line
          borderColor: ['hsl(257, 89%, 74%)']
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        }
      }
    })

    return () => chart.destroy()
  })
</script>


<ul class="wrapper">
  <li class="">
    <p>{title}</p>
  </li>
  <!-- chart canvas -->
   <canvas bind:this={canvas}></canvas>
</ul>

<style>
    /* chart styling */

    ul.wrapper {
        padding: 1em;
        background: var(--component-background);
        color: var(--text-color);
        border: solid var(--component-outline) 2px;
        border-radius: 1em;
        list-style: none;

          li {
            p {
              margin: 0;
              padding-bottom: 0.5em;
            }
          }
    }
</style>
