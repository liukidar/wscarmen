<template>
  <div>
    <div id="private" class="container">
      <h2 class="center-align" style="padding:20px; margin-top:20px; font-family:'Poiret ONe';">PRIVATI</h2>
      <flow-text>
        Vantaggi per i soci IG Passivhaus Lombardia:
        <ul class="browser-default">
          <li>Membership a iPHA (International Passivhaus Association) che comporta i vantaggi elencati qui</li>
          <li>Volume “La Passivhaus</li>
          <li>Presenza sul sito internet ufficiale dell'associazione</li>
          <li>Download gratis di utili tools e documentazione</li>
          <li>Essere membro di un gruppo di professionisti per scambio informazioni, formazione, team work, ecc.</li>
          <li>Ricevere gratuitamente pubblicazioni e miniguide tematiche PH</li>
          <li>Partecipazione gratuita ai seminari organizzati dall’Associazione</li>
          <li>Partecipazione a prezzo scontato, ai seminari con conferimento di CFP</li>
          <li>Partecipazione a viaggi-studio con costo agevolato</li>
        </ul>
        <span class="black-text">Per iscriversi scaricare il Modulo di Richiesta Adesione come socio 2018:</span>
      </flow-text>
      <a class="btn btn-large main-color waves-effect waves-light"><i class="material-icons right">file_download</i>Download</a>
      <hr class="grey lighten-1" style="margin-top:40px;"/>
    </div>
    <div id="society" class="container">
      <h2 class="center-align" style="padding:20px; margin-top:0; font-family:'Poiret ONe';">AZIENDE</h2>
      <flow-text>
        Il partner IG PH Lombardia ha la possibilità di:
        <ul class="browser-default">
          <li>Fare pubblicità durante i corsi organizzati e promossi da IGP Lombardia con l’inserimento delle proprie brochure e gadget all'interno del materiale fornito ai corsisti</li>
          <li>Inserire pubblicità sul sito IGP Lombardia (logo e breve descrizione attività dell'azienda)</li>
          <li>Inserire link sul sito IGP Lombardia</li>
          <li>Avere agevolazioni per iscrizione dipendenti nel caso di corsi organizzati e promossi da IG PH Lombardia</li>
          <li>Ottenere la disponibilità a organizzare eventi congiunti (corsi o seminari di aggiornamento) presso la sede del partner con relatore a pagamento di €. 250,00 che potrà essere un tecnico IG PH Lombardia o tecnici scelti da IG PH Lombardia</li>
          <li>Utilizzare il logo “AZIENDA PARTNER” di IGP Lombardia rinnovato ogni anno, da utilizzare sul proprio sito o sulle proprie brochure/depliant</li>
          <li>Ricevere copie di dispense e/o materiale pubblicitario riguardante il PASSIVHAUS preparate da IG PH Lombardia</li>
          <li>Informare IG PH Lombardia del contenuto delle comunicazioni che le aziende partner vogliono trasmettere ai contatti gestiti da IG PH Lombardia, in modo da poterli verificare ed inviare così l’informativa</li>
          <li>Inserire pubblicità delle aziende partner nelle newsletter inviate ai professionisti in collegamento con IG PH Lombardia</li>
          <li>Usufruire dei vantaggi della Membership ad iPHA</li>
        </ul>
      </flow-text>
      <hr class="grey lighten-1" style="margin-top:40px;"/>
    </div>
    <logo></logo>
  </div>
</template>

<script>
import FlowText from './components/utility/FlowText'
import Logo from './components/utility/Logo'

export default {
  components: {
    FlowText, Logo
  }
}
</script>

<style scoped>
li {
  padding:5px 0;
  line-height: 1.3;
  list-style-type: disc;
}
</style>
