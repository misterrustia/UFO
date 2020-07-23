// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    // first, clear out any exiesting data
    tbody.html("");

    // loop through each object in data
    // and append a row and cell for each value on thje row
    data.forEach((dataRow)=>{
        let row = tbody.append("tr");

        // loop through each file din the data Row and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val)=>{
         let cell = row.append("td");
         cell.text(val);   
        }
    );
});