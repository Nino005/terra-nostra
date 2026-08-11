TERRA NOSTRA — PRENOTAZIONI + CODICE + AREA DIPENDENTI

COSA C'È:
- index.html: sito pubblico con prenotazione.
- staff.html: area dipendenti per inserire prenotazioni telefoniche e gestire stato.
- Code.gs: backend Google Apps Script.
- Il Google Sheet contiene Codice e Origine oltre ai dati già presenti.

CODICE PRENOTAZIONE:
Ogni prenotazione riceve un codice tipo:
TN-260815-7K4P

Il cliente lo vede dopo l'invio e può copiarlo o condividerlo su WhatsApp.
Le prenotazioni telefoniche inserite dai dipendenti ricevono lo stesso tipo di codice.

AREA DIPENDENTI:
1. Dopo aver incollato Code.gs in Apps Script, esegui la funzione:
   setupStaffPin
2. Google chiederà il PIN del personale.
3. Inserisci un PIN di almeno 4 caratteri, meglio 6-8.
4. Il PIN viene salvato nelle Script Properties e non nel sito.
5. Pubblica/aggiorna la Web App come prima.
6. L'area dipendenti sarà:
   https://TUO-SITO.github.io/staff.html

I dipendenti possono:
- inserire prenotazioni arrivate per telefono;
- vedere tutte le prenotazioni;
- vedere il codice;
- vedere se arrivano dal sito o dal telefono;
- confermare una prenotazione;
- annullarla;
- aggiornare la lista.

CAPACITÀ:
- massimo 100 persone per singola prenotazione;
- massimo 120 persone per turno pranzo;
- massimo 120 persone per turno cena;
- venerdì chiuso;
- mercoledì sera chiuso;
- sabato 19:30 non disponibile;
- gli altri orari sono quelli configurati nel sito.
Le prenotazioni annullate non consumano capacità.

GOOGLE SHEET:
Le colonne diventano:
Ricevuta il | Data | Ora | Persone | Nome e cognome | Telefono | Note | Stato | Codice | Origine

ATTENZIONE AL VECCHIO FOGLIO:
Il codice prova a creare le colonne nuove I/J. Le vecchie prenotazioni non avranno automaticamente un codice storico; le nuove sì. Se vuoi, puoi poi assegnare codici alle vecchie manualmente.

AGGIORNAMENTO:
Dopo aver sostituito Code.gs:
Distribuisci > Gestisci deployment > matita > nuova versione > Distribuisci.
L'URL /exec può rimanere lo stesso.

Dopo aver sostituito index.html e aggiunto staff.html su GitHub Pages, non serve cambiare il link Apps Script se è già quello usato dal sito.

SICUREZZA:
Il PIN dipendenti è una protezione pratica per un piccolo ristorante, ma non equivale a un sistema di autenticazione aziendale. Non usare un PIN troppo semplice e cambialo se viene divulgato.
