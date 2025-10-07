import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-logo-section">
          <img src="/assets/LOGO.png" alt="AR Energy Infrastructure Logo" />
          <p>"Ready to move from ambition to action? Join us in transforming how we live. Let's not just light up streets, we illuminate entire communities."</p>
          <h4>Head Office-1</h4>
          <address>
            6-44-1, Laxmi nagar,<br />
            Anantapur AP, 515001
          </address>
          <br />
          <h4>Branch Office-2</h4>
          <address>
            23-453, Near KAKATIYA STAND SAI<br />
            Nagar Dharmavaram-515671
          </address>
        </div>

        <div className="footer-contact">
          <h3>Contact us</h3>
          <p><strong>Registered Office:</strong><br />
          2166, Old Malakpet, Uppagumpally,<br />
          Hyderabad,<br />
          Telangana-500032</p>
        </div>

        <div className="footer-call">
          <h3>Call us</h3>
          <p>+91 9853462445<br />
          +91 9000107223</p>
        </div>

        <div className="footer-email">
          <h3>Email</h3>
          <p>arezabhumanshi@gmial.com</p>
        </div>

        <div className="footer-form">
          <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023 AR ENERGY INFRASTRUCTURE- All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
