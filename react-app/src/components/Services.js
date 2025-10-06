import React from 'react';

const Services = () => {
  return (
    <main>
      <section className="services-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div className="services-hero-left">
            <span className="star top-left">&#9733;</span>
            <div className="circle top"></div>
            <h1>Services</h1>
          </div>
          <div className="services-hero-right">
            <img src="/assets/ssds.jpg" alt="Solar Energy Service" />
            <div className="orange-circle-right"></div>
          </div>
        </div>
      </section>

      <section className="service-cards-section">
        <div className="container service-cards-container">
          <div className="service-card-item">
            <h3>EPC CONSULTING</h3>
            <p>EPC is Engineering, Procurement, and Construction. In LED industry, this term is used for designing and installing LED devices from designing the system, procuring the components and installing the project.</p>
          </div>
          <div className="service-card-item">
            <h3>O & M</h3>
            <p>O&M has become a standalone segment within the LED industry. O&M is for proper and periodic Operation and Maintenance. Thus, at AREI we take care of projects from Operation to Maintenance.</p>
          </div>
          <div className="service-card-item">
            <h3>FUNDING</h3>
            <p>To support solar energy projects, Funding is a key requirement. We have, Funding tie-ups to help our support solar power projects.</p>
          </div>
        </div>
      </section>

      <section className="liaising-section">
        <div className="container">
          <div className="orange-circle"></div>
          <div className="liaising-content">
            <h2>LIASIONING</h2>
            <p>Approvals and Liasoning is the initial phase in any Solar Power project. It requires the following (depending on the size of work):</p>
            <ul>
              <li>Project registration at MNRE (Ministry of Non-Renewable Energy) nodal agency</li>
              <li>LOA (Lease Term/Open Agreement) related works</li>
              <li>Plant commissioning certificate</li>
              <li>PPA (power purchase agreement) with private/government</li>
              <li>Land related paperwork</li>
              <li>REC (Renewable Energy Certificate) related SLDC Registration.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
