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
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}


function createEmployeeRecords(array){
    return array.map(employee => {
        return createEmployeeRecord(employee)
    })
}


function createTimeInEvent(date){
    let obj = {
        type: "TimeIn",
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0]
    }
    this.timeInEvents.push(obj)
    return this
}

function createTimeOutEvent(date){
    let obj = {
        type: "TimeOut",
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0]
    }
    this.timeOutEvents.push(obj)
    return this
}

function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find((event) => {return event.date === date}).hour
    let timeOut = this.timeOutEvents.find((event) => {return event.date === date}).hour
    let hoursWorked = (timeOut - timeIn)/100
    return hoursWorked
}

function wagesEarnedOnDate(date){
    let payPerHour = this.payPerHour
    let wages = hoursWorkedOnDate.call(this, date) * payPerHour
    return wages
}

function findEmployeeByFirstName(array, firstName){
    return array.find(employee => {
        return employee.firstName === firstName
    })
}

function calculatePayroll(employees){
    let payroll = employees.reduce((total, employee) => total + allWagesFor.call(employee), 0)
    return payroll
}