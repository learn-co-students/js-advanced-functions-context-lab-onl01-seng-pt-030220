/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 class Employee {
     constructor(array) {
         this.firstName = array[0]
         this.familyName = array[1]
         this.title = array[2]
         this.payPerHour = array[3]
         this.timeInEvents= []
         this.timeOutEvents = []
     }
 }

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    return new Employee(array)
}

function createEmployeeRecords(empsArray) {
    return empsArray.map(function (e) {
        return createEmployeeRecord(e)
    })
}

function createTimeInEvent(date) {
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(date.split(" ")[1]), date: date.split(" ")[0]})
    return this
}

function createTimeOutEvent(date) {
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(date.split(" ")[1]), date: date.split(" ")[0]})
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date).hour
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour
    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function calculatePayroll(empsArray) {
    return empsArray.reduce(((total, emp) => total + allWagesFor.call(emp)), 0)
    
}

function findEmployeeByFirstName (empsArray, firstName) {
    return empsArray.find(emp => emp.firstName = name)
}