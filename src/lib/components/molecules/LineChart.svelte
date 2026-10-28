<script>
  import Chart from 'chart.js/auto'

  let {
    title,
    chartLabels,
    chartData,
    dataLabel,
    onReload,
  } = $props()

  let canvas = $state()
  // haalt de waarde van een CSS-variabele op

  // maak een cssVar functie
  const cssVar = (name) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim()

  $effect(() => {
    if (!canvas) return

    // maak van css-variablele een JS-variabele
    const textColor = cssVar('--text-color')
    const gridColor = cssVar('--component-outline')

    // kleur van de text
    Chart.defaults.color = textColor
    // kleur van de grafiek gridlines
    Chart.defaults.borderColor = gridColor

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
