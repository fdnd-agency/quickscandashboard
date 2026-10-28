import { error } from "@sveltejs/kit";
import Papa from "papaparse";


// Haalt de quickscan-data op uit de als CSV gepubliceerde Google Spreadsheet
// en zet die om naar objecten, zodat de pagina er grafieken van kan maken.
export async function load({ fetch }) {
    const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vR5wmgEheMVhpuy8WcQtIfvBUKz5-_g2WEMpq8HzQlDjXFkT_gtiyOKqVJZROhTM5ycWFUGmJlrtIP-/pub?output=csv');

    if (!res.ok) {
        throw error(500, 'Er ging iets mis bij het ophalen van de data');
    }

// CSV is platte tekst, dus .text() en niet .json()
    const csv = await res.text();

// header: eerste rij wordt kolomnamen, dus rij.Voertuigtype i.p.v. rij[9]
// skipEmptyLines: Google stuurt een lege laatste regel mee zodat je weet waar het einde/begin is
    const parsed = Papa.parse(csv, {       
        skipEmptyLines: true,
        header: true,
    })

//  tel hoe vaak elk voertuigtype voorbij komt
//  const [type] betekent: heb je dit type nog niet gezien? begin dan bij 0
//  key en value kijken op welke plaats welk voertuig staat.

// Voertuigtype
  const vehiclecounts = {};
  const transportcounts = {};

    for (const row of parsed.data) {
        const vehicle = row.Voertuigtype;
        const transport = row.Transporttype;
        vehiclecounts[vehicle] = (vehiclecounts[vehicle] ?? 0) + 1;
        transportcounts[transport] = (transportcounts[transport] ?? 0) + 1;
    }

        return {
            vehicletype: Object.keys(vehiclecounts),
            vehicleamount: Object.values(vehiclecounts),

            transportType: Object.keys(transportcounts),
            transportamount: Object.values(transportcounts),
            
    }
    
}

// Voorbeeld van wat je berekent
// rij 1: Voertuigtype = 'Bestelbus'
// counts['Bestelbus'] = (counts['Bestelbus'] ?? 0) + 1;
// → { Bestelbus: 1 }

// rij 2: Voertuigtype = 'Bakwagen'
// → { Bestelbus: 1, Bakwagen: 1 }

// rij 3: Voertuigtype = 'Bestelbus'
// → { Bestelbus: 2, Bakwagen: 1 }
