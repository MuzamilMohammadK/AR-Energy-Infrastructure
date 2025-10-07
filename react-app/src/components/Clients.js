import React from 'react';

const Clients = () => {
  return (
    <main>
      <section className="clients-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <div className="clients-hero-left">
            <span className="star top-left">&#9733;</span>
            <div className="circle top"></div>
            <h1>Clients</h1>
          </div>
          <div className="clients-list-container">
            <ul className="clients-list">
              <li>SESHHA SURIYA GREENS</li>
              <li>INFINITIHOMES</li>
              <li>ATKINSONSCHOOL</li>
              <li>SVC HIGH SCHOOL</li>
              <li>SAI DREAMCASTLE</li>
              <li>OORJITA ISTANA</li>
              <li>SRR NURSING HOME</li>
              <li>HYD. GYMKHANA</li>
            </ul>
            <ul className="clients-list">
              <li>ESMERALDA FORTUNE</li>
              <li>COUNTRY SIDE VILLA</li>
              <li>MAJFAIR</li>
              <li>LEGEND CHIMES</li>
              <li>JJ HOSPITALS</li>
              <li>MUPPA AARADHYA</li>
              <li>MJK SPINNING</li>
              <li>ASHOKAALA MAISON</li>
            </ul>
            <div className="clients-hero-right-circle"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;
