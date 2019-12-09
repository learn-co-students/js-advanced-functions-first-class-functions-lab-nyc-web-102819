// Code your solution in this file!
const returnFirstTwoDrivers = (function(drivers) {
    return drivers.slice(0, 2)
    debugger
})
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function(num) {
    return function(fare) {
       return num * fare
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function(drivers, fun) {
    return fun(drivers)
}