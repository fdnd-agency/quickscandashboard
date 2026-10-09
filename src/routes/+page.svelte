<script>
  import Progress from '$lib/components/Progress.svelte';
    import { linear } from 'svelte/easing';
// $state maakt deze variabele reactief, verandert hij, dan bouwt Svelte de pagina opnieuw
// voortgang = index
  let count = $state(0); 

  function atScroll(event) {
    const carousel = event.currentTarget;
    count = Math.round(carousel.scrollLeft / carousel.clientWidth) + 1;
  } 
//   const options = {
//   root: document.querySelector("#scrollArea"),
//   rootMargin: "0px",
//   scrollMargin: "0px",
//   threshold: 1.0,
// };

// const observer = new IntersectionObserver(callback, options);


</script>



<!-- progress-bar code -->
<Progress waarde={count} max={10}/>

<section class="form" onscroll={atScroll}>
    <form action="" method="get">
        <ul>
            <li>
                <div class="">
                  <label for="datum">datum:</label>
                  <input
                    type="date"
                    id="datum"
                    name="datum"
                    value="vandaag" />
                </div>

                <div class="">
                  <label for="tijdstip">tijdstip:</label>
                  <input
                    type="time"
                    id="tijdstip"
                    name="tijdstip"
                    required />
                </div>
            </li>

            <li>
                <div class="">
                  <label for="voertuig">type voertuig:</label>

                  <select name="voertuig" id="voertuig-select">
                    <option value="">--kies een optie--</option>
                    <option value="cargobike">cargobike</option>
                    <option value="personenauto">personenauto</option>
                    <option value="bestelbus">bestelbus</option>
                    <option value="bakwagen">bakwagen</option>
                    <option value="vrachtwagen">vrachtwagen</option>
                    <option value="trekker-oplegger">trekker-oplegger</option>
                    <option value="anders">anders</option>
                  </select>
                </div>
            </li>

            <li>
                <div class="">
                  <label for="bedrijfsnaam">bedrijfsnaam:</label>
                  <input type="text" name="bedrijfsnaam" id="bedrijfsnaam" required />
                </div>
            </li>

              <li>
                <div class="">
                  <label for="type-transport">type transport:</label>

                  <select name="transport" id="transport-select">
                    <option value="">--kies een optie--</option>
                    <option value="horeca">horeca</option>
                    <option value="pakketten/post">pakketten/post</option>
                    <option value="retail">retail</option>
                    <option value="facilitair/service">facilitair/service</option>
                    <option value="bouw">bouw</option>
                    <option value="afval/reiniging">afval/reiniging</option>
                    <option value="eigen vervoer">eigen vervoer</option>
                    <option value="anders of onbekend">anders of onbekend</option>
                  </select>
                </div>
              </li>

              <li>
                <div class="">
                  <label for="activiteit">activiteit:</label>
                    <select name="transport" id="transport-select">
                    <option value="">--kies een optie--</option>
                    <option value="laden en lossen">laden en lossen</option>
                    <option value="kort stoppen">kort stoppen</option>
                    <option value="service/werkzaamheden">service/werkzaamheden</option>
                    <option value="anders">anders</option>
                  </select>
                </div>
              </li>

              <li>
                <div class="">
                  <label for="plaats-activiteit">plaats van de activiteit</label>
                    <select name="plaats-activiteit" id="plaats-activiteit">
                    <option value="">--kies een optie--</option>
                    <option value="laad- en losvak">laad- en losvak</option>
                    <option value="rijbaan">rijbaan</option>
                    <option value="stoep">stoep</option>
                    <option value="fietspad">fietspad</option>
                    <option value="parkeerplaats">parkeerplaats</option>
                    <option value="anders">anders</option>
                  </select>
                </div>
              </li>

              <li>
                <div class="">
                  <label for="status-laad-losplek">status van de laad- en losplek:</label>
                    <select name="transport" id="transport-select">
                    <option value="">--kies een optie--</option>
                    <option value="vrij">vrij</option>
                    <option value="logistiek">logistiek</option>
                    <option value="bezet">bezet</option>
                    <option value="niet-logistiek bezet">niet-logistiek bezet</option>
                    <option value="geblokkeerd/niet bruikbaar">geblokkeerd/niet bruikbaar</option>
                  </select>
                </div>
            </li>

            <li>
                <div class="">
                  <label for="omvang-levering-hulpmiddelen">omvang van de levering en gebruikte hulpmiddelen:</label>
                  <input type="text" name="omvang-levering-hulpmiddelen" id="omvang-levering-hulpmiddelen" required/>
                </div>
            </li>

            <li>
                <div class="">
                  <label for="duur-activiteit">starttijd en eindtijd van de activiteit:</label>
                  <label for="start-time">start tijd:</label>
                  <input type="time" id="start-tijd" name="start-tijd">
                                  
                  <label for="end-time">eind tijd:</label>
                  <input type="time" id="eind-tijd" name="eind-tijd">
                </div>
            </li>

            <li>
                <div class="">
                  <label for="conflicten">aanwezigheid, type en ernst van hinder of conflicten:</label>
                  <input type="text" name="conflicten" id="conflicten"/>
                </div>
            </li>
            <li>
                <div class="">
                  <label for="Verkeersveiligheid">Verkeersveiligheid en het type onveilige situatie:</label>
                  <input type="text" name="Verkeersveiligheid" id="Verkeersveiligheid"/>
                </div>
            </li>

            <li>
                <div class="">
                  <label for="Verkeersveiligheid">foto:</label>
                  <input type="text" name="Verkeersveiligheid" id="Verkeersveiligheid"/>
                </div>
                <div class="">
                  <label for="vrije-notitie">vrije notitie:</label>
                  <input type="text" name="vrije-notitie" id="vrije-notitie"/>
                </div>

                <div class="verder">
                  <input type="submit" value="versturen"/>
                </div>   
            </li>


        </ul>
    </form>
</section>

<style>

* {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-weight: 600;
}


section.form {
    justify-self: center;
    justify-content: center;
    width: 100vw;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;   /* snap per slide */
    scrollbar-width: none;           /* scrollbar op de wrapper verbergen */


    ul {
        display: flex;
        width: max-content;          /* zo breed als alle slides samen */
        /* width: 100%; */
        height: 100vh;
        scrollbar-width: none;
        list-style: none;


        li {
            flex: 0 0 100vw;         /* elke slide is precies 1 scherm breed */
            box-sizing: border-box;  /* padding telt mee binnen die 100vw */
            scroll-snap-align: start;/* snap-punt */

            justify-content: center;
            align-content: center;
            padding: 3em;
            background: hsl(251, 100%, 94%);

            div {
                display: flex;
                padding: 1em 0 0 0;
                flex-direction: column;
                gap: .5em;
            }

            /* knop voor pc om verder te gaan */
            div.verder {
                place-self: end;
            }

            input {
                border-radius: 50px;
                border-style: none;
                padding: 12.5px;
            }

            select {
                border-radius: 50px;
                border-style: none;
                padding: 12.5px;

            }

        }
    }
}

</style>