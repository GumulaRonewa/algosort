import React from 'react';
import { MemoryRouter, Switch, Route, Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const Navigation = () => (
 <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand style={{marginLeft:10}} href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">

      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/path">Path Finding</Nav.Link>
      <Nav.Link href="/sort">Sort</Nav.Link>
      <Nav.Link href="/recursion">Recursion</Nav.Link>
    </Nav>
   
  </Navbar>
  <br />
 
 
</>
);

export default Navigation;
