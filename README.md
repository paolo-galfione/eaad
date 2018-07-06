# Enterprise Applications - Angular Day 2018

Questo repository contiene:

-   ea-workspace: un workspace di Angular 6 che illustra le nuove funzionalità per la gestione di wokspaces che supportano più applicazioni e librerie.

-   ea-chematics: un progetto schematics che permette di automatizzare la creazione di componenti applicative pronte all'uso

# Slides

[Slides](eaad_slides.pdf) della presentazione fatta all'Angular Day 2018 - Verona - 15/06/2018 by Paolo Galfione

# Versioni

0.1.0 - ea-erp - prima versione del workspace applicativo by Paolo Galfione
0.2.0 - ea-schematics - prima versione del progetto schematics by Paolo Galfione

# ChangeLog

0.2.1 - ea-schematics - seconda versione del progetto schematics by Daniele Morosinotto

-   Rimosso dipendenze non utilizzate
-   Refactor parametro `config` in **`entity`**

0.2.2 - ea-erp - seconda versione del progetto schematics by Daniele Morosinotto

-   Aggiunto scripts custom per start/serve con watch/build di tutto (libs+app)
-   Aggiunto esempio utilizzo schematics per generare feature ProdottoModule
-   Rimosso dipendenze non utilizzate
-   Setup minimale (tolto tutti test, karma, e2e, tslint)
