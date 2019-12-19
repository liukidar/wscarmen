export const module = {
  namespaced: true,
  state: {
    it: {
      title: 'maria tesè <span class="text-main-color" style="font-weight: bold;">+</span> sara pinchetti',
      subtitle: 'progettare; realizzare; vivere',
      description: 'Studio di architettura',
      sections: {
        about: {
          title: 'Lo Studio',
          description: 'Progettiamo e realizziamo il luogo in cui vivere e lavorare, amare e giocare.<br>' +
          'Immaginiamo l’ambiente in cui respiriamo come una seconda pelle, dove i colori e i materiali si ' +
          'uniscono in modo armonico,<br>creando un calore visivo e personale<i>, unico.</i>',
          people: [
            {
              name: 'Maria Tesè',
              type: 'architetto - titolare dello studio',
              content: [
                'Sono nata a Ghedi, in provincia di Brescia, il 5 novembre 1965. ' +
                  'Ho frequentato il liceo artistico ad indirizzo architettonico ed in seguito mi sono laureata in ' +
                  'architettura al Politecnico di Milano.',
                'Ottenuta l’abilitazione, nel 1995 ho aperto il mio primo studio nel centro di Brescia, dopo alcuni ' +
                  'anni come dipendente di un importante studio di architettura e urbanistica della mia città.'
              ],
              info: [
                'Mi occupo soprattutto di ristrutturazioni di edifici ad uso residenziale, oltre alla progettazione di ville unifamiliari ed edifici commerciali e direzionali.',
                'Mi piace mantenere il contatto diretto con i miei clienti, decidere con loro, coinvolgerli nel progetto e renderli partecipi nello svolgimento dei lavori.'
              ],
              more: [
                'Ho molti collaboratori, ognuno con un ruolo ben preciso, con i quali condivido ogni giorno le fasi costruttive dei cantieri e le loro problematiche.',
                'Collaboro da quindici anni con un’impresa edile, da cui traggo il grande insegnamento del saper costruire.'
              ],
              contacts: [
                ['phone', '+39 3477242729'],
                ['email', 'carmen.tese@gmail.com'],
                ['alternate_email', 'maria.tese@archiworldpec.it']
              ]
            },
            {
              name: 'Sara Pinchetti',
              type: 'architetto - collaboratrice',
              content: [
                'Sono nata a Brescia il 7 ottobre 1992.',
                'Dopo aver preso il diploma di liceo scientifico mi sono laureata nel 2014 in Scienze ' +
                  'dell’Architettura e nel 2018 in “Architettura per il nuovo e l’antico” all’università IUAV di ' +
                  'Venezia. Nel dicembre 2018 ho ottenuto l’abilitazione.'
              ],
              info: [
                'Mi sono laureata con la tesi “Visioni paesaggistiche per l’ex monastero di Santo Stefano. ' +
                'Un progetto didattico-sperimentale per Collebeato” approfondendo il tema della ' +
                'riqualificazione e del restauro nel territorio bresciano.'
              ],
              more: [],
              contacts: [
                ['phone', '+39 339.8154713'],
                ['email', 'sarapinchetti@gmail.com']
              ]
            }
          ]
        },
        news: {
          title: 'Novità'
        },
        infos: {
          title: 'Info'
        },
        contacts: {
          title: 'Scrivici',
          subtitle: 'Compila il seguente form per contattarci',
          rows: [
            {
              description: '',
              labels: ['Nome', 'Cognome', 'Email']
            },
            {
              description: 'Cosa devi comunicarci?',
              labels: ['Invia']
            }
          ]
        }
      },
      quotes: [
        '"progettare con particolare attenzione ai sistemi costruttivi volti al risparmio energetico, con l’utilizzo di energie rinnovabili, anche in costruzioni vincolate e/o paesaggisticamente rilevanti."'
      ]
    },
    en: {

    }
  },
  getters: {
    text(state, getters, rootState) {
      return state[rootState.lang]
    }
  }
}
