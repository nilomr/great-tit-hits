# Wytham Woods Map Data

This directory contains map data for Wytham Woods. The map data is in the form
of a shapefile, which are a common format for storing geospatial vector data.

## Files 

- `perimeter.shx`: The shape index file for the Wytham Woods map.
- `perimeter.shp`: The geometry for the Wytham Woods map.
- `perimeter.prj`: The projection file for the Wytham Woods map.
- `perimeter.dbf`: The attributes file for the Wytham Woods map.


## Usage

The map data can be used to create figures and calculate territory sizes that
take into account the shape of the habitat. The shapefiles can be loaded into a
GIS software package, such as QGIS, or into a programming language, such as
Python, using the `geopandas` library.
