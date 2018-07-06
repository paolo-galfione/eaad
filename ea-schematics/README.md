# Enterprise Applications - Angular Day 2018

ea-chematics è un progetto schematics che permette di automatizzare la creazione di componenti applicative pronte all'uso

# Istruzioni per l'utilizzo

Compilare schematics tramite i seguenti comandi:
`npm i && npm run build`

Per utilizzare `ea-schematics` sposarsi nella cartella dell'applicazione angular (ad esempio `cd ea-workspace`) ed eseguire i seguenti comandi:

```terminal
npm link <percorso_relativo_per_raggiungere>/ea-schematics
```

Per usare il generatore eseguire:

```terminal
ng generate ea-schematics:list-and-edit --project=<nome_progetto> --entity=<nome_file.yaml>
```

o con sintassi abbreviata:

```terminal
ng g ea-schematics:lae --project=eal-erp --entity=product.yaml
```

Trovate [qui](product.yaml) un esempio di file di definizione di un entity [cliente.yaml](product.yaml)
