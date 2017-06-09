import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router'
import './cover.css';
import axios from 'axios';
// const fs = require('fs');
// const housingData = fs.readFileSync('./data/webscrapeResults.JSON', 'utf8'); // For now, I'm using the static data created by the dataserver. Would like to implement the API at some point.

class App extends Component {
	constructor(){
		super();
		this.state = { 
			housingData: [], // This imports the data from the static JSON file to be the data to be used in the app itself. 
			orgUnits: [], // These are the names of the org units that get handed over to the search component on mounting to populate the list of org units.
			searchData: {
				bachelor: false,
				oneBr: false,
				twoBr: false,
				threeBr: false,
				fourBr: false,
				aboriginal: false,
				accessible: false,
				seniors: false,
				supportive: false
			}, // This is the data that will be returned from the search component to perform the filtering.
			resultsData: [] //This array will contain the objects that need to be passed to the results and details components.
		};
		//bindings
		// this.updateDone = this.updateDone.bind(this)
		this.filterResults = this.filterResults.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}

	componentWillMount(){ //This works. It brings in the JSON file from the API and sets the state of the housing data, as well as the org units to be passed to the search component to populate the list of organizational units.
		axios.get('/data')
			.then(res => {
				// In order to display the results from specific org units, I needed to pull the names of the units from the data on load and serve them up to the search component, populating the drop down list.
				let orgUnits = []; 
				for (let i=0; i<res.data.length; i++){
					orgUnits.push(res.data[i].orgUnit);
	 			}
				//  console.log(res.data)
				this.setState({
					housingData: res.data,
					orgUnits: orgUnits
				})
			})
	}

	// updateDone(todo){
	// 	let idToUpdate = todo.id
	// 	let todosCopy = this.state.todos
	// 	for (let i=0; i<todosCopy.length; i++){
	// 		if(todosCopy[i].id === idToUpdate){
	// 			todosCopy[i].done = !todosCopy[i].done
	// 		}
	// 	}
	// 	this.setState({
	// 		todos: todosCopy
	// 	})
	// }

	filterResults(condition){
		this.state.searchData[condition] = !this.state.searchData[condition]
		this.setState({
			searchData: this.state.searchData
		})
	}

	onFormSubmit(e){
		e.preventDefault();
		// console.log(this.state.searchData) //This is correct.
		// searchData - this is given to us from the search component and applies a filter on the original data. set the results of this to be resultsData which is then passed down to the results component through props.
		let tempData = this.state.housingData.map((item) => {
			let tempArray = item.orgBuildings.filter((building)=>{
			// console.log(item.orgBuildings)
			let housing=()=>{
				if (this.state.searchData.bachelor) {
					if (building.Unit_Type.bachelor > 0){
						return true;
					}
				}
				if (this.state.searchData.oneBr) {
					if (building.Unit_Type.oneBr > 0){
						return true;
					}
				} 				  
				if (this.state.searchData.twoBr) {
					if (building.Unit_Type.twoBr > 0){
						return true;
					}
				}
				if (this.state.searchData.threeBr) {
					if (building.Unit_Type.threeBr > 0){
						return true;
					}
				}
				if (this.state.searchData.fourBr) {
					if (building.Unit_Type.fourBr > 0){
						return true;
					}
				}
			} 
			let speciality = ()=>{
				if (this.state.searchData.aboriginal) {
					if (!building.Speciality.aboriginal){
						return false;
					} 
				}
				if (this.state.searchData.accessible) {
					if (!building.Speciality.accessible){
						return false;
					}
				}
				if (this.state.searchData.seniors) {
					if (!building.Speciality.seniors){
						return false;
					} 
				}
				if (this.state.searchData.supportive) {
					if (!building.Speciality.supportive){
						return false;
					} 
				}
				return true
			}
			// console.log(housing())
			// console.log(speciality())
			return (housing() && speciality())								
			})
			// console.log(tempArray)
			item.orgBuildings = tempArray;
			return item;
		})  
		this.setState({
			resultsData: tempData
		})
		// console.log(this.state.resultsData)
		browserHistory.push('/results');
	}
/*

	toResults(){

	}
*/
	// updateDone(todo){
	// 	let idToUpdate = todo.id
	// 	let todosCopy = this.state.todos
	// 	for (let i=0; i<todosCopy.length; i++){
	// 		if(todosCopy[i].id === idToUpdate){
	// 			todosCopy[i].done = !todosCopy[i].done
	// 		}
	// 	}
	// 	this.setState({
	// 		todos: todosCopy
	// 	})
	// }
 	render(){
		// This takes each item in the original Housing array and outputs them one by one to the empty array. That array is then passed to the HousingItem to be added as li's within the ul. listItemsJSX is called in the return area of the App class. 

		// This is the rendering of the overall page
		// No idea what happened to my styling on the home/search page. 
		return(
			<div className="site-wrapper">
				<div className="site-wrapper-inner">
					<div className="cover-container">
						<div className="masthead clearfix">
							<div className="inner">
								<h3 className="masthead-brand">An Affordable REST</h3>
								<nav>
									<ul className="nav masthead-nav">
										{/*<li className="active"><a href="/">Home</a></li>*/}
          								<Link to='/'>Home</Link>
										{/*<li><a href="about.html">About</a></li>
										<li><a href="contact.html">Contact</a></li>*/}
          								<Link to='/about'>About</Link>
										<Link to='/contact'>Contact</Link>
									</ul>
								</nav>
							</div>
						</div>
					{/*This is where each component will load.*/}
					{React.cloneElement(this.props.children, {orgUnits: this.state.orgUnits, resultsData: this.state.resultsData, filterResults: this.filterResults,onSubmit:this.onFormSubmit/*, updateDone: this.updateDone*/} )}
					{/*<!-- Social Media Icons -->*/}
						<div className="col-md-12" classID="social-media-icons">
							<ul className="social-network social-circle">
								<li><a href="http://github.com/tantienhime" className="icoGithub" title="Github"><i className="fa fa-github"></i></a></li>
								<li><a href="http://shanta.ca" className="icoWordPress" title="WordPress"><i className="fa fa-wordpress"></i></a></li>
								<li><a href="http://twitter.com/shantadotca" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
								<li><a href="http://flicker.com/tantienhime" className="icoFlickr" title="Flickr"><i className="fa fa-flickr"></i></a></li>
								<li><a href="http://linkedin.com/in/nathwani" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
								<li><a href="mailto:shanta@shanta.ca" className="icoEmail" title="Email"><i className="fa fa-envelope-o"></i></a></li> 
							</ul>				
						</div>        
						<div className="mastfoot">
							<div className="inner">
								<p>Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
							</div>
						</div>
					</div>
				</div>
			</div>				
		);
	 }
}

export default App;