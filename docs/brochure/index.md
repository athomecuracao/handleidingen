# Brochure Maken

Met de At Home Curaçao Brochure Tool genereer je in een paar klikken een professionele PDF-brochure van elke listing op de website. De brochure bevat automatisch alle gegevens: foto's, prijs, kenmerken, beschrijving en contactgegevens.

!!! info "Resultaat"
    Een 4-5 pagina A4 PDF met:

    - **Pagina 1:** Cover met hero-foto, titel, prijs en kenmerken
    - **Pagina 2:** Fotogalerij (tot 7 foto's)
    - **Pagina 3-5:** Beschrijving en contactgegevens
    - At Home Curaçao branding (logo, kleuren, contactinfo)

---

## Wat heb je nodig?

| Vereiste | Toelichting |
|----------|-------------|
| **Mac computer** | Met macOS (kantoorcomputer) |
| **Internetverbinding** | De tool haalt gegevens op van de website |
| **Python 3** | Programmeertaal (eenmalig installeren) |
| **Brochure Tool** | De `athome-brochure` map (eenmalig installeren) |

---

## Eenmalige installatie

Deze stappen hoef je maar **een keer** uit te voeren. Vraag de beheerder om hulp als je vastloopt.

### Stap 1: Controleer of Python is geinstalleerd

Open **Terminal** (zoek via Spotlight: `Cmd + Spatie` → typ "Terminal"):

```bash
python3 --version
```

Je zou iets moeten zien als `Python 3.11.x` of hoger. Als je een foutmelding krijgt, installeer Python eerst:

1. Ga naar [python.org/downloads](https://www.python.org/downloads/)
2. Download de nieuwste versie voor macOS
3. Installeer met de standaardinstellingen

### Stap 2: Installeer de vereiste pakketten

In Terminal, ga naar de brochure-map en installeer de afhankelijkheden:

```bash
cd ~/transm-contact/athome-brochure
pip3 install -r requirements.txt
```

### Stap 3: Installeer de browser-component

De tool gebruikt een ingebouwde browser om de website te lezen:

```bash
playwright install chromium
```

!!! success "Klaar!"
    De installatie is voltooid. Je hoeft deze stappen niet meer te herhalen.

---

## Brochure genereren

### Methode 1: Via het script (aanbevolen)

1. **Dubbelklik** op het bestand `maak-brochure.command` in de `athome-brochure` map
2. Er opent een Terminal-venster
3. **Plak de URL** van de listing (bv. `https://athomecuracao.com/nl/vastgoed/luxe-villa-vista-royal/`)
4. Druk op **Enter**
5. Wacht circa 30 seconden — de brochure wordt automatisch geopend als PDF

### Methode 2: Via Terminal

Open Terminal en voer uit:

```bash
cd ~/transm-contact/athome-brochure
python3 generate_brochure.py https://athomecuracao.com/nl/vastgoed/JOUW-LISTING-URL/
```

De PDF verschijnt in de `output/` map.

### Methode 3: Met aangepaste bestandsnaam

```bash
python3 generate_brochure.py -o mijn-brochure.pdf https://athomecuracao.com/nl/vastgoed/JOUW-LISTING-URL/
```

---

## Stap-voor-stap voorbeeld

1. Ga naar **athomecuracao.com** en zoek de listing waarvoor je een brochure wilt
2. Kopieer de **URL** uit de adresbalk van je browser

    Voorbeeld: `https://athomecuracao.com/nl/vastgoed/luxe-gerenoveerde-villa-cas-grandi-1434656-nl/`

3. Dubbelklik op **maak-brochure.command**
4. Plak de URL met `Cmd + V` en druk op `Enter`
5. Je ziet de voortgang in het Terminal-venster:

    ```
    Listing ophalen: https://athomecuracao.com/nl/vastgoed/...
      Titel: Luxe Gerenoveerde Villa Cas Grandi
      Prijs: XCG 500.000
      Slaapkamers: 3
      Foto's: 7

    PDF genereren...
    Brochure opgeslagen: output/luxe-gerenoveerde-villa-cas-grandi.pdf
    ```

6. De PDF opent automatisch in Preview

!!! tip "Meerdere brochures"
    Je kunt het script meerdere keren achter elkaar draaien voor verschillende listings. Alle PDF's worden bewaard in de `output/` map.

---

## Waar vind ik de brochures?

Alle gegenereerde brochures staan in:

```
athome-brochure/output/
```

De bestandsnaam wordt automatisch afgeleid van de listing-URL, bijvoorbeeld:
`luxe-gerenoveerde-villa-cas-grandi-1434656-nl.pdf`

---

## Veelgestelde vragen

??? question "Ik krijg een foutmelding 'command not found'"
    Python is waarschijnlijk niet geinstalleerd. Volg de installatiestappen hierboven of vraag de beheerder.

??? question "De brochure bevat geen foto's"
    Controleer je internetverbinding. De tool moet de foto's van de website downloaden.

??? question "Het script doet niets / hangt"
    - Controleer of de URL correct is (moet beginnen met `https://athomecuracao.com/`)
    - Controleer je internetverbinding
    - Probeer opnieuw — soms is de website even traag

??? question "Kan ik de brochure aanpassen?"
    De brochure wordt automatisch gegenereerd met de At Home Curaçao huisstijl. Voor aanpassingen aan het ontwerp, neem contact op met de beheerder.

??? question "Werkt dit ook op Windows?"
    Het script is gemaakt voor macOS. Voor Windows-gebruik, neem contact op met de beheerder.

---

## Inhoud van de brochure

De gegenereerde brochure bevat automatisch:

| Onderdeel | Bron |
|-----------|------|
| **Titel** | Listing titel van de website |
| **Prijs** | Actuele prijs in XCG |
| **Kenmerken** | Slaapkamers, badkamers, woon-/grondoppervlakte |
| **Hero-foto** | Eerste foto van de listing |
| **Fotogalerij** | Tot 7 foto's van de listing |
| **Beschrijving** | Volledige beschrijvingstekst |
| **Contactgegevens** | At Home Curaçao telefoon, e-mail, adres |
| **Logo & branding** | At Home Curaçao huisstijl |
