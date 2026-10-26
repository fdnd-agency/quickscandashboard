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

    return { parsed };
}

