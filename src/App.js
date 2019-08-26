import React from 'react';
import Header from './component/Navbar';
import Layar from './component/Jumbotron';
import Tentang from './component/Profil';
import Footer from './component/Footer';
import Content from './component/Content';
import './App.css';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "Front end Depeloper"
    };
  }

  render () {
    return (
      <div className="utama">
        <Header />
        <Layar name="Developer!" />
        <Tentang />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
