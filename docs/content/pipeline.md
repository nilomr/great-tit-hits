# Great Tit Dataset Pipeline

Repository: [/great-tit-hits-setup](https://github.com/nilomr/great-tit-hits-setup)<br>
This pipeline processes and prepares the Great Tit song dataset for sharing. It consists of the following steps:

Step | Script                      | Description
---- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1    | `0.1-broods.py`             | This script reads in bird breeding data from a CSV file, cleans and filters the data, and then saves the cleaned data to a new CSV file. It also generates several plots to visualize the data, including the number of unique bird broods per year, the proportion of different bird species over time, and the number of missing lay dates per year.
2    | `0.2-morphometrics.py`      | Reads in bird morphometrics data from the original CSV file, cleans and filters the data, and then saves it to a new CSV file. It also generates several plots, including the number of unique birds per year and the oldest birds in the dataset.
3    | `0.3-nestboxes.py`          | Reads in bird nestbox data, cleans and filters it, then saves the cleaned data to a new CSV file and generates several plots to visualize the data, including a scatterplot for each variable and a plot of the nestbox positions and perimeter of the study area.
4    | `0.4-assign-recordings.py`  | Reads in bird nestbox data and bird recordings data, and assigns recordings to breeding attempts in the nestboxes. It then renames the directories containing the recordings to include the year and breeding attempt number for each nestbox.
5    | `0.5-link-metadata.py`      | This script prepares metadata on bird immigration status, natal nest box if known, bird age, sampling information (effort, missing data, time and date, delay with respect to first egg).
6    | `0.6-first-morning-song.py` | Extracts information on the time of day when the birds first sing from the annotation XML files. It then creates plots showing the distribution of the time of day when the birds first sing, as well as the time since sunrise when the first song is sung. Finally, it plots the time of first song vs date for each year, by individual bird.
7    | `1.0-segment-data.py`       | Segments the recordings into individual songs and saves each song as a separate file. This first step is run on the full soundscape dataset (~9TB).
8    | `2.0-prepare-dataset.py`    | Prepares the dataset by calculating and cleaning spectrograms, finding and labelling notes, etc. See the [pykanto docs](https://nilomr.github.io/pykanto/_build/html/contents/basic-workflow.html) for more information.
9    | `3.0-review-dataset.py`     | This script is used to review the dataset and remove noise and labelling mistakes. It should be run manually and carefully - requires user imput - and it should only run once after the dataset has been labelled.
10   | `5.0-export-train-set.py`   | Exports a training set of songs for use in machine learning models.
11   | `5.1-export-img-set.py`     | Exports the full set of spectrograms for infrence.
12   | `6.0-link-all.py`           | Cleans and reorders the columns, exports feature vectors derived from the metric learning model as CSV, removes bad files, updates JSONs, and extracts various statistics from the data to a markdown table.
13   | `7.0-validate-segs.py`      | This script/simple app can be used to check the results of the note segmentation procedure and calculate the percentage of notes that were correctly segmented. Requires user input.
14   | `10.0-share-dataset.py`     | Prepares the dataset for sharing by creating a ZIP file with all necessary files and saving this and the CSV metadata files to a new repo, `great-tit-hits`.

# Visualisation and configuration files

- `auxiliary.py`: Contains helper functions to create/use xml files.
- `config.py`: Contains configuration settings for the project.
- `plot-general-figs.py`: Plots general figures (Fig 1 in paper).
- `plot-song-time-date.py`: Plots song activity vs time of the season and time of the day (3D plot).
- `plot-song-vs-laydate-2d.py`: Plots the relationship between song activity and lay date.
- `plot-song-vs-laydate.py`: Plots the relationship between song activity and lay date (3D plot).
- `plot-spectrograms.py`: Plot example spectrograms of the songs.

# Instructions

> **Note**: Some original and intermediate files are quite heavy, and the process
is generally computationally intensive. I have run most of this pipeline on the
University HPC cluster. Steps 1 through 6 and 7 through 14 can be reproduced by
cloning this repository and using the raw data provided at
<https://osf.io/n8ac9/>. I have assumed that the data will be located in some
form of external storage, so you would need to change the path to this manually
in `scripts/config.py`.

To run the pipeline, follow these steps:

***
**1** | Clone the repository to your local machine and install the package locally

```bash
git clone https://github.com/nilomr/great-tit-hits-setup.git
cd great-tit-hits-setup
pip install . # Or pip install -e '.[dev, test, doc]' if you want to develop
```


See the [installation instructions for `pykanto`](https://nilomr.github.io/pykanto/_build/html/contents/installation.html) if you are going to use GPUs:

***
**2** | Place the song data from <https://osf.io/n8ac9/> in a `data/segmented/great-tit-hits` directory under the project root. See [how to set up a project in pykanto](https://nilomr.github.io/pykanto/_build/html/contents/project-setup.html) for an example of the project structure.
> **Note:** the `config.py` file will try to create a symlink from a 'data' folder in your project to the external data location specified there, you don't need to do this manually as long as you provide a path to a location following the `/segmented/great-tit-hits/` pattern that has the `/WAV` and `/JSON` directories in it.

***
**3** | Run each script in order, starting with `0.1-broods.py` and ending with `10.0-share-dataset.py`.

> **Note:** You should skip step 7, `1.0-segment-data.py`, this requires the
> full soundscape recordings, which are not provided for practical reasons: it's
> 9TB of mostly other birds and sounds. Do let me know if you want them and have
> a good system to transfer them!
***

**4** | The final output will be a ZIP file containing the song data and several CSV files with the relevant metadata

<br><br>