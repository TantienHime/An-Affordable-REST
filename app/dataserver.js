// The dataserver is used for the webscraping of the website in question. Its output is a JSON file that is to be used as part of the API. One question is whether or not the mock data should be inserted here, before passing it over to the API, or if it should be kept separate. For now, I'm leaving it in here.
const axios = require ('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const mockData = require('./data/MockHousing_v1.1.js'); //This is the mock data that I created and will push later on into the object being scraped.

// Each URL represents a single Organizational Unit. I started using a single link to grab the Don Valley Beaches one. We run through the organizational unit information once and its related table, which contains the listings within the organizational unit. 

// This is to grab each of the links from the website, 'https://www.torontohousing.ca/about/our-housing/Pages/default.aspx', from the side bar. This will produce an array of links that are needed to create each organizational unit. 

let urlArray = []; // This is the array that will hold the 11 links to each of the organizational unit. 

axios.get('https://www.torontohousing.ca/about/our-housing/Pages/default.aspx')
     .then(res => {
          const $ = cheerio.load(res.data);
          let sidebarData = '#zz4_RootAspMenu'; // This targets the sidebar menu that contains the organizational names and corresponding links.
          let numOfOrgs = $(sidebarData).children().length; // Should be 11 items.
          for(let i=2; i<numOfOrgs; i++){
               let orgRow = $(sidebarData).children()[i];
               let orgObject = $(orgRow).children()[0];
               let orgLinkRaw = $(orgObject)[0];
               let orgLink = ('https://www.torontohousing.ca'+ orgLinkRaw.attribs.href);
               // urlArray.push(axios.get(req[i].orgLink)); // This one doesn't work yet
               urlArray.push(orgLink); // This will create the array correctly.
          }
     })
     .catch(err => {
          console.log(err);
     });


// This grabs the specific data for each organizational unit. The code below grabs a single link and produces a single organizational unit.
// Couldn't seem to get an axios.all to work with an array of links, so I had to perform the previous function and input the links manually, one by one.
axios.all([axios.get('https://www.torontohousing.ca/about/our-housing/Pages/Wexton-Rexdale.aspx'),
          axios.get('https://www.torontohousing.ca/about/our-housing/Pages/York-Black-Creek.aspx'),
          // axios.get('https://www.torontohousing.ca/about/our-housing/Pages/Etobicoke-South-High-Park.aspx'), // There is something wrong with this one link. 
          axios.get('https://www.torontohousing.ca/about/our-housing/Pages/Yorkdale-Lawrence.aspx'),
          axios.get('https://www.torontohousing.ca/about/our-housing/Pages/Willowdale-Don-Valley.aspx'),
          axios.get('https://www.torontohousing.ca/about/our-housing/Pages/Scarborough.aspx'),
          axios.get('https://www.torontohousing.ca/about/our-housing/Pages/Scarborough-Southwest.aspx'),
          axios.get('https://www.torontohousing.ca/about/our-housing/Pages/Grange-Bathurst-St.-Lawrence.aspx'),
          axios.get('https://www.torontohousing.ca/about/our-housing/Pages/Central-Sherbourne.aspx'),
          axios.get('https://www.torontohousing.ca/about/our-housing/Pages/Don-Valley-Beaches.aspx'),
          axios.get('https://www.torontohousing.ca/about/our-housing/Pages/Central-Parliament.aspx' )])
     .then(axios.spread (function (res) {
          let orgArr = []; // This array will assemble the organizational unit information above and include the bldgArr as part of the object. Currently set to do a single organizational unit.
          for(j=0; j<arguments.length; j++){
               const $ = cheerio.load(arguments[j].data);
               console.log(j);
               // Organizational Data - Run once for each link/organizational unit.
               // Currently set to do a single organizational unit based on the variable for the URL above.
               let orgUnit = $('h2').text();
               const orgData = 'div.ms-rtestate-field';
               let orgManager = $(orgData).children()[2].prev.data;
               let orgAddress = $(orgData).children()[6].prev.data;
               let orgPhone = $(orgData).children()[10].prev.data;
               let orgHours = $(orgData).children()[7].prev.data;
               // let rawEmail = $(orgData).children()[12].attribs.href;
               // let orgEmail = (rawEmail).substr(rawEmail.indexOf(':')+1, rawEmail.length);

     // This is from jQuery that allowed me to target the text within. Thanks THUY!
     // $(tempRow).children().each(function (index){
     //      console.log(( index + ": " + $( this ).text() ));
     // });

               // Building Data - one for every row within the table.
               const bldgDataBody = 'tbody';
               let numOfRows = $(bldgDataBody).children().length;
               let bldgArr = []; // This array will hold all of the buildings and later will be added to the building object to which it is related.
               for (i=1; i<numOfRows; i++){
                    let tempRow = $(bldgDataBody).children()[i];
                    let tempID = $(tempRow).children()[0]; //The first column in the table.
                    let bldgID = $(tempID).text();
                    // console.log("BldgID: " + bldgID);

                    let tempName = $(tempRow).children()[1]; //The second column in the table.
                    let bldgName = $(tempName).text();
                    // console.log("BldgName: " + bldgName);

                    let tempAddress = $(tempRow).children()[2]; //The third column in the table.
                    let bldgAddress = $(tempAddress).text();
                    // console.log("BldgAddress: " + bldgAddress);
                    let bldgData = {
                         "DEV_ID" : bldgID,
                         "DEV_NAME" : bldgName,
                         "BLDG_ADDRESS" : bldgAddress,
                         "Unit_Type" : mockData[i].unitType,
                         "Speciality" : mockData[i].special
                    }
                    bldgArr.push(bldgData); // After constructing the object, it gets pushed into the building array. This whole array will be pushed into the object for the organizational unit. 
               }


               let orgInformation = {
                    "orgUnit" : (orgUnit).trim(),
                    "orgManager" : (orgManager).trim(),
                    "orgAddress" : (orgAddress).trim(),
                    "orgPhone" : (orgPhone).trim(),
                    "orgHours" : (orgHours).trim(),
                    "orgEmail" : 'info@torontohousing.ca',
                    "orgBuildings": bldgArr              
               }

               // Tried putting this as a global variable and then pushing orgInformation into it. Currently, the problem is that the write file is only writing a single org unit. Have also tried moving the write file out of the axios, as well as the array, but getting undefined at orgArr and cannot push undefined.

               orgArr.push(orgInformation);
               // console.log(orgInformation);
               // Takes the results and writes them to a JSON file to be used in the API. Currently working for a single organizational unit.
          }
          fs.writeFile('./data/webscrapeResults.JSON', JSON.stringify(orgArr, null, 2), () => {
               console.log('File written');
          })
     })

     )     
     .catch(err => {
          console.log(err);
     }); 

