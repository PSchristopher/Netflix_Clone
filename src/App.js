import React from "react";
import NavBar from './Components/Navbar/Navbar'
import { action, originals, comedy, horror, romantic } from './urls'
import Footer from "./Components/Footer/Footer";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={romantic} title='Romantic' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
