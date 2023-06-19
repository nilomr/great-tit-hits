# Main data file

This dataset contains monitoring data for years 2013-2022\. The dataset includes information on broods, adult birds, nestboxes, and acoustic recordings (from 2020 onwards).

## File format

The CSV file has no index column, and the first row contains the column names. The column names provide descriptive labels for each variable in the dataset.

## Variable descriptions

Column Name             | Explanation
----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
year                    | The year when the data was recorded
pnum                    | Nesting attempt identifier, unique to each attempt. It's made up of the year, the number of nesting attempts in the same box that year (1 for the first attempt, 2 for the second attempt in the same box, etc.), and the nest box number. Corresponds to 'ID' in the song dataset (`great-tit-hits.csv`).
nestbox                 | The name of the nest box.
clear_date              | The date when the nest box was cleared, indicating the end of a nesting attempt.
missing_entire_brood    | Indicates whether the entire brood (chicks) is missing or not.
suspected_predation     | Indicates whether suspected predation occurred during the nesting attempt.
lay_date                | The date of laying, recorded as the day of the year ("YYYY-MM-DD") when the first egg was seen.
april_lay_date          | The lay date as an April date, where April 1 is 1.
lay_date_visit_interval | The interval in days between the laying date and the nest box visit.
laying_rate             | The rate of egg-laying, calculated as the number of eggs laid per day.
incubation_started      | Indicates whether incubation of the eggs has started or not (can disregard)
num_broken_eggs         | The number of eggs that were broken (accidentally by field workers) during the nesting attempt.
hatch_date              | The date of hatch, recorded as the day of the year ("YYYY-MM-DD").
april_hatch_date        | The hatch date as an April day, with April 1st being 1.
incubation_duration     | The duration of time that the eggs were incubated, when known when they hatched.
total_egg_weight        | The total weight of all eggs weighed. We also weigh 3 or 4 eggs to get an average.
num_eggs_weighed        | The number of eggs weighed.
clutch_size             | The total number of eggs when incubation starts.
num_chicks              | The number of chicks that are seen to hatch, counted when first seen hatching and again at around day 5 when faceplate. Some might not be hatched at the first visit, and some might hatch and die and be taken out by parents by the second visit.
num_chicks_ringed       | The number of chicks that are alive and big enough to take a ring at day 15.
april_ring_date         | The date when the chicks were ringed ("YYYY-MM-DD").
ring_day                | How many days old the chicks were when they were ringed.
num_live_chicks         | The number of chicks that are alive when they are ringed.
num_dead_chicks         | The number of chicks that are dead. This can occur on more than one visit.
num_fledglings          | Calculated by counting the number of chicks left dead in the box after the rest have fledged.
mean_chick_weight       | The mean weight of chicks at 15 days old.
father                  | The BTO (British Trust for Ornithology) ring of the father, assumed to be the bird feeding the young.
mother                  | The BTO ring of the mother.
resident                | Indicates whether the bird is a resident or not.
natal_box               | The nest box where the bird was born.
year_born               | The year the bird was born, if known.
bto_age                 | The age of the bird (British Trust for Ornithology code) classification.
age                     | The age of the bird. This is exact if the bird was ringed as a pullus in the population, or approximate (based on plumage moult) otherwise.
x                       | The X coordinate (Easting) of the bird's nest box. Uses the British National Grid Eastings and Northings.
y                       | The Y coordinate (Northing) of the bird's nest box. Uses the British National Grid Eastings and Northings.
type                    | The type of nest box (great tit or blue tit -size).
poly                    | The areas of Thiessen polygons formed around all nest boxes, restricting areas to within the perimeter of the woodland (nest box spacing polygons).
edge_edi                | Edge distance index (EDI). Accounts for the number and distribution of habitat edges in close proximity to the nest box. See: Wilkin, Teddy A., et al. "Edge Effects in the Great Tit: Analyses of Long-Term Data with GIS Techniques." Conservation Biology, vol. 21, no. 5, 2007, pp. 1207–17\. JSTOR, <http://www.jstor.org/stable/4620944>
altitude_m              | The nest box altitude in meters.
aspect                  | The aspect of the bird's nest box. Used to calculate northness.
northness               | The northness value of the bird's nest box. See WILKIN, T.A., PERRINS, C.M. and SHELDON, B.C. (2007), The use of GIS in estimating spatial variation in habitat quality: a case study of lay-date in the Great Tit _Parus major_. Ibis, 149: 110-118\. <https://doi.org/10.1111/j.1474-919X.2007.00757.x>
habitat_type            | The type of habitat the nest box is in.
soil_type               | The type of soil around the nest box.
recorded                | Indicates whether the bird was recorded or not.
total_recordings        | The total number of recordings for the bird (1 recording = 1h, quantifies sampling effort)
missing_recordings      | The number of missing recordings for the bird due to equipment malfunction.
first_recorded          | The first recorded date for the bird.
last_recorded           | The last recorded date for the bird.
delay                   | The difference between first recording date and lay_date .
n_vocalisations         | Number of songs by a bird in the dataset (a good proxy for n songs produced)
repertoire_size         | The size of the bird's repertoire, i.e., the number of different song types it produced.
