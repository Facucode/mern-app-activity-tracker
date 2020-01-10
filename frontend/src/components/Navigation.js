import React, { Component } from "react";
//F1 format
//<a class="navbar-brand" href="/"> ---> <Link className="navbar-brand" to="/">
import {Link} from 'react-router-dom'
export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">
                NotesApp
            </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <Link className="nav-link" to="/">Notes</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/create">Create Note</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/user">Create User</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/createactivity">Create Activity</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                
            </ul>
            </div>
        </div>
      </nav>
    );
  }
}
