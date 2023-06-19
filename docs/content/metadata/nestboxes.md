# Wytham Woods Nest Box Locations

The `nestboxes.csv` file contains information on the location and
characteristics of nest boxes in Wytham Woods. The dataset includes information
on the nest box ID, location coordinates, type, altitude, aspect, and habitat
and soil types. These data are also included in `main.csv`.

## File Format

The CSV file has no index column, and the first row contains the column names. The column names provide descriptive labels for each variable in the dataset.

## Variable Descriptions

Column Name  | Explanation
------------ | ------------------------------------------------------------------------------------------------------------------------
nestbox      | The ID of the nest box.
section      | The section of Wytham Woods where the nest box is located.
x            | The X coordinate (Easting) of the nest box. Uses the British National Grid Eastings and Northings.
y            | The Y coordinate (Northing) of the nest box. Uses the British National Grid Eastings and Northings.
type         | The type of nest box (great or blue tit-size entrance hole)
poly         | The area of the Thiessen polygon formed around the nest box, restricting areas to within the perimeter of the woodland.
edge_edi     | Edge distance index (EDI). Accounts for the number and distribution of habitat edges in close proximity to the nest box.
altitude_m   | The altitude of the nest box in meters.
aspect       | The aspect of the nest box.
northness    | The northness value of the nest box.
habitat_type | The type of habitat the nest box is in.
soil_type    | The type of soil around the nest box.


**Also see:**

- Wilkin, Teddy A., et al. "Edge Effects in the Great Tit: Analyses of Long-Term Data with GIS Techniques." Conservation Biology 21, no. 5 (2007): 1207–17. JSTOR. http://www.jstor.org/stable/4620944.

- Wilkin, T.A., Perrins, C.M., and Sheldon, B.C. "The use of GIS in estimating spatial variation in habitat quality: a case study of lay-date in the Great Tit Parus major." Ibis 149 (2007): 110-118. https://doi.org/10.1111/j.1474-919X.2007.00757.x.