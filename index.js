function findMatching(drivers, string) {
    let newDrivers = drivers.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase();
    })
    return newDrivers
}

function fuzzyMatch(drivers, string){
    let newDrivers = drivers.filter(driver => {
        if (driver.charAt(0).toUpperCase() === string.charAt(0).toUpperCase()){
            return driver 
        }
    })
    return newDrivers 
}

function matchName(drivers, string){
    let newDrivers = drivers.filter(driver => {
        return driver.name.toUpperCase() === string.toUpperCase();
    })
    return newDrivers
}