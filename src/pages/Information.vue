<template>
  <div>
    <div class="main-color">
      <h2 class="center-align white-text title z-depth-2">{{$lang.app.igp}}</h2>
    </div>
    <div id="igp" class="container" style="padding-top:10px;">
      <flow-text>
        Il Gruppo Regionale Passivhaus è identificato col nome “IG Passivhaus Lombardia” (InteressenGemeinschaft Passivhaus Lombardia) o per brevità con l'acronimo “IGPLombardia ”, e viene costituito come associazione apartitica, aconfessionale e senza fini di lucro con personalità giuridica per la promozione e la divulgazione della cultura architettonica finalizzata al benessere abitativo degli edifici a “energia quasi zero”. L'IGPLombardia  ha sede nel Comune di Crema (CR) con indirizzo: Via Vimercati n°16. Il Gruppo IGPLombardia  svolge la propria attività in autonomia e coopera con le organizzazioni nazionali e internazionali nonché con le altre IGP che promuovano lo Standard Passivhaus come riconosciuto dal Passivhaus Institut di Darmstadt.
      </flow-text>
      <logo></logo>
      <flow-text>
        IGPLombardia persegue esclusivamente scopi immediatamente fruibili, con i quali la società comune si arricchisce sul piano intellettuale, culturale, ecologico ed economico. IGPLombardia  non ha scopi di lucro e ispira le proprie attività ai principi di sostenibilità, indipendenza, imparzialità, cooperazione, creazione di reti. Lo standard Passivhaus è in grado di soddisfare i requisiti di benessere abitativo e comfort sia in edifici residenziali sia non residenziali, nelle nuove costruzioni e nelle ristrutturazioni. La realizzazione di edifici Passivhaus presuppone elevata attenzione alla progettazione architettonica, alla bioclimatica, alla cura dei dettagli, accuratezza nell’esecuzione e garanzia di professionalità da parte di Tecnici ed Esecutori. L’IGPLombardia  vuole contribuire a diffondere questo sapere e a garantire criteri di qualità, perseguendo i seguenti obiettivi:
        <ul class="browser-default">
          <li>Divulgazione della cultura architettonica e urbanistica finalizzata al benessere abitativo degli edifici a “energia quasi zero”</li>
          <li>Diffusione di informazioni e know-how principalmente secondo gli standard costruttivi Passivhaus ed Enerphit</li>
          <li>Definizione della qualità da rispettare nella costruzione di edifici Passivhaus, stimolando lo sviluppo e la produzione di componenti passivi</li>
          <li>Sviluppo di strategie per una rapida diffusione mirata degli standard costruttivi Passivhaus</li>
          <li>Creazione di reti e collaborazioni fra le persone, Enti pubblici, Istituzioni, Ditte di Consulenza, Studi di Progettazione, Ditte Artigiane ed Edili e Associazioni</li>
          <li>Consulenza professionale e strategica, corsi di formazione, collaborazioni commerciali ecc</li>
          <li>Diffusione dello standard costruttivo Passivhaus e azioni mirate alla costruzione di edifici Passivhaus</li>
        </ul>
      </flow-text>
    </div>
    <div id="passivhaus" class="container">
      <h2 class="center-align title">{{$lang.app.passivhaus}}</h2>
      <iframe style="padding:20px;max-width:100%;width:560px;" height="333" src="https://www.youtube.com/embed/Lr1XbRaR3gM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <flow-text>
        Lo standard Passivhaus è nato nel maggio 1988 da una collaborazione tra Bo Adamson dell'Università di Lund in Svezia e Wolfgang Feist dell'Institut für Umwelt und Wohnen (Istituto per l'Ambiente e l'Edilizia) in Germania. La loro idea è stata poi sviluppata attraverso un numero di progetti di ricerca, col sostegno finanziario da parte dello Stato tedesco di Hessen.
      </flow-text>
      <flow-text>
        Le prime abitazioni Passivhaus furono costruite a Darmstadt in Germania nel 1990, e occupate dai proprietari l'anno successivo.
      </flow-text>
      <flow-text>
        Il Passivhaus Institut è stato fondato nel settembre 1996, sempre a Darmstadt, per promuovere e controllare gli standard. Da allora sono state costruiti migliaia di edifici Passivhaus, fino a superare le 25.000 unità nel 2010, ma si presume che il numero si attesti intorno alle 40.000 unità. La maggior parte si trova in Germania ed Austria, ma ne sono state realizzate moltissime in svariati altri Paesi del mondo. La città di Heidelberg in Germania ha recentemente avviato il progetto Bahnstadt, che consiste nella realizzazione dell'area più grande al mondo con edifici costruiti secondo lo standard Passivhaus.
      </flow-text>
      <hr class="grey lighten-1" style="margin:40px 0;"/>
    </div>
    <div id="executive" class="container">
      <h2 class="center-align title" style="margin-bottom:0;">{{$lang.app.executive}}</h2>
      <flow-text class="grey-text" style="margin:0 0 60px 0;">Per maggiori informazioni clicca sulle immagini.</flow-text>
      <div class="row">
        <person class="col l4 m6 s12"></person>
        <person class="col l4 m6 s12"></person>
        <person class="col l4 m6 s12"></person>
      </div>
      <hr class="grey lighten-1" style="margin:40px 0;"/>
    </div>
    <div id="partner" class="container">
      <h2 class="center-align title" style="margin-bottom:0;">{{$lang.app.partner}}</h2>
      <flow-text class="grey-text" style="margin:0 0 60px 0;">Per maggiori informazioni clicca sui loghi.</flow-text>
    </div>
    <logo></logo>
  </div>
</template>

<script>
import FlowText from './components/utility/FlowText'
import Logo from './components/utility/Logo'
import Person from './components/misc/Person'

export default {
  components: {
    FlowText, Logo, Person
  }
}
</script>
