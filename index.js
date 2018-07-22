// Code your solution here:
const driversWithRevenueOver = function (drivers, rev) {
  return drivers.filter(function (driver) {
    if (driver.revenue > rev) {
      return driver
  }
})
}

const driverNamesWithRevenueOver = function (drivers, rev) {
  return driversWithRevenueOver(drivers, rev).map(function (driver) {
    return driver.name
  })
}

const exactMatch = function (drivers, obj) {
  for (const key in obj) {
    return drivers.filter(function(driver) {
      if(driver[key] === obj[key]) {
        return driver
      }
    })
  }
}

const exactMatchToList = function (drivers, obj) {
  return exactMatch(drivers, obj).map( function (driver) { return driver.name})
}
