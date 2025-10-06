import React from 'react';

const Products = () => {
  return (
    <main>
      <section className="products-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div className="products-hero-left">
            <span className="star top-left">&#9733;</span>
            <div className="circle top"></div>
            <h1>Products</h1>
          </div>
          <div className="products-hero-right">
            <img src="/assets/roof2.jpg" alt="Solar Panels on Roof" />
            <div className="orange-circle-right"></div>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <div className="container">
          <div className="steps-container">
            <div className="step-item">
              <div className="step-icon"><img src="/assets/planningg.png" alt="Planning icon" /></div>
              <h3>PLANNING</h3>
            </div>
            <div className="step-item">
              <div className="step-icon"><img src="/assets/design.png" alt="Designing icon" /></div>
              <h3>DESIGNING</h3>
            </div>
            <div className="step-item">
              <div className="step-icon"><img src="/assets/eng.png" alt="Engineering icon" /></div>
              <h3>ENGINEERING</h3>
            </div>
            <div className="step-item">
              <div className="step-icon"><img src="/assets/procu.png" alt="Procurement icon" /></div>
              <h3>PROCUREMENT</h3>
            </div>
            <div className="step-item">
              <div className="step-icon"><img src="/assets/ins.png" alt="Installation icon" /></div>
              <h3>INSTALLATION</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="products-list">
        <div className="container">
          <div className="products-intro">
            <p>We do consulting for Industrial Solar Power Projects. We are involved in 3 specific steps when it comes to Solar Power Projects</p>
            <p><strong>Solar Power Projects</strong><br />
            We do consulting for Industrial Solar Power Projects ranging from 1MW to 150MW.</p>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src="/assets/roof1.jpg" alt="Solar Rooftop System" />
            </div>
            <div className="product-details">
              <h3>1. Solar Rooftop System</h3>
              <p>We undertake turnkey projects in this category. Right from <strong>Consultation to Execution</strong> is carried out here. We offer 5 KW - 300KW Solar Power Roof Top System. Solar Power Rooftop Systems are strongly recommended for high rise buildings and industries to help reduce electricity bills. Our experience in rooftop EPC business is extensive. In this arena, we have been working with clients from varied sectors.</p>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src="/assets/street-light-500x500.jpg" alt="Highway Lighting" />
            </div>
            <div className="product-details">
              <h3>2. Highway Lighting</h3>
              <p>Proper city lighting not only makes it aesthetically pleasing but also enhances its security. With a formidable amount of experience, AR Energy offers bespoke, end-to-end solutions for illuminating different parts of the city there by making it more livable. One of the Cityscape portfolio in the Luminaire segment of AR Energy is Street Lighting and we provide lighting for different parts of the city. AR ENERGY provides turnkey solution from concept to commissioning for street lighting, sports lighting, Industrial lighting, facade lighting, and office lighting projects. For effective lighting on roads and highways AREI provides solutions and services to maintain the luminance for the entire lifecycle for its clients and maintaining the luminaires. Such systems are successfully in operation at <strong>PWD HYDERABAD TIRUPATI VIJAYANAGARAM ANANTAPUR</strong> and other locations for several years now.</p>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src="/assets/solarlight.jpg" alt="Solar Street Lights" />
            </div>
            <div className="product-details">
              <h3>3. Solar Street Lights</h3>
              <p>In this category we specialize in the supply and installation of 30 Watts Streetlights as well as Flood lights. While the Solar Street Lights are Majorly used in streets and educational institutions the Flood lights are used in Stadiums and Green communities.</p>
            </div>
          </div>
        </div>
        <span className="star-icon-bottom">&#9733;</span>
      </section>
    </main>
  );
};

export default Products;
