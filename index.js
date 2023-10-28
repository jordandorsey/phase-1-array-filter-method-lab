function findMatching(drivers, Name) {
    return drivers.filter(driver => driver.toUpperCase() === Name.toUpperCase());
} 

console.log(findMatching())

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver[0] === name[0])
}

console.log(fuzzyMatch)

function matchName(drivers, name) {
const matches = drivers.filter(driver => driver.name === name);
    return matches
}
