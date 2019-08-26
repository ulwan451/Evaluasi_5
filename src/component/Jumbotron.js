import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Jumbotron.css';

class Layar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: "WELCOME "
        };
    }


  componentDidMount () {
    setTimeout (() => {
      this.setState ({name: "Front end "})
    }, 2000)
  }

    render () {
        return (
            <div className="layar" id="home">
                <Jumbotron className="layar1">
                <section className="jumbo">
                    <h1> {this.state.name} {this.props.name}</h1>
                    <p>
                    I am Beginner Front end Developer in Pondok Programmer. 
                    </p>
                    <hr className="haer"></hr>
                </section>
                </Jumbotron>
            </div>
        );
    }
}

export default Layar;
