# Prova di fine modulo — Frontend React di base

**Corso:** React con TypeScript · Progettazione di un’applicazione come composizione di componenti  
**Modulo:** M9  
**Durata stimata:** da definire in aula  
**Consegna:** repository GitHub personale + scheda componente Word su Teams

---

## Obiettivo della prova

Progettare e realizzare una piccola applicazione React + TypeScript basata su **due sole pagine**:

1. **Elenco movies** (senza paginazione, senza filtri)
2. **Dettaglio movie** (pagina separata, dati caricati in base all’`id` in URL)

L’applicazione deve essere pensata come **composizione di componenti** e deve dialogare con le API di [The Movie Database (TMDB)](https://www.themoviedb.org/).

Il layout e la composizione delle pagine fanno riferimento al **wireframe HTML** fornito nella cartella `docs` del repository di partenza.

---

## Prerequisiti (argomenti già trattati)

Gli studenti devono dimostrare di saper usare:

| Area       | Concetti                                                                   |
| ---------- | -------------------------------------------------------------------------- |
| React      | Componente, props, `useState`, `useEffect`, eventi (`onClick`, `onChange`) |
| Routing    | React Router (rotte, parametri, `Outlet`)                                  |
| Dati       | `fetch` verso API REST                                                     |
| TypeScript | Tipi di base, interfacce/type per modelli dati e props                     |

---

## API da utilizzare

> Sostituire `****` con la propria API Key TMDB.

### Elenco movies (URL fissa)

```
https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=****
```

- La query è **fissa** (`query=The Lord of the Rings`): **non** devono esserci filtri o input di ricerca.
- Si usa **solo la pagina 1** (default: 20 risultati). **Niente paginazione.**

### Dettaglio movie

```
https://api.themoviedb.org/3/movie/{id}?api_key=****
```

- `{id}` è un parametro di percorso (es. `120`) ricavato dalla route `/movies/:id`.
- La pagina di dettaglio si popola in base a quell’`id`.

### Immagini poster (suggerimento)

Base URL TMDB per i poster: `https://image.tmdb.org/t/p/w500` + `poster_path`.

---

# Parte 1 — Progettazione (scheda componente)

Prima di scrivere codice, analizzare l’applicazione con lo strumento di lavoro **M9 · Scheda componente** (`M9_scheda-componente-semplificata.docx`), seguendo le indicazioni già presenti nel file.

Link FSDA: https://itstalentfactory.sharepoint.com/:w:/r/sites/FSD1_A_25_27/Documenti%20condivisi/General/Materiale%20didattico/Frontend%202/Composition/M9_scheda-componente-semplificata.docx?d=w12dafd9ab4be4f3697ad263a71edb8df&csf=1&web=1&e=MczfYU

Link FSDB: https://itstalentfactory.sharepoint.com/:w:/r/sites/FSD_ED2_25_27/Documenti%20condivisi/General/Materiale%20didattico/2%20anno/Frontend%202/Composition/M9_scheda-componente-semplificata.docx?d=we2411fcf8f304acd9b5c960db4a2d6de&csf=1&web=1&e=RDQscO

Il riferimento visuale per la progettazione è il **wireframe HTML** fornito nella cartella `docs` del repository di partenza.

### Consegna della progettazione — regole obbligatorie

- Il documento di progettazione deve essere **necessariamente in formato Word** (`.docx`).
- **Altri formati** (PDF, Google Docs esportato, Markdown, immagini, ecc.) vengono conteggiati con **valutazione 0**.
- Il file Word compilato deve essere **caricato e consegnato su Teams**.
- La scheda **non** deve essere inclusa nel repository GitHub.

---

# Parte 2 — Sviluppo dell’applicazione

## Repository di partenza

Agli studenti viene fornito un **repository di partenza** che contiene, nella cartella `docs`:

- la **traccia** della prova
- il **wireframe HTML** di riferimento

Partire da quel repository (fork/clone secondo le indicazioni del docente) e sviluppare l’applicazione al suo interno, rispettando il wireframe per layout e composizione.

## Setup obbligatorio

| Voce          | Valore                                                 |
| ------------- | ------------------------------------------------------ |
| Nome progetto | `esame-fe2-{cognome}` (es. `esame-fe2-rossi`)          |
| Stack         | React + TypeScript                                     |
| Routing       | React Router                                           |
| Versionamento | Git + GitHub                                           |
| Commit        | **un commit per ogni step** elencato sotto             |
| Push          | a fine prova (o a fine step, se richiesto dal docente) |

---

## Step di sviluppo (uno = una commit)

Completare gli step **nell’ordine** indicato. Ogni step deve chiudersi con una commit dedicata e un messaggio chiaro.

### Step 1 — Setup del progetto

- Creare / configurare il progetto React + TypeScript con nome `esame-fe2-{cognome}`, a partire dal repository fornito.
- Collegare il repository a GitHub (account personale dello studente).
- Commit: setup iniziale del progetto.

### Step 2 — Dichiarazione dei types

- Nella cartella `docs` del repository fornito sono disponibili la **traccia della prova** e il **wireframe HTML**: usarli come riferimento.
- Creare **tutti i types necessari** all’applicazione (props dei componenti, modelli dell’elenco movies, tipi ausiliari, ecc.).
- **Eccezione:** il type della **risposta di dettaglio movie** viene **fornito già pronto** (vedi Appendice A). Gli studenti lo usano così com’è.
- Commit: dichiarazione types.

### Step 3 — Componente Header

- Realizzare il componente `Header`.
- Commit: Header.

### Step 4 — Shell condivisa

- Realizzare **una sola** Shell (layout) **condivisa** da entrambe le pagine (elenco e dettaglio).
- La Shell deve comprendere **Header** e, nel mezzo, l’**`Outlet`** di React Router.
- Non devono esistere due layout distinti per le due pagine: elenco e dettaglio usano obbligatoriamente la stessa Shell.
- Commit: Shell condivisa.

### Step 5 — Setup di React Router

- Configurare **esattamente** queste **2 rotte**, entrambe figlie della Shell condivisa:
  - elenco movies: `/`
  - dettaglio movie: `/movies/:id`
- Collegare le rotte alla Shell tramite `Outlet`.
- Commit: setup React Router.

### Step 6 — Pagina elenco movies

Requisiti funzionali:

- Usare **esattamente** l’URL API di elenco indicata sopra (cambia solo la API Key dello studente).
- **Nessun filtro**, nessuna ricerca utente, nessuna paginazione.
- Solo la **prima pagina** di risultati (fino a 20 elementi).
- La composizione della pagina (componenti, layout, gerarchia) deve seguire il **wireframe HTML** fornito in `docs`: la struttura è oggetto della prova e non viene ulteriormente specificata qui.

Commit: pagina elenco.

### Step 7 — Pagina dettaglio movie

Requisiti funzionali:

- leggere l’`id` del movie dalla route `/movies/:id`
- chiamare l’API di dettaglio con quell’`id`
- popolare la pagina con i dati ricevuti
- usare il type di dettaglio fornito (Appendice A)
- La composizione della pagina deve seguire il **wireframe HTML** fornito in `docs`: la struttura è oggetto della prova e non viene ulteriormente specificata qui.

Commit: pagina dettaglio.

### Step 8 — Push su GitHub

- Verificare che ogni step abbia la propria commit.
- Eseguire `git push` del repository sul remoto GitHub.
- Condividere l’URL del repo come indicato dal docente.

---

## Criteri di valutazione (sintesi)

| Area          | Cosa si valuta                                                                               |
| ------------- | -------------------------------------------------------------------------------------------- |
| Progettazione | Scheda componente Word compilata, coerente con l’app e con il wireframe; consegnata su Teams |
| Composizione  | Coerenza con il wireframe e separazione in componenti                                        |
| TypeScript    | Types corretti e usati sui componenti / dati                                                 |
| Dati          | `fetch` + `useEffect` + `useState` funzionanti                                               |
| Routing       | Rotte esatte `/` e `/movies/:id`                                                             |
| Requisiti     | Nessun filtro, nessuna paginazione sull’elenco; URL API fissa                                |
| Git           | Una commit per step; repository pushato su GitHub                                            |

---

## Consegne richieste

1. **Scheda componente** in formato **Word** (`.docx`), caricata su **Teams** — non nel repository. Altri formati = valutazione 0.
2. **Repository GitHub** del progetto `esame-fe2-{cognome}` con history a step (senza includere la scheda di progettazione).

---

# Appendice A — Type risposta dettaglio (fornito)

Gli studenti **non** devono inventare da zero il type del dettaglio: viene fornito il seguente modello, allineato alla risposta JSON dell’API.

```ts
type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type MovieDetail = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: BelongsToCollection | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  softcore: boolean;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
```

> I types per l’**elenco** (search) e per le **props** dei componenti devono essere creati autonomamente dagli studenti.
---

# Appendice B — Checklist rapida per lo studente

- [x] Scheda componente Word compilata e caricata su Teams (non nel repo) ✅ 2026-11-25
- [x] Progetto nominato `esame-fe2-{cognome}` a partire dal repo fornito ✅ 2026-11-25
- [x] Consultati traccia e wireframe in `docs` ✅ 2026-11-25
- [x] Types creati (dettaglio fornito + resto autonomo) ✅ 2026-11-25
- [x] Header presente ✅ 2026-11-25
- [x] Una sola Shell condivisa (Header + `Outlet`) per entrambe le pagine ✅ 2026-11-25
- [x] Rotte esatte: `/` e `/movies/:id` ✅ 2026-11-25
- [x] Elenco: URL API fissa, no filtri, no paginazione; coerenza col wireframe ✅ 2026-11-25
- [x] Dettaglio: fetch con `id` da URL; coerenza col wireframe ✅ 2026-11-25
- [x] Una commit per ogni step ✅ 2026-11-25
- [x] Push su GitHub effettuata ✅ 2026-11-25

---

_Documento di traccia — prova di fine modulo Frontend React di base._
