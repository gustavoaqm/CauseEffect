// Object with people info
const people = [
    {id: 0, name: "Joey Hall", street: "Flax Street", city: "Prague", country: "Czechia", telephone: "202-555-0163", birthday: "11/12/1996"},
    {id: 1, name: "Margie Pollard", street: "Lilypad Boulevard", city: "Paris", country: "France", telephone: "202-555-0130", birthday: "25/01/2002"},
    {id: 2, name: "Cayden King", street: "Apollo Lane", city: "Berlin", country: "Germany", telephone: "202-555-0148", birthday: "14/05/1993"},
    {id: 3, name: "Kishan Wainwright", street: "Great Lane", city: "Dublin", country: "Ireland", telephone: "202-555-0187", birthday: "21/03/1987"},
    {id: 4, name: "Korben Gough", street: "King Boulevard", city: "Oslo", country: "Norway", telephone: "202-555-0191", birthday: "24/02/1999"},
    {id: 5, name: "Brianna Greene", street: "Estate Street", city: "London", country: "United Kingdom", telephone: "202-555-0153", birthday: "12/01/2002"},
    {id: 6, name: "Annalise Sheppard", street: "Temple Avenue", city: "Lima", country: "Peru", telephone: "202-555-0136", birthday: "07/10/1988"},
    {id: 7, name: "Blessing Knox", street: "Grand Passage", city: "Bogotá", country: "Colombia", telephone: "202-555-0153", birthday: "05/12/1990"}
];

// Getting all the names
var names = document.getElementsByTagName('a'); 

// Getting all the elements 
var username = document.getElementById('name');
var userstreet = document.getElementById('street');
var usercity = document.getElementById('city');
var usercountry = document.getElementById('country');
var usertel = document.getElementById('telephone');
var userbday = document.getElementById('birthday');
var empty = document.getElementById('empty'); 

// Loop through the names, so we can use the addEventListener for each one
for (let i = 0; i < names.length; i++) 
{
    // Getting the id of the clicked name
    let ids = document.getElementsByTagName("a")[i].id;
    
    // Activating the function when clicking on the names
    names[i].addEventListener('click', function activate()
    {
        //Loop the names and remove the class 'active'
        for (let i = 0; i < names.length; i++) {
            names[i].classList.remove('active');
        }

        // Adding the class to the active name
        names[i].classList.add('active');
        empty.classList.add('empty');

        // Getting the object info through the currently id
        let peopleFiltered = people.find(aux => aux.id == ids);
        
        // Assigning the respective values ​​to the elements
        username.innerHTML = "Name: " + peopleFiltered.name;
        userstreet.innerHTML = "Street: " + peopleFiltered.street;
        usercity.innerHTML = "City: " + peopleFiltered.city;
        usercountry.innerHTML = "Country: " + peopleFiltered.country;
        usertel.innerHTML = "Telephone: " + peopleFiltered.telephone;
        userbday.innerHTML = "Birthday: " + peopleFiltered.birthday;
    });  
}
