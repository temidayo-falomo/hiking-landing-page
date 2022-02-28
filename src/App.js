import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import HikeGear from './components/hike-gear/HikeGear';
import TopPart from './components/top-part/TopPart';

function App() {
  return (
    <div className="App">
      <TopPart />
      <HikeGear />
      <Footer />
    </div>
  );
}

export default App;
