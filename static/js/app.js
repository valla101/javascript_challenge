// from data.js
var tableData = data;

var tbody = d3.select("tbody");
// YOUR CODE HERE!

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#theform");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Define the forEach function that'll loop through every object in the array "tableData"
tableData.forEach(function(record){
    // make a new table row for each object that appears in the table
    var table_row = tbody.append("tr");
    // Object.entries will make every dictionary item into a pair of key & value. this is necessary to place each item in its corresponding column.
    Object.entries(record).forEach(function([key, value]){
        // console.log(key,value);
        var table_cell = table_row.append("td");
        table_cell.text(value);
    });
});

// This function is grabbing the text input and displaying it in console log once submitted.
// This funciton filters data by Date (user input)
// function runEnter() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();
//     // select the input element 
//     var inputElement = d3.select("#datetime");
//     var inputValue = inputElement.property("value");
//     console.log(inputValue);

//     // // Set the span tag in the h1 element to the text
//     // // that was entered in the form

//     // Filters the tableData and prints the filtered data records on console log. the table itself doesn't change yet
//     var filtered_sighting = tableData.filter(record => record.datetime === inputValue);
//     console.log(filtered_sighting);

//     // This will empty the table, to enable you to insert the filtered sightings into the tbody.
//     tbody.html("");
    
//     filtered_sighting.forEach(function(record){
//         // make a new table row for each object that appears in the table
//         var table_row = tbody.append("tr");
//         // Object.entries will make every dictionary item into a pair of key & value. this is necessary to place each item in its corresponding column.
//         Object.entries(record).forEach(function([key, value]){
//             // console.log(key,value);
//             var table_cell = table_row.append("td");
//             table_cell.text(value);
//         });
//     });
// };

// This funciton filters data by City (user input)
// "cityfilter" 

// approach
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element for date
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    // selecting the input value for city
    var cityInputElement = d3.select("#cityfilter");
    var cityInputValue = cityInputElement.property("value");

    // Filters the tableData and prints the filtered data records on console log. the table itself doesn't change yet
    var filtered_sighting = tableData.filter(record => record.datetime === inputValue);
    console.log(filtered_sighting);

    // Filters the tableData by city. The user must input a city in the input field for this to work. the table itself doesn't change yet
    var city_filtered_sighting = tableData.filter(record => record.city === cityInputValue);
    console.log(city_filtered_sighting);

    // // This will empty the table, to enable you to insert the filtered sightings into the tbody.
    tbody.html("");
    
    // Appending table data based on the "filtered_sighting" filter

    filtered_sighting.forEach(function(record){
        // make a new table row for each object that appears in the table
        var table_row = tbody.append("tr");
        // Object.entries will make every dictionary item into a pair of key & value. this is necessary to place each item in its corresponding column.
        Object.entries(record).forEach(function([key, value]){
            // console.log(key,value);
            var table_cell = table_row.append("td");
            table_cell.text(value);
        });
    });

    // Appending table data based on city filter

    city_filtered_sighting.forEach(function(record){
        // make a new table row for each object that appears in the table
        var table_row = tbody.append("tr");
        // Object.entries will make every dictionary item into a pair of key & value. this is necessary to place each item in its corresponding column.
        Object.entries(record).forEach(function([key, value]){
            // console.log(key,value);
            var table_cell = table_row.append("td");
            table_cell.text(value);
        });
    });
};
