// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.forEach(x => console.log(x["name"]))
}

function logDriversByHometown(drivers, hometown){
  const home = hometown
  drivers.forEach(function(driver, hometown){
    if(driver["hometown"] === home){
      console.log(driver["name"])
    }
  })
}

function driversByRevenue(drivers){
const newArray = drivers.slice();
newArray.sort(function(a, b){
  return a["revenue"] - b["revenue"]
})
return newArray
}

function driversByName(drivers){
  const newArray = drivers.slice();
  newArray.sort(function(a, b){
    return a["name"].localeCompare(b["name"]);
  })
  return newArray
}

function totalRevenue(drivers){
  return drivers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue["revenue"]
  }, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
