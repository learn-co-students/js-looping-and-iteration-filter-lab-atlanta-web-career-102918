// Code your solution in this file
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string){
  let matchName = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
  return matchName
};

function fuzzyMatch(drivers, letters){

  let matchName = drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()) === true)
  return matchName
}

function matchName(drivers, stringName){
  return drivers.filter(driver => driver.name === stringName)

}
