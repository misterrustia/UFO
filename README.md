# UFO
mod 11

## challenge description 

The task was to create 5 filters for different factors of UFO sighting and have input locations for a user 
to click a button be able to filter the UFO sighting data by their input into the created. I placed all five 
filters inside of one function followed by 5 if statements to pass along a single object I named "filteredData"
into each if statement to see if anything input was put into each filter. If there was input the "d3.selectALl"
filter was able to pick up the input with the unique tag each input was given and then the if statement would of filtered
the "filteredData" object to exactly match (===) the input taken from the filter. Once all 5 filters and if statments have been passed through the buildtable function() was called and the filtered "filteredData" object was passed into the buildtable function to only query the data that matched the filters given. I also added a "Clear Table" button and added a second d3.selectAll section to listen for a click on the Clear Table button to run a function to buildtable with the orignail data to reset all of the filters. skills in Folder structure, Java Script, HTML, CSS and the D3 library were all developed in this module. 
