<script>
  import Progress from '$lib/components/Progress.svelte';
// $state maakt deze variabele reactief, verandert hij, dan bouwt Svelte de pagina opnieuw
// voortgang = index
  let count = $state(0); 

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

<section class="form">
    <form action="" method="get">
        <ul>
            <li id="">
                <div class="">
                  <label for="name">Enter your name: </label>
                  <input type="text" name="name1" id="name1" required />
                </div>
            
                <!-- <div class="verder">
                  <input type="button" value="verder" onclick={volgende}>
                </div> -->
            </li>

            <li id="">
                <div class="">
                  <label for="name">Enter your name: </label>
                  <input type="text" name="name2" id="name2" required />
                </div>
                
           <!-- <div class="verder">
                  <input type="button" value="verder" onclick={volgende}>
                </div> -->
            </li>

            <li id="">
                <div class="">
                  <label for="name">Enter your name: </label>
                  <input type="text" name="name3" id="name3" required />
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

        }
    }
}

</style>