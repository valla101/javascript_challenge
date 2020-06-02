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

// This function is grabbing the text input and displaying it in console log once submitted. So far so good.
// Need to apply a filter on the data sets
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element 
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Set the span tag in the h1 element to the text
    // that was entered in the form
    d3.select("h1>span").text(inputValue);

    // Filters the tableData and prints the filtered data records on console log. the table itself doesn't change yet
    var filtered_sighting = tableData.filter(record => record.datetime === inputValue);
    console.log(filtered_sighting);
};