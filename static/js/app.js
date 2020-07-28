// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
console.log(data);
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


function filterTable(){
  // grab the datetime value from the filter
  let date = d3.select('#datetime').property('value');
  let city = d3.select('#City').property('value');
  let state = d3.select('#State').property('value');
  let country = d3.select('#Country').property('value');
  let shape = d3.select('#Shape').property('value');
  let filteredData = tableData ;

  // filter with date entered 
  if(date){
  // apply filter to tbl data to keep rows where datetime matches filter
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  if(city){
// apply filter to tbl data to keep rows where datetime matches filter
    filteredData = filteredData.filter(row => row.city === city);
  }
  if(state){
    filteredData = filteredData.filter(row=> row.state === state);
  }
  if(country){
    filteredData = filteredData.filter(row=> row.country === country);
  }
  if(shape){
    filteredData = filteredData.filter(row=> row.shape === shape);
  }

  // else {let filteredData = tableData};

  // reuild the table using the filtered data 
  //NOTE if no date was enetered , then filterdata will just be the original tabledata
  buildTable(filteredData);
};








// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("#filter-btn").on("click",filterTable);

d3.selectAll("#clr-btn").on("click", function(){
 console.log(tableData);
 buildTable(tableData);
})
// Build the table when the page loads
buildTable(tableData);
