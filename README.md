TwikiChecker
============

Bookmarklet to check the entries in a Twiki.

What can you delete? Which articles need some love? Find out by running the TwikiChecker on your Twiki! 

To debug, this code can be run by pasting it into a JavaScript console attached to a Twiki's WebIndex page. 

To package as a bookmarklet, simply wrap the code like so:
javascript:(function(){// paste TwikiChecker.js here})();

This could also be packaged as a userscript. In Chrome, create TwikiChecker.user.js and drag it to the address bar when you are on the chrome://chrome/extensions page. In Firefox, download and install Greasemonkey, then package the file as a Greasemonkey script.

Currently, any first revisions untouched since 2011 will be highlighted in yellow; entries without an author will be highlighted gray.
