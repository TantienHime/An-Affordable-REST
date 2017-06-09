import React from 'react';
// import {Link} from 'react-router';
import HousingItem from './HousingItem'

class Results extends React.Component{
     constructor(){
          super();
     }
          render(){
               let listItemsArr = [];
               // console.log(this.props.resultsData)
               let orgItemArr =[];
		          for(let i = 0; i < this.props.resultsData.length; i++){
                         let bldgItemsArr = [];
                         for(let j = 0; j < this.props.resultsData[i].orgBuildings.length; j++){
                              listItemsArr.push(<HousingItem orgItem={this.props.resultsData[i].orgBuildings[j]} orgInformation={this.props.resultsData[i]} />);
                         }
                           
                         // orgItemArr.push(this.props.resultsData[i])
		          }
                         // console.log(orgItemArr)
                         // listItemsArr.push(<HousingItem orgItem={orgItemArr} />);
               return(
                    <div className="container">
                              <h1 className="text-center">Housing Results</h1>
                              <div className="row" classID="housingContainer">
                              {/*This is where the for loop created the movies.*/}
                              <div className="container">

				                    {/*Creates a list of items pertinent to the search*/}
				               <ul className="list-group">
					               {listItemsArr}
				               </ul>
			               </div>
                              {/*<HousingItem />*/}
                              {/* Everything within the a tag was moved to the HousingItem.js constructor.
                              <a className="dev-link" href=" "> {/*This link needs to be generated. The original expression was: <%= "movie/"+movies[i].id %> }
                              {/*Pieces from here down may have to be styled using a different set. }
                                   <div className="media dev-list-item">
                                        <h2 className="media-heading">
                                             This is the Building Name
                                        {/*This heading needs to be generated. The original expression was: <%= movies[i].title %> }
                                        </h2>
                                        <p>Address: </p>
                                        <p>Organizational Unit/Region: </p>
                                        <p>Available Units: </p>
                                        <p>Specialities: </p>
                                        
                                   </div>
                                   </a>*/}
                              </div>
                         </div>
                    )

          }
     }


export default Results;