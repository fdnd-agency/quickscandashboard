import { error } from "@sveltejs/kit";



export async function load({ fetch }) {
    const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vR5wmgEheMVhpuy8WcQtIfvBUKz5-_g2WEMpq8HzQlDjXFkT_gtiyOKqVJZROhTM5ycWFUGmJlrtIP-/pub?output=csv');

    if (!res.ok) {
        throw error(500, 'Er ging iets mis bij het ophalen van de data');
    }

    const csv = await res.text();

    return { csv };
}