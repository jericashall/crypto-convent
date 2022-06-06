# Crypto Convent
A site that displays the current market rate of over 300+ crypto currencies, and allows you to convert prices between different different coins.

**Link to project:** https://cryptoconvent.netlify.app/

![a screenshot of the site](landingpage.jpg)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, bootstrap

On page load a fetch is made to coinbase api to get the names of all the coins in their database. Then the names are looped over and inserted into the drop down boxes for users to pick from. 

On page load another fetch is made to find the current market rate of all coins in their database, and these rates are displayed in the DOM along with the name and abbreviation.

The abbreviation is required to query to the api to find the amount convert. So, the names selected by the users and used to query a differnt endpoint to connect the name to the correct abbreviation. Then those abbreviations, along with the amount, are inserted into a fetch for the converstion endpoint. The converted value is then displayed in the DOM.

## Optimizations

I would like to refactor this project to use async/await functions instead of older promise syntax. I'd also like to clean up the nesting of fetchs and make sure each endpoint is only called once. 

I want to display differnt errors related to the conversions in the dom for the user to see, such as the user forgetting to input a conversion amount. 

## Lessons Learned:

I learned how to call to an external api, and display that data in the dom. I also learned how to take user inputs to query an api. I learned how promises work and how to create promise chains. I learned how to work json response data.
