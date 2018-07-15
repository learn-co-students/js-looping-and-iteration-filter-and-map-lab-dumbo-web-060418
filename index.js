function driversWithRevenueOver(drivers, revenue){
  return drivers.filter( function(driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  moneyMakers = driversWithRevenueOver(drivers, revenue);
  return moneyMakers.map( function(driver) {
    return driver.name;
  })
}

function exactMatch(drivers, attributes){
  return drivers.filter( function(driver) {
    for (key in attributes){
      return driver[key] === attributes[key];
    }
  })
}

function exactMatchToList(drivers, attributes){
  matches = exactMatch(drivers, attributes);
  return matches.map( function(driver) { return driver.name });
}
