# Great Tit Hits Dataset 
### (crowsetta format)

The `great-tit-hits-crowsetta.csv` file contains song annotations in
[crowsetta's `GenericSeq`
format](https://crowsetta.readthedocs.io/en/latest/index.html). There are
1,161,033 rows, one per note, with the
following columns:

- `label`
- `onset_s`
- `offset_s`
- `onset_sample`
- `offset_sample`
- `notated_path`
- `annot_path`
- `sequence`
- `annotation`


See the [crowsetta docs](https://crowsetta.readthedocs.io/en/latest/index.html)
to learn how to use the library. To load the dataset in this format, simply run:

```python
data root = [...]
from crowsetta.formats.seq import GenericSeq
dataset = GenericSeq.from_file(data_root / "great-tit-hits-crowsetta.csv")
```

The dataset was exported in this format using `scrpts/auxiliary/to-crowsetta.py`
(see [repo](https://github.com/nilomr/great-tit-hits-setup))/