import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 My Company, Inc.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item"><Link to="/Homepage">HomePage</Link></li>
              <li className="list-inline-item"><a href="#">Terms of Use</a></li>
              <li className="list-inline-item"><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
