import React, { Component } from 'react'


export class Navbar extends Component {
 

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Khabari News</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/Home">Home<span className="sr-only"></span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/Buisness">Buisness<span className="sr-only"></span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/Entertainment">Entertainment<span className="sr-only"></span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/General">General<span className="sr-only"></span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/Health">Health<span className="sr-only"></span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/Science">Science<span className="sr-only"></span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/Sports">Sports<span className="sr-only"></span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/Technology">Technology<span className="sr-only"></span></a>
      </li>
                   
    </ul>
    
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
