import React from 'react';
import Header from "./components/Header/header.jsx";
import Banner from './components/Banner/banner.jsx';
import Products from './components/Products/allproducts.jsx';
import Footer from './components/Footer/footer.jsx';
const App = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <Products/>
      <Footer/>
    </div>
  );
};

export default App;
