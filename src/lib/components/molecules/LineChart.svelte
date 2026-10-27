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
      type: 'line',
      data: {
        labels: $state.snapshot(chartLabels),
        datasets: [{
          label: dataLabel,
          data: $state.snapshot(chartData),
          tension: 0.4,
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