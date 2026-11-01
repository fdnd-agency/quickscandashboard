  <script>
        let {waarde, max} = $props(); 
                // met props kan je variabelen opvangen die vanuit een ouder-component worden meegestuurd
        let voortgang = $derived (Math.max(0, Math.min(waarde / max * 100)));
                // $derived rekent zichzelf opnieuw uit zodra waarde of max verandert

  </script>

  <div class="progress">
    <div class="progress-label">Voortgang</div>
      <div class="track"><div class="fill" style="width:{voortgang}%;"></div></div>
      </div>

       {voortgang}


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
        transition: width 0.3s ease-in-out;
    }

  </style>