// Code your solution in this file

function findMatching(drivers, name) {
  let driverName = drivers.filter(function (driver) {return driver.toLowerCase() == name.toLowerCase()})
  return driverName;
}

function fuzzyMatch(drivers, name) {
  let fuzzyDriverName = drivers.filter(function (driver) {return driver[0] == name[0]})
  return fuzzyDriverName;
}

function matchName(drivers, name) {
  let driverMatchName = drivers.filter(function (driver) {return driver.name === name})
  return driverMatchName;
}
