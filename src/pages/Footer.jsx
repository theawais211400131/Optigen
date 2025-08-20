import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h6 className="opt">optigen</h6>
          <p className="te">
            It all starts with a conversation, get in touch with us if what you see
            excites you.
          </p>
          <div className="subscribe-container">
            <form onSubmit={handleSubmit} className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-2"><h6 className="pag">Pages</h6>
        <Link to="/" className="pages">Home</Link><br/>
        <Link to="/" className="pages">About</Link><br/>
        <Link to="/project" className="pages">Project</Link><br/>
        <Link to="/services" className="pages">Service</Link><br/>
        <Link to="/services" className="pages">Service Detail</Link><br/>
        <Link to="/" className="pages">Careers</Link><br/>
        <Link to="/" className="pages">Blog</Link><br/>
        <Link to="/customer" className="pages">Contact</Link>
        </div>
        <div className="col-1 z">
        <Link to="/" className="pages">Style Guide</Link><br/>
        <Link to="/" className="pages">Instructions</Link><br/>
        <Link to="/" className="pages">License</Link><br/>
        <Link to="/" className="pages">Change log</Link><br/>
        <Link to="/" className="pages">Coming</Link><br/>
        <Link to="/" className="pages">Link in Bio</Link><br/>
        <Link to="/" className="pages">Error 404</Link><br/>
        <Link to="/" className="pages">Password</Link>
        </div>
        <div className="col-1"></div>
        <div className="col-3"><h6 className="pag">Contact Us</h6>
         <EmailIcon className="emailicon" fontSize="medium"/> <p className="email"> 211400131@gift.edu.pk</p> <br/>
         <LocationOnIcon className="emailicon" fontSize="medium"/> <p className="email"> PO Kot hassan khan,HFD,PAK</p><br/>     
         <PhoneIcon className="emailicon" fontSize="medium"/> <p className="email">03136471686</p><br/>     
        
        </div>
      </div>
      <div className="designer">
        <p className="design">Design by M.Awais</p>
      </div>
    </div>
  );
}

export default Footer;
