# Till Tech Test


trying to make the json data the default data for Cafe messed up tests as I had to make the json parsing logic at the top of Cafe, which carried over into the test suite when imported

Then scrapped Cafe class to simplify, still problems carrying things over then I worked out the error messages were saying it was due to not recognising the path so I just put them all in the root and reintroduced Cafe