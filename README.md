# An Affordable REST - A Full Stack Project

The City of TOronto has over a 5 year waiting list for affordable housing. In order to determine which development that a seeker can apply to, they must speak with someone at Toronto Community Housing. What if this information was not only made available through open data, but made available on a website? Think of the benefits to those in need.

This project is not yet complete on the front end, but is the minimum viable product that at least serves up the data from a JSON file that was created by webscraping the City of Toronto's Community Housing Website. I wanted to use the open data from the city's portal, but there was no usable data that would help solve the problem. Once I was able to grab the organizational data and its corresponding buildings, I pushed in mock data for the bedroom/unit sizes and the specialities. The formatting used matches that in the open data if at a later time we wish to match the two sets up, such as using the location data and map it all.

The front end using Bootstrap is not yet complete. The pieces that I am currently working on are: 

1. incorporating a general search as well as a search by organizational unit;
2. fixing the search results so that they don't go off the side of the page. They are contained properly at half screen.
3. adding the detailed page once a result is clicked. The link exists, but it doesn't go anywhere. The detail page will show the organizational information, including contact information, as well as a map using the aforementioned location data from the open data set, or just the address.

Technologies used: React.JS, Node.JS, API, Web Scraping, Express.JS, Axios.JS, Bootstrap.
