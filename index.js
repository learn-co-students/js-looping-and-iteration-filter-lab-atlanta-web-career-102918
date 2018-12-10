// Code your solution in this file
function findMatching(drivers, string) {
  let newArray = drivers.filter(function (driver) {return driver.toLowerCase() == string.toLowerCase()})
  return newArray
}


function fuzzyMatch(drivers, string) {
  let newArray = drivers.filter(function (driver) {return driver[0] == string[0]})
  return newArray
}

function matchName(drivers, string) {
  let newArray = drivers.filter(function (driver) {return driver.name == string})
  return newArray
}
