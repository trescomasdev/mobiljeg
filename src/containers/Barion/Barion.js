import React, { Component } from 'react';
import { connect } from "react-redux";

class Barion extends Component {

  render() {
    return (
      <div id="barion" className="section">

          <div className="container">

            <div className="block-title-holder">
              <div className="col-md-12">
                <h1 className="block-title">Barion fizetési rendszer</h1>
              </div>
            </div>

            <div className="block-content">
              <div className="col-md-12">
                <div className="wyswig">
                  <h2>Mit jelent a BARION™?</h2>
                  <p>A Barion elektronikus fizetéseket lebonyolító szolgáltatás, amivel kényelmesen és biztonságosan tudsz bankkártyával, vagy előre feltöltött egyenleggel fizetni webáruházakban, mobilalkalmazásokban, vagy barátaidnak.</p>
                  <p>A szolgáltatást nyújtó Barion Payment Zrt a Magyar Nemzeti Bank felügyelete alatt álló intézmény, engedélyének száma: H-EN-I-1064/2013.</p>
                  <h2>Fizess kényelmesen bankkártyával</h2>
                  <p><b>A bankkártyás fizetéshez nem kötelező a regisztráció</b>, elég megadni bankkártyád számát, a lejárati dátumot és a hátoldalon található CVC kódot, valamint egy működő e-mail címet.</p>
                  <p>Ha azonban regisztrálsz, <b>soha többé nem kell begépelned a kártyaszámodat egyetlen Barion elfogadóhelyen sem</b>, a fizetéshez elég az e-mailcímed és jelszavad. Ez nem csak kényelmes, de a biztonságodat is növeli!</p>
                  <h3>Fizetéshez használhatod:</h3>
                  <ul>
                    <li>Mastercard vagy Maestro bankkártyádat</li>
                    <li>Visa vagy Electron bankkártyádat</li>
                    <li>Amex bankkártyádat</li>
                  </ul>
                  <h2>Fizess kényelmesen bankkártya nélkül</h2>
                  <p>Ha nincsen bankkártyád, fizetéshez használhatod, az előre feltölt Barion egyenlegedet, amelyet átutalással vagy készpénz befizetéssel tudsz feltölteni, illetve amire ismerőseid, üzletfeleid tudnak neked pénzt küldeni. Ebben az esetben e-mailcímed és jelszavad megadásával tudsz fizetni.</p>
                  <h2>Ingyenes</h2>
                  <p>A bankkártyás fizetésnek a <b>vásárló részére nincsen és nem is lehet felára.</b> A regisztráció és a Barion mobilalkalmazás, valamint a pénz fogadás és küldés ingyenes, és az is marad.Nincs havi díj sem.</p>
                  <h2>Kövesd vásárlásaidat</h2>
                  <p>A Barion alkalmazásokkal követheted vásárlásaidat, a weben vagy mobilon. Az ingyenes Barion tárca azonnal jelzi minden vásárlásodat, még azt is látod, mit vettél. Barion egyenleged is itt kezelheted, illetve pénzt küldhetsz vagy fogadhatsz</p>
                  <h2>Első a biztonság</h2>
                  <p>A Barion szervereit a Comodo 2048 bites TLS titkosítása védi. Fizetés előtt mindig ellenőrizd, hogy valóban a Barion biztonságos szerverén adod meg a fizetéshez szükséges bankkártya adatokat vagy jelszót.<b>A böngésződ zöld színnel jelzi</b>,ha a fizetés és a fizetőoldal tulajdonosát <b>Barion Payment Inc [HU]</b> néven azonosítja.</p>
                  <p>A Barion rendelkezik a bankkártya társaságok által megkövetelt PCI DSS tanúsítvánnyal, így jogosult bankkártya adatokat kezelni. A Barion szerverek biztonságát a Magyar Nemzeti Bank előírása szerint alakították ki.</p>
                </div>
              </div>
            </div>

        </div>

      </div>
    );
  }
}

export default Barion;
