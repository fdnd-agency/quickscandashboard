<script>
    import LineChart from '#lib/components/molecules/LineChart.svelte'
    import BarChart from '#lib/components/molecules/BarChart.svelte'

    // --- Chart 1 ---
    const drinks = ['Fanta', 'Cola', 'Apple juice', 'Orange juice', 'Chocolate milk']
    const originalData1 = [25, 70, 50, 20, 70]
    let staticData1 = $state([...originalData1])
    const loadChart1 = () => {
      staticData1 = [...originalData1]
    }

      // --- Chart 2 ---
    const colors = ['purple', 'blue', 'green', 'orange', 'pink']
    const originalData2 = [50, 100, 33, 78, 54]
    let staticData2 = $state([...originalData2])
    const loadChart2 = () => {
      staticData2 = [...originalData2]
    }

</script>

<ul class="grid">
  <li class="graphs">
    <LineChart title="Line Chart" chartLabels={drinks} chartData={staticData1} dataLabel="Data 1" onReload={loadChart1} />
  </li>
    <li class="graphs">
    <BarChart title="Bar Chart" chartLabels={colors} chartData={staticData2} dataLabel="Data 2" onReload={loadChart2} />
  </li>
</ul>

<style>
  :root {
    --background: hsl(247, 82%, 98%);
    --component-background: hsl(253, 46%, 92%);
    --component-outline: hsl(240, 20%, 83%);
    --text-color: hsl(256, 33%, 15%);
  }

  @font-face {
    font-family: 'Poppins-Regular';
    src: url('/src/lib/assets/Poppins/Poppins-Regular.ttf');
  }

  :global(*) {
    padding: 0;
    margin: 0;
    font-family: 'Poppins-Regular', sans-serif;
  }

  :global(body) {
    margin: 0;
    background: var(--background);
    margin: 0 0 0 15em;
  }
  


  ul.grid {
    display: grid;
    margin: 1em;
    gap: 1em;
    list-style: none;

    li {
      width: 300px;
    }
  }
</style>