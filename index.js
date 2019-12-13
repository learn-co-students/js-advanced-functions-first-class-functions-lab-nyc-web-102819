// Code your solution in this file!
const returnFirstTwoDrivers = 
    function(drivers){
        return drivers.slice(0,2);
    };

const returnLastTwoDrivers = 
    function(drivers){
        return drivers.slice(-2.2)
    };

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
];

function createFareMultiplier(mult){
    return function(int){
        return int * mult;
    };
};

const fareDoubler = 
    createFareMultiplier(2)

const fareTripler = 
    createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, whichFunction){
    return whichFunction(drivers);
}