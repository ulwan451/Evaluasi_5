import React from 'react';
import ana from './ana.png';
import './Jumbotron.css';

function Tentang () {
    return (
        <div className="tentang" id="profil">
            <section className="poto">
            <h2>Profil</h2>
            <hr className="haer2"></hr>
            <h2>Ulwan Muhammad Nur</h2>
            <p><b>Front End Developer</b></p>
            <img src={ana} alt="ana" />
            <p>I am a beginner programming in Pondok Programmer, I chose the Front end Developer division,</p> <p>With JavaScript programming language with React Js framwork.</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p> Debitis dolorem ratione odio possimus fugiat in,</p><p>obcaecati vel non eaque culpa</p><p>obcaecati vel non eaque</p>
            <a href="https://www.google.com/?hl=in"className="git-ic">
                <i className="fab fa-github  fa-lg white-text mr-md-20 mr-3 fa-2x"></i>
            </a>
            <a href="https://www.google.com/?hl=in" className="git-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-20 mr-3 fa-2x"></i>
            </a>
            <a href="https://www.google.com/?hl=in" className="git-ic">
                <i className="fab fa-facebook fa-lg white-text mr-md-20 mr-3 fa-2x"></i>
            </a>
            <a href="https://www.google.com/?hl=in" className="git-ic">
                <i className="fab fa-medium fa-lg white-text mr-md-20 mr-3 fa-2x"></i>
            </a>
            </section>
        </div>
    );
}

export default Tentang;