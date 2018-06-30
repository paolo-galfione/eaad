# Enterprise Applications - Workspace

Esempio di Workspace aziendale. Si tratta di un monorepo dove sono gestite applicazioni e librerie in un unico ecosistema

## Utilizzo di schematics

Per associare al progetto ea-schematics digitare:

`npm link ..\ea-schematics`

Pe creare una nuova componente applicativa digitare:

`ng generate ea-schematics:list-and-edit --project=[progetto] --entity=[nome]`

Per esempio:

`ng generate ea-schematics:list-and-edit --project=eal-erp --config=prodotto.yaml`

compilare la libreria `ng build --project=eal-erp --prod`

servire l'applicazione `ng s --project=ea-erp --prod`

## NUOVI COMANDI

Compilazione di tutto il progetto in --prod
`npm run build`

Lanciare l'applicazone + watch/rebuild di tutto (libs e apps)
`npm start`

Servire solamente l'appliczione (dopo aver compilato)
`npm run serve`
