import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


const fadeImages = [
  "https://scontent.farn1-1.fna.fbcdn.net/v/t1.0-9/71809285_2523461887701091_7435681802150215680_n.jpg?_nc_cat=102&_nc_sid=e3f864&_nc_ohc=z7kbaHlY8tgAX_ow1CL&_nc_ht=scontent.farn1-1.fna&oh=684294cbc37a4e4f83200e0d86f3db7e&oe=5F6D7B53",
  "https://scontent.farn1-1.fna.fbcdn.net/v/t1.0-9/87033099_2880867368627206_8707438132645068800_n.jpg?_nc_cat=111&_nc_sid=9267fe&_nc_ohc=Yid-GVG15DAAX_ENGAo&_nc_ht=scontent.farn1-1.fna&oh=919d7275067947d11a83d1a707d9f7a5&oe=5F6D2AED",
  "https://scontent.farn1-1.fna.fbcdn.net/v/t1.0-9/12299155_953283334718962_6414095506912139032_n.jpg?_nc_cat=101&_nc_sid=19026a&_nc_ohc=fFrkwBuFOuoAX8IaWHO&_nc_ht=scontent.farn1-1.fna&oh=7e699bab3379b7cfd984193776a0a4d6&oe=5F6CF13C"

];

function App() {
  return (
    <div className="App">
      <header className="App-header">

<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
    
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Menu</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="Bodas" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/1.1">Novias</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.2"> Novios</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.3">Pajes</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Cocktail" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/2.1">Dama</NavDropdown.Item>
        <NavDropdown.Item href="#action/2.2">Caballero </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">Quinceaños</Nav.Link>
      <Nav.Link href="#link">Primera Comunión</Nav.Link>
    </Nav>
    <Form inline>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 

</header>


<div class="card text-center">
  <div className="social-container">
      <h3>Siguenos en nuestras redes</h3>
      <a
        href="https://www.facebook.com/bernardasierratrajes"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a
        href="https://www.instagram.com/bernardasierra_trajes/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  </div>
  </div>

    
  );
}

export default App;
