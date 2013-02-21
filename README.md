# Note

This repo has moved to [Blackbaud](https://github.com/blackbaud/). Please develop against the [Blackbaud TwikiChecker repo](https://github.com/blackbaud/TwikiChecker).

------------------------------------------------------------------


# TwikiChecker

Bookmarklet to check the entries in a Twiki.

## How healthy is your Twiki?
What can you delete? Which articles need some love? Find out by running the TwikiChecker on your Twiki! 

## What it does
Currently, any first revisions untouched since 2011 will be highlighted in yellow; entries without an author will be highlighted gray.

## How it works
The TwikiChecker will find all Twiki entries (identified as having the class patternSearchResult), then iterate over the list. For each Twiki entry, we create an object that holds a pointer to the DOM, the author, date when the entry was last changed, article description, revision number, and article title. We can then check various properties (such as freshness) on the object and style the Twiki entry as desired.

## Debugging
To debug, this code can be run by pasting it into a JavaScript console attached to a Twiki's WebIndex page. 

## Packaging as a bookmarket
To package as a bookmarklet, simply wrap the code like so:
javascript:(function(){// paste TwikiChecker.js here})();

## Packaging as a userscript
This could also be packaged as a userscript. In Chrome, create TwikiChecker.user.js and drag it to the address bar when you are on the chrome://chrome/extensions page. In Firefox, download and install Greasemonkey, then package the file as a Greasemonkey script.

### Contributors
Seth Holloway, Otto Ottinger, Nick Dollarhide, Derek Geeting

## Ideas
* Package in a namespace
* Clean up code
* Improve speed
* Package as a userscript in Chrome and Firefox
* Package as a bookmarklet
* Extend functionality to work on search page (the search page can be full of cruft too)
* Add user inputs to allow people to adjust the settings and quickly see the results; for example, find all posts before 2012 and paint them #3f8d9a
* Improve the algorithm for determining freshness
* Improve the algorithm for determining if a post is orphaned; for example, was it written by a known, current employee
* Add additional routines for filtering
