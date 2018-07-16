

const driversWithRevenueOver = (drivers, revenue) => drivers.filter(driver => driver.revenue > revenue);



function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

const exactMatch = (drivers, matcher) => drivers.filter(function(driver){
	let matches = false
	for(const key in matcher) {
		matches = driver[key] === matcher[key];
	}
	return matches
});

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
