import { error } from '@sveltejs/kit';
import Papa from 'papaparse';

// Tel hoe vaak elke waarde in een kolom voorkomt.
// ?? 0 betekent: heb je deze waarde nog niet gezien? begin dan bij 0
const countColumn = (rows, column) => {
	const counts = {};

	for (const row of rows) {
		const value = row[column];
		counts[value] = (counts[value] ?? 0) + 1;
	}	

	return counts;
};

// Haalt de quickscan-data op uit de als CSV gepubliceerde Google Spreadsheet
// en zet die om naar objecten, zodat de pagina er grafieken van kan maken.
export async function load({ fetch }) {
	const res = await fetch(
		'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5wmgEheMVhpuy8WcQtIfvBUKz5-_g2WEMpq8HzQlDjXFkT_gtiyOKqVJZROhTM5ycWFUGmJlrtIP-/pub?output=csv'
	);

	if (!res.ok) {
		error(500, 'Er ging iets mis bij het ophalen van de data');
	}

	// CSV is platte tekst, dus .text() en niet .json()
	const csv = await res.text();

	// header: eerste rij wordt kolomnamen, dus row.Voertuigtype i.p.v. rij[9]
	// skipEmptyLines: Google stuurt een lege laatste regel mee zodat je weet waar het einde/begin is
	const parsed = Papa.parse(csv, {
		skipEmptyLines: true,
		header: true
	});

	const vehicleCounts = countColumn(parsed.data, 'Voertuigtype');
	const transportCounts = countColumn(parsed.data, 'Transporttype');
	const activityCounts = countColumn(parsed.data, 'Activiteit');
	const activityLocationCounts = countColumn(parsed.data, 'Plek activiteit');
	const hinderCounts = countColumn(parsed.data, 'Hinder');
	const statusCounts = countColumn(parsed.data, 'Status plek');


	// keys zijn de namen voor de labels, values de aantallen voor de staven/segmenten
	return {
		vehicleType: Object.keys(vehicleCounts),
		vehicleAmount: Object.values(vehicleCounts),

		transportType: Object.keys(transportCounts),
		transportAmount: Object.values(transportCounts),

		activityType: Object.keys(activityCounts),
		activityAmount: Object.values(activityCounts),

		activityLocationType: Object.keys(activityLocationCounts),
		activityLocationAmount: Object.values(activityLocationCounts),

		hinderType: Object.keys(hinderCounts),
		hinderAmount: Object.values(hinderCounts),

		statusType: Object.keys(statusCounts),
		statusAmount: Object.values(statusCounts),

	};
}

// Voorbeeld van wat countColumn berekent
// rij 1: Voertuigtype = 'Bestelbus'
// counts['Bestelbus'] = (counts['Bestelbus'] ?? 0) + 1;
// → { Bestelbus: 1 }

// rij 2: Voertuigtype = 'Bakwagen'
// → { Bestelbus: 1, Bakwagen: 1 }

// rij 3: Voertuigtype = 'Bestelbus'
// → { Bestelbus: 2, Bakwagen: 1 }
