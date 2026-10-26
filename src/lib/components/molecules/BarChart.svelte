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

  $effect(() => {
    if (!canvas) return

    const chart = new Chart(canvas, {
      type: 'bar',
      options: {
        plugins: {
          legend: { display: true, position: 'right' }
        }
      },
      data: {
        labels: $state.snapshot(chartLabels),
        datasets: [{
          label: dataLabel,
          data: $state.snapshot(chartData),
          backgroundColor: [
            'hsl(257, 89%, 74%)',
            'hsl(195, 100%, 45%)',
            'hsl(167, 52%, 51%)',
            'hsl(25, 86%, 66%)',
            'hsl(318, 79%, 70%)'
          ]
        }]
      }
    })

    Chart.defaults.color = '#E5E1F4';
    Chart.defaults.borderColor = '#E5E1F4';

    // wordt uitgevoerd vóór de volgende run en bij het verwijderen van het component
    return () => chart.destroy()
  })
</script>

<ul class="wrapper">
  <li class="head">
    <p>{title}</p>
    <button type="button" onclick={onReload} aria-label="Reload">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" /><path d="M20 4v5h-5" /></svg>
    </button>
  </li>
  <li>
    <canvas bind:this={canvas}></canvas>
  </li>
</ul>

<style>

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

button {
  border-style: none;
  background: none;

  svg {
    background: var(--background);
    color: var(--text-color);
    border-radius: 5em;
    padding: 0.5em;
    height: min-content;
    width: 30px;
    height: 30px;
  }
    :hover {
    background: var(--hover-color);
    }
}

button {
    border-radius: 5em;
    border-style: none;
    padding: 0.5em;
    height: min-content;
    width: 40px;
    height: 40px;
  }

</style>