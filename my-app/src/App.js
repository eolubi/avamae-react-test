// import './App.css';
import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
