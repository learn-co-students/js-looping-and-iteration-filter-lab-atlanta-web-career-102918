// Code your solution in this file

function findMatching(list, name){
  return list.filter(function (driverName) {return driverName.toLowerCase()===name.toLowerCase()})
}

function fuzzyMatch(list, incompleteName){
  nameLength = incompleteName.length
  return list.filter(function (driverName) {return driverName.slice(0, nameLength) === incompleteName})
}

function matchName(list, name){
  return list.filter(function (driver) {return driver.name.toLowerCase()=== name.toLowerCase()})

}
