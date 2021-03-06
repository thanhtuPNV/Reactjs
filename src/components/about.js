import "./content.css";
import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <h1>About</h1>
        {/* <div className="container">
          <div className="product" data-id="id03" data-price={36.00} data-title="Self Cooling Shot Glasses" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw41227dfc/images/113190_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Self%20Cooling%20Shot%20Glasses_10451_10001_208772_-1_26715_11497_208858" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw41227dfc/images/113190_a.jpg)', backgroundSize: 'cover'}}>
            <span>Self Cooling Shot Glasses</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id02" data-price={28.00} data-title="Bluetooth Travel Speaker" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwe0e73100/images/124573_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Stockwell%20Travel%20Speaker_10451_10001_223993_-1_26707_26707_224026" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwe0e73100/images/124573_a.jpg)', backgroundSize: 'cover'}}>
            <span>Bluetooth Travel Speaker</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id04" data-price={350.00} data-title="Tivoli Model Three BT Radio" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw5e7162c9/images/107683_a.jpg" data-url="https://www.momastore.org/webapp/wcs/stores/servlet/ProductDisplay_Tivoli%20Model%20One%20Radio_10467_10001_160674_-1_26663_26666_144554" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw5e7162c9/images/107683_a.jpg)', backgroundSize: 'cover'}}>
            <span>Tivoli Model Three BT Radio</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id05" data-price="849.60" data-title="OP-1 Portable Synthesizer" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwa7be5a1d/images/107081_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_OP%201%20Portable%20Synthesizer_10451_10001_183571_-1_26663_26666_183605" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwa7be5a1d/images/107081_a.jpg)', backgroundSize: 'cover'}}>
            <span>OP-1 Portable Synthesizer</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id06" data-price={200.00} data-title="Glass Pot" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw7eba3a76/images/107152_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Glass%20Pot_10451_10001_191558_-1_26669_46171_185600" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw7eba3a76/images/107152_a.jpg)', backgroundSize: 'cover'}}>
            <span>Glass Pot</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id07" data-price={135.00} data-title="Andy Warhol Skull Plates" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwf83e0ae1/images/124994_a_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_All%20In%20One%20Kitchen%20Tool%20Set_10451_10001_172698_-1_26708_48664_172711" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwf83e0ae1/images/124994_a_a.jpg)', backgroundSize: 'cover'}}>
            <span>Andy Warhol Skull Plates</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id08" data-price={25.00} data-title="Pixel Worktop Saver" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw27c96d2b/images/110390_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Pixel%20Worktop%20Saver_10451_10001_199069_-1_26669_26670_199110" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw27c96d2b/images/110390_a.jpg)', backgroundSize: 'cover'}}>
            <span>Pixel Worktop Saver</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id09" data-price="13.99" data-title="Andy Warhol Pocket Planner" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw80528596/images/99694_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Andy%20Warhol%20Pocket%20Planner_10451_10001_154662_-1_26674_26677_154679" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw80528596/images/99694_a.jpg)', backgroundSize: 'cover'}}>
            <span>Andy Warhol Pocket Planner</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id10" data-price="8.99" data-title="2018 Modern Art Mini Wall Calendar" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwc3023311/images/123752_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_2016%20Modern%20Art%20Mini%20Wall%20Calendar_10451_10001_207782_-1_26674_11527_207788" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwc3023311/images/123752_a.jpg)', backgroundSize: 'cover'}}>
            <span>2018 Modern Art Mini Wall Calendar</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id11" data-price="21.95" data-title="New York Art Print" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw952014b1/images/96511_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_New%20York%20Art%20Print_10451_10001_136554_-1_26674_26678_136576" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw952014b1/images/96511_a.jpg)', backgroundSize: 'cover'}}>
            <span>New York Art Print</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id12" data-price={285.00} data-title="M Lamp" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw7af44497/images/116752_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Ototo%20Musical%20Invention%20Kit%20+%203%20Sensors_10451_10001_195332_-1_26674_64661_195337" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw7af44497/images/116752_a.jpg)', backgroundSize: 'cover'}}>
            <span>M Lamp</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id13" data-price={60.00} data-title="Corknet Ping Pong Set" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwb0880a9d/images/116943_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Cubetto%20Playset_10451_10001_208117_-1_26674_64661_208166" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwb0880a9d/images/116943_a.jpg)', backgroundSize: 'cover'}}>
            <span>Corknet Ping Pong Set</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id14" data-price={135.00} data-title="Reveal Watch" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwb59c7083/images/46798_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Reveal%20Watch_10451_10001_53194_-1_26690_11474_16375" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwb59c7083/images/46798_a.jpg)', backgroundSize: 'cover'}}>
            <span>Reveal Watch</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id15" data-price={355.00} data-title="Miniature Chair Eames La Chaise" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw280ad40a/images/27296_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Miniature%20Chair%20Rietveld%20Red%20Blue_10451_10001_125565_-1_26674_26679_125575" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw280ad40a/images/27296_a.jpg)', backgroundSize: 'cover'}}>
            <span>Miniature Chair Eames La Chaise</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id16" data-price={95.00} data-title="Bi-Color Plywood Clock" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw27dceb00/images/91838_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Bi-Color%20Pitcher_10451_10001_137088_-1_26669_11519_137112" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw27dceb00/images/91838_a.jpg)', backgroundSize: 'cover'}}>
            <span>Bi-Color Plywood Clock</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id17" data-price={55.00} data-title="Yanagi Flatware, Five Piece Set" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw7c1fb951/images/50394_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Yanagi%20Flatware,%20Five%20Piece%20Set_10451_10001_15622_-1_26669_26672_15623" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw7c1fb951/images/50394_a.jpg)', backgroundSize: 'cover'}}>
            <span>Yanagi Flatware, Five Piece Set</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id18" data-price={28.00} data-title="Girachille Spinning Votive" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw0113025d/images/112540_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Girachille_10451_10001_206094_-1_26669_11550_206132" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw0113025d/images/112540_a.jpg)', backgroundSize: 'cover'}}>
            <span>Girachille Spinning Votive</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id19" data-price={159.00} data-title="Lampadina Table Lamp" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw003a3d1f/images/98696_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Lampadina%20Table%20Lamp_10451_10001_144905_-1_11476_11600_144920" style={{background: 'url(http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw003a3d1f/images/98696_a.jpg)', backgroundSize: 'cover'}}>
            <span>Lampadina Table Lamp</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id05" data-price="849.60" data-title="OP-1 Portable Synthesizer" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwa7be5a1d/images/107081_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_OP%201%20Portable%20Synthesizer_10451_10001_183571_-1_26663_26666_183605" style={{background: 'url(https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwb8c3cb89/images/158925_a.jpg?sw=234&sh=234&sm=cut)', backgroundSize: 'cover'}}>
            <span>OP-1 Portable Synthesizer</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id10" data-price="8.99" data-title="2018 Modern Art Mini Wall Calendar" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwc3023311/images/123752_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_2016%20Modern%20Art%20Mini%20Wall%20Calendar_10451_10001_207782_-1_26674_11527_207788" style={{background: 'url(https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwc723cc18/images/153473_a.jpg?sw=234&sh=234&sm=cut)', backgroundSize: 'cover'}}>
            <span>2018 Modern Art Mini Wall Calendar</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div>
        <div className="container">
          <div className="product" data-id="id02" data-price={28.00} data-title="Bluetooth Travel Speaker" data-img="http://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwe0e73100/images/124573_a.jpg" data-url="https://www.momastore.org/museum/moma/ProductDisplay_Stockwell%20Travel%20Speaker_10451_10001_223993_-1_26707_26707_224026" style={{background: 'url(https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwa0af22fd/images/158051_a.jpg?sw=234&sh=234&sm=cut)', backgroundSize: 'cover'}}>
            <span>Bluetooth Travel Speaker</span>
          </div>
          <span className="add-to-cart">Add to cart</span>
          <span className="add-to-wish">Add to wish</span>
        </div> */}
      </div>
    );
  }
}

export default About;
