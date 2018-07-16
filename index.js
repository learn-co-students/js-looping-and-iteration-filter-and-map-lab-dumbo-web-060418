// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  let filtered = drivers.filter(function (driver) {
    return (driver.revenue > revenue)
  });
  return filtered;
}

function driverNamesWithRevenueOver(drivers, revenue){
  let filtered = driversWithRevenueOver(drivers, revenue);
  return filtered.map(function (driver) {return driver.name;});
}

function exactMatch(drivers, driverObj){
  let filtered = drivers.filter(function (driver){
    return (driver.name === driverObj.name) || (driver.revenue === driverObj.revenue);
  });
  return filtered;
}

function exactMatchToList(drivers, driverObj){
  let filtered = exactMatch(drivers, driverObj);
  return filtered.map(function (driver) {return driver.name;});
}
