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
