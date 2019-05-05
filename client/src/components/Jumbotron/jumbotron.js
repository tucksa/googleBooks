import React from 'react';
import Background from '../../../images/books.jpg';

const myStyle = {
    backgroundImage: "url("+Background+")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100%",
    height: "650px",
    margin: "0%"
}

const myText = {
    textAlign: "center",
    color: "white",
    marginTop:"10%"
}

function Jumbotron(){
    return(
        <div style= {myStyle}className="myJumbotron jumbotron jumbotron-fluid">
            <div style= {myText}className="container">
                <h1 className="display-4">Google Books Search</h1>
                <p className="lead">Look up and add them to your library</p>
            </div>
        </div>
    )
}

export default Jumbotron;