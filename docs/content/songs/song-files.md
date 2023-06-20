# Song Data

The `songs` directory contains audio recordings, along with metadata for each
recording. The dataset is split into four zip files: 

```bash
songs
├── song-files.zip.part1
├── song-files.zip.part2
├── song-files.zip.part3
└── song-files.zip.part4
```

These files can be stitched together before unzipping using the command `cat
song-files.zip.part* > sf.zip && zip -FF sf.zip --out song-files.zip`, or your
preferred method if you are not on a Unix-like system.

When you unzip the file, you will see the following structure:

```bash
song-files
├── JSON
│   ├── file.JSON
│   └── ...
└── WAV
    ├── 1_20190501_000000_0.wav
    └── ...
```

## Dataset Size

There are 109,963 files in each of the `WAV` and `JSON` folders. The total size of the dataset is 11.4 GB.

## File Format

The dataset is provided in ZIP format, with two folders: `WAV` and `JSON`. The
`WAV` folder contains the audio recordings in WAV format, and the `JSON` folder
contains the metadata for each recording in JSON format. The filenames match
between the two folders-only the extension changes.


The **WAV files** are mono 16-bit PCM audio files with a sample rate of 22,050 Hz.
The files are named according to the following convention:
`<ID>_<YYYYMMDD_HHMMSS>_<start frame>.wav`
Where `ID` is the unique identifier for the recording, `YYYYMMDD_HHMMSS` is the
datetime of the recording, and `start frame` is the
start frame of the recording in the original audio file.

The **JSON files** contain metadata for each recording. The files are named
according to the same convention, `<ID>_<YYYYMMDD_HHMMSS>_<start frame>.JSON`, and
each file contains the following fields:


| Key              | Description                                      |
|------------------|--------------------------------------------------|
| sample_rate      | The sample rate of the audio                     |
| bit_rate         | The bit rate of the audio                        |
| length_s         | The duration of the audio segment                |
| ID               | The unique identifier for the audio segment       |
| label            | The label associated with the audio segment       |
| start            | The start position of the audio segment           |
| end              | The end position of the audio segment             |
| lower_freq       | The lower frequency bound of the audio segment    |
| upper_freq       | The upper frequency bound of the audio segment    |
| max_amplitude    | The maximum amplitude of the audio segment        |
| min_amplitude    | The minimum amplitude of the audio segment        |
| source_wav       | The file path to the original source WAV file     |
| annotation_file  | The file path to the XML annotation file          |
| wav_file         | The file path to the segmented WAV file           |
| class_id         | The class identifier for the audio segment        |
| datetime         | The date and time of the recording                |
| onsets           | A list of onset times in seconds                 |
| offsets          | A list of offset times in seconds                |
| silence_durations| A list of silence durations in seconds           |
| unit_durations   | A list of unit durations in seconds              |
