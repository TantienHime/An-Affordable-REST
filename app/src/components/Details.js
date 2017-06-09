import React from 'react';
// import {Link} from 'react-router';

class Details extends React.Component{
      //componentwillmount
      //get ALL buildings
      //find building where id === this.props.params.id
      //setState
      //replace all fields with this.state.building
      constructor(props){
                  super(props);
                  this.state = { 
                        allBuildings: this.props.resultsData,
                        currentBuildingID: this.props.params.id,
                        currentBuilding: {}
            };
                  //bindings
                  // this.updateDone = this.updateDone.bind(this)
      }      
      // componentWillMount(){
      //       console.log(this.state.allBuildings);
      // }
      // {
      // }
      assignData(){
            let objectDetails = this.state.allBuildings.filter(findBuilding);
            this.setState({
                  currentBuilding: objectDetails
            })
                  console.log(objectDetails)

      }

      findBuilding(ID) {
            return ID === this.props.resultsData.orgBuildings.DEV_ID;
      }

     render(){
      // console.log(this.props);
          return(
               <div className="container">
                    <div classID="bldg-details">
                         {/*This needs to be dynamic*/}
                         <h1 className="text-center">{this.state.currentBuilding.orgBuildings.DEV_NAME}</h1> 
                         <div className="row">
                              {/*What if this could be the map?*/}
                              {/*<div className="col-xs-5">
                                   <img className="movie-poster" src= <%= movie.poster %> /> 
                              </div>*/}
                              <div className="col-xs-7">
                                   <h2>Building Information</h2>
                                   <table className="table">
                                        {/*Repeat the following HTML structure for all key value pairs in results object*/}
                                        {/*<% 
                                        let keys = Object.keys(movie);
                                        for(var i=0; i < keys.length; i++) { %>
                                        <tr>
                                             <td> <%= keys[i] %></td>
                                             <td> <%= movie[keys[i]]  %></td>
                                        </tr>
                                        <% } %>*/}
                                        {/*This is an example: */}
                                        <tr>
                                             <td>Building ID</td>
                                             <td> </td>
                                        </tr>
                                       <tr>
                                             <td>Building Address</td>
                                             <td> </td>
                                        </tr>                    
                                   </table>
                              </div>
                              <div className="col-xs-7">
                                   <h2>Unit Types</h2>
                                   <table className="table">
                                        {/*This is an example: */}
                                        <tr>
                                             <td>Bachelor: </td>
                                             <td>#</td>
                                        </tr>
                                        <tr>
                                             <td>1 Bedroom: </td>
                                             <td>#</td>
                                        </tr>
                                        <tr>
                                             <td>2 Bedroom: </td>
                                             <td>#</td>
                                        </tr>
                                        <tr>
                                             <td>3 Bedroom: </td>
                                             <td>#</td>
                                        </tr>
                                        <tr>
                                             <td>4 Bedroom: </td>
                                             <td>#</td>
                                        </tr>         
                                   </table>
                              </div>
                              <div className="col-xs-7">
                                   <h2>Special: </h2>
                                   <table className="table">
                                        {/*This is an example: */}
                                        <tr>
                                             <td>Aboriginal: </td>
                                             <td>#</td>
                                        </tr>
                                        <tr>
                                             <td>Accessible: </td>
                                             <td>#</td>
                                        </tr>
                                        <tr>
                                             <td>Seniors: </td>
                                             <td>#</td>
                                        </tr>
                                        <tr>
                                             <td>Supportive: </td>
                                             <td>#</td>
                                        </tr>        
                                   </table>
                              </div>                                                                      
                              <div className="col-xs-7">
                                   <h2>Organizational Information</h2>
                                   <table className="table">
                                        {/*This is an example: */}
                                        <tr>
                                             <td>Organizational Unit: </td>
                                             <td> </td>
                                        </tr>
                                        <tr>
                                             <td>Organizational Unit Location: </td>
                                             <td> </td>
                                        </tr>
                                        <tr>
                                             <td>Organizational Unit Phone: </td>
                                             <td> </td>
                                        </tr>
                                        <tr>
                                             <td>Organizational Unit Hours: </td>
                                             <td> </td>
                                        </tr>
                                        <tr>
                                             <td>Organizational Unit Email: </td>
                                             <td> </td>
                                        </tr>
                                        <tr>
                                             <td>Organizational Unit Manager: </td>
                                             <td> </td>
                                        </tr>                                             
                                   </table>
                              </div>    
                         </div>
                    </div>
               </div>
               )
     }
}

export default Details;