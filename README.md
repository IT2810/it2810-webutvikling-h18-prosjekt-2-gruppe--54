# it2810-webutvikling-h18-prosjekt-2-gruppe--54

Documentation - group 54

Vi valgte å bruke et lignende sideoppsett som malen gitt i oppgaven, med 4 tabs der en tab er til en utstilling. Istedenfor check-boxes som brukes i malen, valgte vi å bruke radio-buttons for å la brukeren velge kategori på de ulike mediene. Radio-buttons var et naturlig valg siden vi bare ville vise èn type kategori av et gitt medie om gangen. For eksempel ville vi ikke at man skulle kunne velge både “piano” og “gitar” for musikk av åpenbare grunner. Vi implementerte radio-buttons med checked for å behandle tilstanden til de ulike knappene slik at react vet hvordan de skal rendres, og onChange for å behandle det som skal skje når man trykker på en av knappene. I konstruktoren til app.js holder vi styr på ulike tilstander. Vi har 3 tilstander for kategori av mediene: “soundTheme”, “textTheme” og “artTheme”. Disse endres når man trykker på radio-buttons av funksjoner definert av onChange. I tillegg har vi en tilstand for hvert bilde, sang og dikt i de forskjellige tabbene. 

Bilder, sanger og tekst: Vi valgte å laste ned ferdiglagde bilder, lyder og dikt istedenfor å lage alt selv. Vi fant diktene på www.poetryfoundation.org, sangene på www.freesound.org og bildene på http://www.averybunch.com/svg-files. Diktene satte vi inn i JSON-filer med format {“dikt”: “...”}. For å kunne bare laste inn de diktene vi trenger til en valgt kategori har vi en fil til hvert dikt, og bruker metoden fetch med webadressen til diktet som argument, først når vi vil trenger diktet. For å enkelt kunne generere webadresser til bildene, sangene og tekstene sorterte vi dem i mapper på type medie, og lagde filnavn som inneholdt informasjon om kategori. For å lett kunne bruke webadressene i koden lagde vi 3 arrays som inneholdt adressene til filene.
Tabs-system: For å kunne la brukeren velge mellom å se de 4 ulike kombinasjonene valgte vi å bruke et tabs-system med en tab til hver kombinasjon. Tabs-systemet implementerte vi ved å lage en Tabs-komponent og en Tab-komponent. Tabs-komponenten bruker Tabs og holder styr på hvilken av de som er aktiv, slik at vi vet hva som skal vises/spilles av.

For å teste systemet lagde vi brukerhistorier (forenklet versjon, ettersom vi ikke har ulike typer brukere) som vi testet på de ulike enhetene. Noen av brukerhistoriene gikk ut på å teste at de funksjonelle kravene ble oppfylte, mens andre gikk mer på at designet skulle fremtre som planlagt på de ulike formatene. 


Brukerhistoriene er som følger:
Kan velge bilde, lyd og tekst ved hjelp av radio buttons
Filer blir lastet inn med ajax etter valg av radio buttons
Filer som ikke blir etterspurt av brukeren skal ikke lastes inn. 
På enheter med breddeformat skal bildet opptre på siden av teksten.
På enheter med høydeformat skal bildet opptre mellom tekst og kategori-menyen. 
Dersom man endrer på formatet for skjermen, skal størrelse på bildet også endres.

Brukerhistorier 2 og 3 ble testet ved hjelp av network-funksjonen i Chrome DevTool, som viser blant annet hvilket filnavn og filtype som blir etterspurt. Når brukeren velger en ny kategori, dukker det opp en ny request for den valgte fila. Det dukker ikke opp noen requests før man velger kategorier. 

For å teste brukerhistorier 4-6 valgte vi å bruke responsive (design) mode i nettleserne Chrome og Safari for å simulere testing på forskjellige enheter. I safari er det ferdiglagde modeller for testing av designet på ulike versjoner av iPhones, iPads og større vinduer, mens i chrome var vi hovedsakelig nødt til å skalere vinduet etter hvordan vi ville teste det. Responsive mode var en enkel løsning da det kom til testing av det responsive designet, og vi fikk bekreftet at viewport, media queries, skalerende bilder og flyten i designet fungerte på en rekke enheter.

Vi har også kjørt to brukertester, hvor testsubjektene ikke hadde noen form for IT-bakgrunn. Totalt sett konkluderte de med at siden var enkel og lett å navigere i, men kunne justere litt på noen elementer slik at det ble mer estetisk. Det var hovedsakelig snakk om sidestilling/sentrering av elementer. Dette tok vi til oss og endret i neste push.

