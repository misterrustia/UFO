// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {
  // need to have 5 filters 
  cityfltr, datefltr, statefltr, countryfltr, shapefltr
};
function datefltr(){
  // grab the datetime value from the filter
  let date = d3.select('#datetime').property('value');
  let filteredData = tableData ;

  // filter with date entered 
  if(date){
  // apply filter to tbl data to keep rows where datetime matches filter
    filterData = filteredData.filter(row => row.datetime === date);
  };
  else {};

  // reuild the table using the filtered data 
  //NOTE if no date was enetered , then filterdata will just be the original tabledata
  buildTable(filterData);
  };


function cityfltr(){
  let city = d3.select('#City').property('value');
  let filteredData = tableData ;

  if(city){
    city_filteredData = filteredData.filter(row=> row.city === city);
  
  };
  else {// unclear what I put in else statement 
  
    ///## next fnc 
  };
};
function statefltr(){
  let state = d3.select('#State').property('value');
  let filteredData = tableData ;

  if(state){
    filteredData = filteredData.filter(row=> row.state === state);
  
  };
  else {// unclear what I put in else statement 
   //this is where the other part that passes if nothing put in filter?    
      ///## next fnc
  };
};

function countryfltr(){
  let country = d3.select('#Country').property('value');
  let filteredData = tableData;

  if(country){
    filteredData = filteredData.filter(row=> row.state);
  }
  else {};
};
    //## end of filter table fncs 
  
  buildTable(filteredData)

function shapefltr(){
  let shape = d3.select('#Shape').property('value');
  let filteredData = tableData;

  if(shape){
    filteredData = filteredData.filter(row=> row.shape);
  }
  else(shape){}//dont filter anything? }
}


// This function will replace your handleClick function
function updateFilters(filters) {

  // Save the element, value, and id of the filter that was changed
  

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object

  // Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData ;
  // Loop through all of the filters and keep any data that
  // matches the filter values
  
  Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.forEach((filters) => {
    let row = tbody.append("tr");
    let cell = row.append("td");
    cell.text(value);
  });
});
  // Finally, rebuild the table using the filtered Data
  buildTable(filter);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("#filter-btn","  ","  ",).on("click",filterTable);

// Build the table when the page loads
buildTable(tableData);
