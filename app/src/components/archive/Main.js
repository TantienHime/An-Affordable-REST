// This was taken from the Multi-view assignment for the To Do app
/*
// Create a React app using create-react-app - DONE
// Install react router with npm install react-router --save - DONE
// Set up your application with 2 routes in react-router; one for the main app view and one for an about page view
// The about page will be a page with static text content
// Make it so that the main app view will fire up the todo app from last chapter
// As your application is growing significantly in size, split up your todo app component in smaller components if it already wasn't
// Make use of nested routes to display a header for the entire app that will stay the same regardless of which route is currently displayed

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Link} from 'react-router'

class Main extends Component {
  constructor(){
    super();
    // set initial state of the website on load.
    this.state = {
      page: 'Home' // This is the ToDo page.
    };

    // bindings
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage(pageToVisit){
    this.setState({
      page: pageToVisit
    })
  }

  render() {
    return (
      <div className="Main">
        <h1>I'm Seeing in Multi-View!</h1>
        <nav>
          <Link to='/static/todo'>To Do</Link>
          <Link to='/static/about'>About</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
 */