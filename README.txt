TERRA NOSTRA — GOOGLE SHEETS

1. Crea un Foglio Google chiamato, per esempio, "Prenotazioni Terra Nostra".
2. Vai su Estensioni > Apps Script.
3. Incolla tutto Code.gs e salva.
4. In alto a destra: Esegui il deployment > Nuovo deployment.
5. Tipo: App web.
6. Esegui come: Me.
7. Chi ha accesso: Chiunque.
8. Esegui il deployment e copia l'URL che termina con /exec.
9. Apri index.html e cerca:
   const GOOGLE_SCRIPT_URL="INCOLLA_QUI_URL_APPS_SCRIPT";
10. Sostituiscilo con l'URL copiato.
11. Carica index.html su GitHub Pages.

Il primo invio crea automaticamente la scheda "Prenotazioni".
Colonne:
Ricevuta il | Data | Ora | Persone | Nome e cognome | Telefono | Note | Stato

Lo stato iniziale è "Da confermare".

Le immagini restano locali:
scapoli.jpg
antipasto.jpg
ravioli.jpg
pasta.jpg
pizza.jpg
caption(1).jpg
zampogna.jpg

La guida ufficiale Google per le Web App Apps Script:
https://developers.google.com/apps-script/guides/web

NOTA: il foglio deve restare privato. L'URL dell'Apps Script è pubblico perché il sito deve poter inviare le richieste. Per un sistema ad alto traffico conviene aggiungere CAPTCHA/Turnstile e ulteriori controlli anti-abuso.
