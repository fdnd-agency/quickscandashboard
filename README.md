# Coding the Curbs - Quickscan Dashboard

Readme Quickscan Dashboard

## Inhoudsopgave

- [Live link](#live-link)
- [Installatie-instructies](#installatie-instructies)
- [Beschrijving van de site](#beschrijving-van-de-site)
- [Mockups van de site](#mockups-van-de-site)
- [Gebruik van de site](#gebruik-van-de-site)
- [Bronnen](#bronnen)
- [Designkeuzes](#designkeuzes)
- [Kenmerken van de site (code)](#kenmerken-van-de-site-code)
- [Link naar code conventies](#link-naar-code-conventies)
- [Link naar CONTRIBUTING.MD](#link-naar-contributingmd)

## Live link
https://quickscandashboard.netlify.app/dashboard/quickscan

## Installatie-instructies


### Installeren

1. Clone de repository:

```sh
git clone https://github.com/fdnd-agency/quickscandashboard.git
cd quickscandashboard
```

2. Zet je lokale branch op `dev`. Wij werken nooit direct op `main`; zie [CONTRIBUTING.md](./contributing.md):

```sh
git checkout dev
```

3. Installeer de dependencies:

```sh
npm install
```

Dit haalt ook `chart.js` en `papaparse` binnen, want die staan al in `package.json`. Installeer ze dus **niet** apart met `npm install chart.js` — dan kan de versie afwijken van `package-lock.json` en krijg je conflicten bij het mergen.

4. Start de dev-server:

```sh
npm run dev
```

De app staat nu op `http://localhost:5173`. Direct openen in de browser:

```sh
npm run dev -- --open
```

### Waar vind je wat

| Route | Wat het is |
| --- | --- |
| `/dashboard` | Dashboard van de opdrachtgever |
| `/dashboard/quickscan` | Grafieken op basis van de ingevulde data |

### Databron

De grafieken halen hun data uit een als CSV gepubliceerde Google-spreadsheet. De URL staat in `src/routes/dashboard/quickscan/+page.server.js`.

Krijg je de melding *"Er ging iets mis bij het ophalen van de data"* (HTTP 500), dan is de spreadsheet niet meer publiek toegankelijk. 

### Productie-build

```sh
npm run build
```

De build lokaal bekijken:

```sh
npm run preview
```

Voor deployen gebruiken we `@sveltejs/adapter-auto`, die automatisch de juiste adapter voor Netlify kiest.




zie de wiki
https://github.com/fdnd-agency/quickscandashboard/wiki/installatie-app

## Beschrijving van de site
Onze pagina is een toevoeging aan het al bestaande QuickScan-dashboard. Wij bouwen een nieuwe pagina die leidt naar de inzichten van de data die op straat verzameld wordt. 
De data komt uit de spreadsheet die bij de quickscan wordt ingevuld. Wij lezen die in en zetten hem om in grafieken, zodat je in één oogopslag ziet welke voertuigen, transporttypes en activiteiten er voorkomen en op welke plek.



## Mockups van de site

<img width="979" height="807" alt="image" src="https://github.com/user-attachments/assets/6cc6a602-1a56-4f00-bbb3-dae0fa62d665" />
<img width="1197" height="711" alt="image" src="https://github.com/user-attachments/assets/7d988d8b-f08f-4a70-9331-6daec2649fdb" />


## Gebruik van de site
Je landt op de dashboardpagina. Hier krijg je meteen inzicht in de resultaten uit de spreadsheet d.m.v. grafieken. Er is via het zijmenu één pagina beschikbaar: de quickscanpagina. Hier zie je line- en barcharts.

## Bronnen
https://www.chartjs.org/ (Chart.js-documentatie)

https://www.youtube.com/watch?v=-FN16LKpkzM (chartjs tutorial)

https://www.npmjs.com/package/papaparse(papaparse documentatie)


## Designkeuzes
Wij hebben een eigen nieuwe styleguide gemaakt van het quickscan dashboard en deze voor ons eigen dashboard gebruikt, alle kleuren, tekstgroottes gaps en widths hebben wij zelf na-gemaakt en geïmplementeerd, ook hebben we een werkend en getest light en dark mode. Het design zelf van het dashboard daarentegen is een kopie van het al bestaande dashboard.

## Kenmerken van de site (code)
We hebben specifieke code gemaakt zodat de grafieken die in JS worden geladen en gestyled, de variabelen van de stylesheet kunnen lezen zodat de light en darkmode ook werken binnen de JS van de grafieken.

De grafieken werken via Chart.js https://www.chartjs.org/.
De data van de grafieken worden via een Google Spreadsheet ingeladen. Dit wordt gedaan via papaparse https://www.npmjs.com/package/papaparse.

We hebben ons werk gecompacteerd naar zo min mogelijk code voor zoveel mogelijk functionaliteit dit komt omdat we ons herhalende code op hebben gedeeld via componenten!


## Link naar code-conventies
[codeconventies] 
(https://github.com/fdnd-agency/quickscandashboard/wiki/Code%E2%80%90conventies)

## Link naar CONTRIBUTING.MD
[link naar contributing]
(https://github.com/fdnd-agency/quickscandashboard/blob/dev/contributing.md)



