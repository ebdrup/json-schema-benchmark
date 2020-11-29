# Contributing to these benchmarks

Once you've cloned the repo, you need to fetch the official JSON Schema test suite, that is a git submodule of this
repo.
```shell
git submodule update --init
```

# Do not check in the `.md` markdown files in your pull request
To make merging simpler, and to make sure no results were tampered with. We like to run the benchmark and generate the
new `.md` files ourselves.

# Do not give any special treatment to any validator
The only code that is validator specific should be in `index.js`.

This is to make sure that the tests remain as objective as possible.

Also, do not *tweak* any of the settings or options of a validator. Each validator should be run in it's standard
setting. This is to make sure that nothing breaks if the benchmarks changes. But also to reflect the kind of
performance a user of the validator would get, if using it without tweaking.
Edit: Nov 29th 2021: Full error reporting should be enabled in the benchmark for all validators.