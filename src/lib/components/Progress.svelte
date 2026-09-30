  <script>
        import Progress from '$lib/components/Progress.svelte';
  </script>

  <div class="progress">
    <div class="progress-label">Voortgang</div>
      <div class="track"><div class="fill"></div></div>
  </div>

  <style>
    .track {
        background-color: hsl(260 24 80);
        border-radius: 99px;
        overflow: hidden;
        height: 18px;
    }

    .fill {
        background: hsl(260 47 33);
        border-radius: 99px;
        height: 100%;
        width: 50%;

        transition: width 0.3s ease-in-out;
    }

  </style>