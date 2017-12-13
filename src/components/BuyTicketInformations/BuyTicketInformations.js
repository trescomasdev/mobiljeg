import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './BuyTicketInformations.css';

class BuyTicketInformations extends Component {

  render() {
    return(
      <div id="buy-ticket-informations" className="shadow-6">
        <h1><FontAwesome name='info' />Információk</h1>
        <div className="wyswig">
          <p>Üdvözlünk az online jegypénztárban.</p>
          <p>Az űrlap kitöltése után átirányítunk a Barion online fizetési rendszerébe, ahol gyorsan és biztonságosan megvásárolhatod a belépőjegyed.</p>
          <p>A sikeres tranzakció után automatikusan visszatérsz az oldalra ahol láthatod a váráslásod részleteit és a megvásárolt jegyeket.</p>
          <p>A vásárlásod részleteit és a jegyeket automatikusan elküldjük neked a megadott emailcímre is.</p>
          <p>A megvásárolt jegyek azonnal érvényesíthetőek a beléptető kapuknál.</p>
          <p>Jó szórakozást kívánunk!</p>
        </div>
      </div>
    );

  }
}

export default BuyTicketInformations;
