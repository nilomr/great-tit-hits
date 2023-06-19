# Great Tit Hits Dataset

The `great-tit-hits.csv` file contains information about individual bird songs detected in audio recordings. It contains the following columns:

## File Format

The first row contains the column names and the first column (without name) is as the index.

The 'onsets', 'offsets', 'silence_durations', and 'unit_durations' columns are lists and need to be parsed as such. Alternatively, these data can be gathered from the JSON metadata files in `data/songs/*/JSON`.

## Variable descriptions

Column Name       | Description
----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ID                | Unique identifier for each breeding attempt associated to the song. This is equivalent to the 'pnum' column in other files, and allows us to associate the song with the identity of the bird that produced it (with some uncertainty), or, if the bird was not caught, to have a proxy for it
class_id          | Unique song type identifier. Number of unique class_id for one ID = repertoire size.
datetime          | Date and time of the vocalization
start             | Start time of the vocalization in frames (for bounding box)
end               | End time of the vocalization in frames (for bounding box)
length_s          | Duration of the vocalization in seconds
bit_rate          | Bit rate of the audio recording
sample_rate       | Original sample rate of the audio recording. Downsampled to 22050 Hz
lower_freq        | Lower frequency bound of the vocalization (for bounding box)
upper_freq        | Upper frequency bound of the vocalization (for bounding box)
max_amplitude     | Maximum amplitude of the vocalization
onsets            | List of onset times for each note in the vocalization
offsets           | List of offset times for each note in the vocalization
silence_durations | List of silence durations between each unit in the vocalization
unit_durations    | List of durations for each unit (note) in the vocalization
