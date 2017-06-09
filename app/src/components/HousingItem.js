import React from 'react';
// import {Link} from 'react-router';

class HousingItem extends React.Component {
	render (){
     console.log(this.props.orgItem.Speciality)
		return(
			<li className="list-group-item media dev-list-item">
                    <a className="dev-link" href={"/details" + this.props.orgItem.DEV_ID} > {/*This link needs to be generated. The original expression was: <%= "movie/"+movies[i].id %> */}
                         <h2 className="media-heading">
                         {this.props.orgItem.DEV_NAME} 
                         {/*This heading needs to be generated. The original expression was: <%= movies[i].title %> */}
                         </h2>
                         <p>Address: {this.props.orgItem.BLDG_ADDRESS}</p>
                         <p>Organizational Unit/Region: {this.props.orgInformation.orgUnit}</p>
                         <p>Available Units:</p>
                         <ul>
                         {Object.keys(this.props.orgItem.Unit_Type).map( x => {
                              return <li>{x}: {this.props.orgItem.Unit_Type[x]}</li>
                         })}
                         </ul>
                         <ul>
                         {Object.keys(this.props.orgItem.Speciality).map( x => {
                              return <li>{x}: {String(this.props.orgItem.Speciality[x])}</li>
                         })}
                         </ul>
                    </a>
			</li>
		)
	}
}

export default HousingItem;