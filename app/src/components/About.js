// This has been imported. Just need to finish it and fix some styling.
import React from 'react';
// import {Link} from 'react-router';

class About extends React.Component{

     render(){
          return(
               <div className="wrapper">
                    <div className="container-fluid bg-1 text-center"> 
                         <h3>Who Am I?</h3>
                         <img src="../images/headshot.jpg" className="img-circle" alt="headshot" />
                         <h3>I'm a Problem Solver</h3>
                    </div>
                    {/*// <!--This div will remain on the about page and will be a brief bio about me. Need to fix the div containing the project brief.-->*/}
                    <div className="container-fluid bg-2 text-center">
                         <h3>What is the project?</h3>
                         <p>The City of Toronto has more than 170,000 people on the waiting lists for affordable and supportive housing. What if people that are looking for housing could narrow down their limited choices without having to make a phone call or waiting for forms to arrive?</p>
                         <p>During my search, I could find no single place where those in search of affordable housing could determine the unit sizes contained in each development, whether it be in Toronto Community Housing, The City of Toronto (open data or otherwise) or The Province of Ontario.</p>
                         <p>An Affordable REST scraped through the Toronto Community Housing website to grab the 11 main organizational units, classified by geography. This is modular, in that the program goes through the list for as many times as it needs to and grabs each of the corresponding links for the unit. The program then iterates through each of the links to perform the next phase of web scraping. At each link, the organizational data about the unit is taken, and then the subsequent table is looped through, creating an entry for each of the developments within the organizational unit. Thus producing a single source for all of the units and corresponding developments.</p>
                         <p>Once produced, I used mock data that people might look for, such as speciality(i.e. Accessibility) and unit size and incorporated it into the exisitng, scraped data. This data is what is now being served up in the API, accessibile to all that might need to use it as their own test data.</p>
                         <p>From the home page, one can search for housing based on the criteria above. I have begun simply with the basics and the larger search implemented later, time permitting. One of the pieces that was retrieved from the open data was the longitude and latitude of each development. The data that I've constructed has been modelled in such a way that it can be easily matched to the existing data and the relationship between my data and that of the open data can be easily drawn. At a later point, I should be able to map the information, along with the corresponding information about the specific development.</p>
                         <p>Upon searching, the details are then sent to a component which searches through the data brought in by the API and displays the valid results. When one of the results is clicked on, the visitor is redirected to a page displaying more information about the development on a detailed page. Again, if time permits, I'd like to put in a map showing where the development is located and marry the data that I've developed, by using either the address or the longitude and latitude contained in the open data.</p>
                         <p>The purpose of this project is to show that the City of Toronto's websites, provide less than complete information. Imagine the possibilities when this could be used not only for Toronto Community Housing, but for all of the affordable housing projects in the province?</p>
                    </div>
                    {/*// <!--consider using the icons from the front page-->*/}
                    <div className="container-fluid bg-3 text-center"> 
                    <h3>Where To Find Me?</h3>
                    <div className="row">
                    <div className="col-sm-4">
                         <p>Lorem ipsum..</p>
                         <img src="birds1.jpg" className="img-responsive img-circle" alt="Image" />
                    </div>
                    <div className="col-sm-4">
                         <p>Lorem ipsum..</p>
                         <img src="birds2.jpg" className="img-responsive img-circle" alt="Image" />
                    </div>
                    <div className="col-sm-4"> 
                         <p>Lorem ipsum..</p>
                         <img src="birds3.jpg" className="img-responsive img-circle" alt="Image" />
                    </div>
                    </div>
                    </div>
                    <div className="container-fluid bg-2 text-center">
                         <h3>What Am I?</h3>
                         <p>Lorem ipsum..</p>
                         <a href="#" className="btn btn-default btn-lg">Search</a>
                    </div>
                    {/*// <!--This is the end of the About Component.-->*/}
               </div>
          )

     }
}

export default About;