function markEntries() {
  var twikiEntries = document.getElementsByClassName('patternSearchResult'), result;
  for (var i = 0, len = twikiEntries.length; i < len; i++) {
    twikiEntry = makeTwikiEntryObject(twikiEntries[i]);
    if ( isStale(twikiEntry) ) markStale(twikiEntry);
      if ( isUnknownAuthor(twikiEntry) ) markUnknownAuthor(twikiEntry);
  }
}
 
function makeTwikiEntryObject(entry) {
  var result = {};

  result.dom = entry;
  result.author = getAuthor(entry);
  result.date = getDate(entry);
  result.description = getDescription(entry);
  result.revision = getRevision(entry);
  result.title = getTitle(entry);

  return result;
}
 
function getAuthor(entry) {
  return entry.childNodes[0].childNodes[1].innerText;
}
 
function getDate(entry) {
  if ( entry.childNodes[0].childNodes[2].firstChild.innerText ) { // "NEW"
    return entry.childNodes[0].childNodes[2].childNodes[2].innerText;
  } else {
    return entry.childNodes[0].childNodes[2].childNodes[1].innerText;
  }
}
 
function getDescription(entry) {
  return entry.childNodes[2].childNodes[0].innerText;
}
 
function getRevision(entry) {
  if ( entry.childNodes[0].childNodes[2].firstChild.innerText ) { // "NEW"
    return "r0";
  } else {
    return entry.childNodes[0].childNodes[2].firstChild.wholeText.split(" ")[0];
  }
}
 
function getTitle(entry) {
  return entry.childNodes[0].childNodes[0].innerText;
}
 
function isStale(entry) { 
  return (entry.date < "2011" && entry.revision < "r1");
}
 
function isUnknownAuthor(entry) {
  return (entry.author == "UnknownUser" || entry.author == "TWikiContributor");
}
 
function markStale(entry) {
  entry.dom.style.background = "yellow";
}
 
function markUnknownAuthor(entry) {
  entry.dom.style.background = "grey";
}
 
markEntries();
