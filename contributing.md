# rules & activities:

- Wij gaan communiceren via Teams en daar houden we elkaar ook op de hoogte.
- Ben je bijvoorbeeld later dan laat je dat weten.
- We houden ons aan de planning die per persoon wordt ingedeeld.
- We letten op elkaar.
- Loop je vast, vraag dan op tijd om hulp.

# Regels betreffende code

- Voordat je codeert, maak eerst een issue en werk via branches
- Een branch begint met het issuenummer, bijv. `14-progress-bar`
- Commit veel en met duidelijke naamgeving, begin met het issuenummer: `#14 ...`
- De massa van een PR is niet relevant, liever meer kleine PR's dan 1 grote
- PR's gaan naar `dev`, niet direct naar `main`
- Een groepsgenoot reviewt je PR, je merget nooit je eigen PR
- Het moet werken zonder JavaScript en met alleen het toetsenbord

# Definition of Ready

- Het issue moet het format van een user story hebben;
- Het issue moet geplanpokered zijn;
- Het issue moet een specifieke takenlijst hebben;
- Het issue moet acceptance criteria hebben;
- Het issue moet designs bevatten, indien nodig.

# Definition of Done

- De acceptance criteria zijn allemaal vervuld;
- Eventuele comments en/of feedback zijn verwerkt;
- PRs worden minstens een keer geapproved voor de merge;
- Het werk moet getest zijn doormiddel van Lighthouse, voor zowel performance als accessibility.

## Refinement

### wat zijn de problemen


- chart van UL naar article verranderen 
- een H1 bovenaan met de naam van de page (op de quickscanpage de titel quickscanpage)
- ervoor zorgen dat de chart werkt zonder JS
- zorg ervoor dat de charts leesbaar zijn met een screenreader
- component van charttemplate naar chart hernoemen
- verder aan mobile nav fixen (moet hele scherm innemen als hij openstaat, als hij dicht is moet de sidebar niet zichtbaar zijn, alleen de knop om het te openen)
---

## issues

### hoe werkt een issue?

- we maken een issue volgens DoR
- kijken of er nog iets mist (issue review) dit is voor je begint met coderen!

---

### zodra je begint met coderen, EERST

- je maakt voor ieder component een nieuwe branch
- bekijken in de issue wat je daadwerkelijk moet maken zodat je niet onnodig werk doet

---

### als je klaar bent met je code voor de PR

- zelf nagaan of alles klopt
- een PR aanmaken en deze laten reviewen door groepsgenoot
- beschrijf in de PR hoe de issue moet worden gereviewd

---

### PR reviewen

- als jij degene bent die dit reviewt, kijk in de PR hoe dit moet worden gereviewd
- als je klaar bent met reviewen zet een bericht over het gemaakte werk/code
- eureka!

---

### Conventie Atomic design

- Componenten volgen de richtlijnen van het Atomic design
- Atoms: buttons, forms & headings
- Molecules: atomen samengevoegd, bijvoorbeeld een chart
- Organisms: verschillende mlecules samen, bijvoorbeeld de sidebar
- Templates: bijvoorbeeld header + footer
- pages: volledige pagina, bijvoorbeeld 4 grafieken en de sidebar
