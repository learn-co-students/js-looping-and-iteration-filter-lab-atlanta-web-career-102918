function findMatching(list, name) {
 return list.filter(function(driver) {
   return driver.toLowerCase() === name.toLowerCase()
 });
}

function fuzzyMatch(list, name) {
  return list.filter(function(driver) {
    return driver.slice(0, name.length) === name;
  });
}

function matchName(list, alias) {
  return list.filter(function(driver){
    return driver.name.toLowerCase() === alias.toLowerCase()
  });
}
