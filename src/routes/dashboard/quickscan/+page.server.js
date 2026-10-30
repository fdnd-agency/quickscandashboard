import { error } from "@sveltejs/kit";
import Papa from "papaparse";


// Haalt de quickscan-data op uit de als CSV gepubliceerde Google Spreadsheet
// en zet die om naar objecten, zodat de pagina er grafieken van kan maken.
export async function load({ fetch }) {
    const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vR5wmgEheMVhpuy8WcQtIfvBUKz5-_g2WEMpq8HzQlDjXFkT_gtiyOKqVJZROhTM5ycWFUGmJlrtIP-/pub?output=csv');

    if (!res.ok) {
        error(500, 'Er ging iets mis bij het ophalen van de data');
    }

// CSV is platte tekst, dus .text() en niet .json()
    const csv = await res.text();

// header: eerste rij wordt kolomnamen, dus row.Voertuigtype i.p.v. rij[9]
// skipEmptyLines: Google stuurt een lege laatste regel mee zodat je weet waar het einde/begin is
    const parsed = Papa.parse(csv, {       
        skipEmptyLines: true,
        header: true,
    })


// Voertuigtype
  const vehicleCounts = {};
  const transportCounts = {};
  const activityCounts = {};
  const activityLocationCounts = {};

//  tel hoe vaak elk voertuigtype voorbij komt
//  const [vehicle] ?? 0) + 1 betekent: heb je dit type nog niet gezien? begin dan bij 0

    for (const row of parsed.data) {
        const vehicle = row.Voertuigtype;
        const transport = row.Transporttype;
        const activity = row.Activiteit;
        const activityLocation = row["Plek activiteit"];

        vehicleCounts[vehicle] = (vehicleCounts[vehicle] ?? 0) + 1;
        transportCounts[transport] = (transportCounts[transport] ?? 0) + 1;
        activityCounts[activity] = (activityCounts[activity] ?? 0) + 1;
        activityLocationCounts[activityLocation] = (activityLocationCounts[activityLocation] ?? 0) + 1;
    }

//  key en value kijken op welke plaats welk voertuig staat.
        return {
            vehicleType: Object.keys(vehicleCounts),
            vehicleAmount: Object.values(vehicleCounts),

            transportType: Object.keys(transportCounts),
            transportAmount: Object.values(transportCounts),
            
            activityType: Object.keys(activityCounts),
            activityAmount: Object.values(activityCounts),
            
            activityLocationType: Object.keys(activityLocationCounts),
            activityLocationAmount: Object.values(activityLocationCounts),
            
    }
    
}

// Voorbeeld van wat je berekent
// rij 1: Voertuigtype = 'Bestelbus'
// vehiclecounts['Bestelbus'] = (vehiclecounts['Bestelbus'] ?? 0) + 1;
// → { Bestelbus: 1 }

// rij 2: Voertuigtype = 'Bakwagen'
// → { Bestelbus: 1, Bakwagen: 1 }

// rij 3: Voertuigtype = 'Bestelbus'
// → { Bestelbus: 2, Bakwagen: 1 }
