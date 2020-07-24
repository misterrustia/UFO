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
}

function handelClick(){
    // grab the datetime value from the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData ;

    // filter with date entered 
    if(date){
    // apply filter to tbl data to keep rows where datetime matches filter
        filterData = filteredData.filter(row=> row.datetime === date);
    };

    // reuild the table using the filtered data 
    //NOTE if no date was enetered , then filterdata will just be the original tabledata
    buildTable(filteredData);

};
// attach even to lstn 4 the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// bult table when page loads 
buildTable(tableData);

