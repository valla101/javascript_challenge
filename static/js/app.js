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
// This will display all table records whenever you load the homepage.

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

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element for date
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    // selecting the input value for city
    var cityInputElement = d3.select("#cityfilter");
    var cityInputValue = cityInputElement.property("value");
    // selecting the input value for the state
    var stateInputElement = d3.select("#statefilter");
    var stateInputValue = stateInputElement.property("value");

    // selecting the input value for the country
    var countryInputElement = d3.select("#countryfilter");
    var countryInputValue = countryInputElement.property("value");

    var shapeInputElement = d3.select("#shapefilter");
    var shapeInputValue = shapeInputElement.property("value");


    // Filters the tableData and prints the filtered data records on console log. the table itself doesn't change yet
    var filtered_sighting = tableData.filter(record => record.datetime === inputValue);
    console.log(filtered_sighting);

    // Filters the tableData by city. The user must input a city in the input field for this to work. the table itself doesn't change yet
    var city_filtered_sighting = tableData.filter(record => record.city === cityInputValue);
    console.log(city_filtered_sighting);

    // Filters the tableData by state. The user must input a state abbreviation in the input field for this to work. the table itself doesn't change yet
    var state_filtered_sighting = tableData.filter(record => record.state === stateInputValue);
    console.log(state_filtered_sighting);

    var country_filtered_sighting = tableData.filter(record => record.country === countryInputValue);
    console.log(country_filtered_sighting)

    var shape_filtered_sighting = tableData.filter(record => record.shape === shapeInputValue);
    console.log(shape_filtered_sighting)

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

    // Appending table data based on state filter

    state_filtered_sighting.forEach(function(record) {
        // create table row for each record inside tbody
        // create table cells for each array (object entries)
        // append text to each td
        var table_row = tbody.append("tr");
        Object.entries(record).forEach(function([key, value]){
            var table_cell = table_row.append("td");
            table_cell.text(value);
        });
    });

    // Appending table data based on country filter
    country_filtered_sighting.forEach(function(record) {
        var table_row = tbody.append("tr");
        Object.entries(record).forEach(function([key,value]){
            var table_cell = table_row.append("td");
            table_cell.text(value);
        });
    });

    // Appending table data based on shape filter
    shape_filtered_sighting.forEach(function(record) {
        var table_row = tbody.append("tr");
        Object.entries(record).forEach(function([key,value]){
            var table_cell = table_row.append("td");
            table_cell.text(value);
        });
    });

};
