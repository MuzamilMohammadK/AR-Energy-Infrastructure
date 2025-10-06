import React from 'react';

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div className="hero-left">
            <span className="star top-left">&#9733;</span>
            <div className="circle top"></div>
            <h1>"Stop waiting for change. Be the <span>change</span> that powers your community. Go solar."</h1>
            <p>"The future isn't just bright, it's solar-powered. Join <span>AR ENERGY INFRASTRUCTURE</span> to build a cleaner, more sustainable infrastructure revolution."</p>
            <span className="star bottom-right">&#9733;</span>
            <div className="circle bottom"></div>
          </div>
          <div className="hero-right">
            <img src="/assets/solar power.png" alt="Solar Power Solutions" />
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Services We Provide</h2>
          <div className="service-cards">
            <div className="service-card">
              <div className="icon-placeholder">
                <img src="/assets/SRT 1.png" alt="Solar Rooftop System" />
              </div>
              <h3>Solar Rooftop System</h3>
              <p>We undertake turnkey projects in this category. Right from conceptualization to execution and beyond also. We offer 5 KW - 300KW Solar Power Roof Top System.</p>
            </div>
            <div className="service-card">
              <div className="icon-placeholder">
                <img src="/assets/HW 1.png" alt="Highway Lighting" />
              </div>
              <h3>Highway Lighting</h3>
              <p>Proper city lighting not only makes it safer for pedestrians and road users, but it's necessity. With a formidable amount of experience, AR Energy offers bespoke, end-to-end solutions for illuminating streets and highways of all sizes and making it more livable.</p>
            </div>
            <div className="service-card">
              <div className="icon-placeholder">
                <img src="/assets/SSL 1.png" alt="Solar Street Lights" />
              </div>
              <h3>Solar Street Lights</h3>
              <p>In this category we specialize in the supply of Solar panels, Commercial Streetlights as well as Flood lights.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us">
        <div className="container">
          <p>Solar energy is transforming public infrastructure, with autonomous solar street lights and highway lighting becoming a cornerstone of sustainable development. These innovations offer a myriad of advantages including a drastic reduction in energy consumption and associated economic benefits, eliminating energy bills, reducing carbon emissions, and simplifying installation in remote areas. Furthermore, modern solar lights are equipped with smart capabilities, including dimming functions, motion sensors, and remote monitoring, and the convenience of real time data like air quality and traffic flow, making them a vital, future-proof solution for sustainable urban environments.</p>
        </div>
      </section>

      <section className="partners" id="partners">
        <div className="container">
          <h2>Partners</h2>
          <div className="partner-grid">
            <div className="partner-logo"><img src="/assets/image 10.png" alt="Trina Solar" /></div>
            <div className="partner-logo"><img src="/assets/image 11.png" alt="TATA Power Solar" /></div>
            <div className="partner-logo"><img src="/assets/image 12.png" alt="Waree" /></div>
            <div className="partner-logo"><img src="/assets/image 13.png" alt="Adani Solar" /></div>
            <div className="partner-logo"><img src="/assets/image 2.png" alt="RenewSys" /></div>
            <div className="partner-logo"><img src="/assets/image 3.png" alt="Havells" /></div>
            <div className="partner-logo"><img src="/assets/image 5.png" alt="Bajaj" /></div>
            <div className="partner-logo"><img src="/assets/image 6.png" alt="Surya" /></div>
            <div className="partner-logo"><img src="/assets/image 7.png" alt="Solis" /></div>
            <div className="partner-logo"><img src="/assets/image 8.png" alt="RuCold" /></div>
            <div className="partner-logo"><img src="/assets/image 10.png" alt="Ava Energy" /></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
