const returnFirstTwoDrivers = function(drivers) {
    const firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    const lastTwoDrivers = drivers.slice(-2, );
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare) {
        return num * fare;
    }
}

function fareDoubler(fare) {
    const doubles = createFareMultiplier(2);
    return doubles(fare);
}

function fareTripler(fare) {
    const triples = createFareMultiplier(3);
    return triples(fare);
}

function selectDifferentDrivers(drivers, choice) {
    return choice(drivers);
}