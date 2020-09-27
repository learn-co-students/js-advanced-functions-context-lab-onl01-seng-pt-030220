/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord(array){
const newObject = { 
    firstName: array[0], 
    familyName: array[1], 
    title: array[2], 
    payPerHour: array[3], 
    timeInEvents: [] , 
    timeOutEvents: []
}
return newObject
}

function createEmployeeRecords(aoa){
const makeNewEmployee = aoa.map(array => {
    const newEmployee = createEmployeeRecord(array)
    return newEmployee
})
return makeNewEmployee
}


function createTimeInEvent(datestamp) { 
const newDate = datestamp.split(" ") 
const newObject = { 
    type: "TimeIn", 
    hour: parseInt(newDate[1]), 
    date: newDate[0]
}
this.timeInEvents.push(newObject) 
return this
}

function createTimeOutEvent(datestamp) { 
    const newDate = datestamp.split(" ") 
    const newObject = { 
        type: "TimeOut", 
        hour: parseInt(newDate[1]), 
        date: newDate[0]
    }
    this.timeOutEvents.push(newObject) 
    return this
    }


    function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find((event)=> {return event.date === date}).hour 
    const timeOut = this.timeOutEvents.find((event)=> {return event.date === date}).hour 
    const total = (timeOut - timeIn) / 100 
    return total
    }; 

    function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this,date)
    const totalWage = this.payPerHour * hours
    return totalWage
    }


function findEmployeeByFirstName(srcArray, firstName){
const findEmployee = srcArray.find(obj => obj.firstName === firstName)
return findEmployee
}


// function calculatePayroll(array){
//     const allWages = [] 
//     array.forEach(obj => {
//         const wages = allWagesFor(obj)
//         allWages.push(wages)
//     })
//     const newTotal = allWages.reduce((total, amount) =>total + amount)
//     return newTotal
//     }


function calculatePayroll(array) {
    const total = array.reduce((total, employee)=> total + allWagesFor.call(employee),0 )
    return total
}

