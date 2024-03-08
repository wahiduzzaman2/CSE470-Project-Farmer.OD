import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between">
        {/* First Column */}
        <div className="w-1/3">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <p>We provide high-quality organic food products, ranging from vegetables to fruits. We exclusively grow and sell non-GMO products.</p>
        </div>

        {/* Second Column */}
        <div className="w-1/3">
          <h2 className="text-lg font-semibold mb-4">Our Services</h2>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Sale</a></li>
            <li><a href="#">Customer Service</a></li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="w-1/3">
          <h2 className="text-lg font-semibold mb-4">Connect with Us</h2>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
