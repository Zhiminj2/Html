function callAPI(searchQuery){

fetch('https://zillow56.p.rapidapi.com/search?location=11209', + searchQuery, {
    
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "zillow56.p.rapidapi.com",
        "x-rapidapi-key": "5369683703msh0d8168b0fd53192p121c77jsn2464802197da"
    }
})
.then(response => response.json())
.then(response => {
    console.log(response);
    
    // for(let i = 0; i < response.results.length; i++){
        document.getElementById('bathrooms').innerHTML = response.results[2].bathrooms;
        document.getElementById('streetAddress').innerHTML = response.results[2].streetAddress;
        document.getElementById("lotAreaUnit").innerHTML = response.results[2].lotAreaUnit;
        document.getElementById("imgSrc").innerHTML = response.results[2].imgSrc;
        document.getElementById("bedrooms").innerHTML = response.results[2].bedrooms;
        document.getElementById("lotAreValue").innerHTML = response.results[2].lotAreaValue;
        document.getElementById("price").innerHTML = response.results[2].price;
        document.getElementById("rentZestimate").innerHTML = response.results[2].rentZestimate;
    // }
})
.catch(err => {
    console.log(err);
});

}
