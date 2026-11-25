# Prova di Fine Modulo — Frontend React di base (M9)

**Candidato:** Filippo Granata  
**Progetto:** `esame-fe2-granata`  
**Stack:** React 19 · TypeScript · React Router · Vite  

---

## 📖 Descrizione del Progetto

Applicazione web sviluppata in **React** con **TypeScript** come prova di fine modulo **M9** (*Progettazione di un'applicazione come composizione di componenti*).

L'applicazione dialoga con le API di **The Movie Database (TMDB)** ed è progettata seguendo fedelmente il wireframe fornito e la metodologia di analisi a componenti (le *5 lenti*).

### Struttura dell'Applicazione

L'applicazione è basata su **due sole pagine** figlie di una **Shell comune**:

1. **Shell condivisa (`/`)**: 
   - Layout persistente condiviso da tutte le viste.
   - Comprende il componente `Header` (con logo e shortcut di navigazione) e l'`Outlet` di React Router.
2. **Pagina Elenco Movies (`/`)**:
   - Mostra i primi 20 risultati ottenuti dall'endpoint di ricerca TMDB con query fissa (`query=The Lord of the Rings`), senza paginazione né filtri utente.
   - Ogni film è rappresentato tramite il componente `MovieCard` con titolo, data di uscita formattata, voto medio, breve trama e pulsante di navigazione verso il dettaglio.
   - Gestione robusta degli stati di caricamento (`isLoading`) e degli eventuali errori di rete (`error`).
3. **Pagina Dettaglio Movie (`/movies/:id`)**:
   - Recupera dinamicamente l'`id` dalla rotta URL tramite `useParams`.
   - Effettua la chiamata all'endpoint di dettaglio TMDB (`/movie/{id}`) per popolare la pagina con i dati completi del film.
   - Mostra poster/immagine, titolo, tagline, badge per i generi, pills con metadati tecnici (data, durata, voto, voti ricevuti, stato e lingua), trama completa ed elenco delle case di produzione.
   - Pulsante dedicato per tornare all'elenco.

---

## 🛠️ Tecnologie e Librerie

- **React 19**
- **TypeScript**
- **React Router** (gestione rotte e parametri dinamici)
- **Vite** (build tool e dev server)

---

## 🚀 Istruzioni per l'Avvio

### 1. Clonare il repository e installare le dipendenze
```bash
git clone <URL_DEL_REPO>
cd esame-frontend2-granata
npm install
```

### 2. Configurare la chiave API
Creare un file `.env` nella radice del progetto e inserire la propria API Key di TMDB:
```env
VITE_API_KEY=la_tua_api_key_tmdb
```

### 3. Avviare il server di sviluppo
```bash
npm run dev
```

### 4. Compilazione per la produzione
```bash
npm run build
```
