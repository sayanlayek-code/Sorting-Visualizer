import React from 'react';
import './Footer.css';

function Footer() {
  var current = new Date();
  var date = current.getFullYear();
  return (
    <div className='footer'>
      <footer>
        <em>Sayan Layek</em> {date}
      </footer>
    </div>
  );
}

export default Footer;
