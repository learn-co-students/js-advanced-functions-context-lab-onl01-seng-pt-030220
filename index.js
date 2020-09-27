/* Your Code Here */

let createEmployeeRecord = function(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

let createEmployeeRecords = function(employee) {
    return employee.map(e => createEmployeeRecord(e));
}

let createTimeInEvent = function(date) {
    let dateTimeSplit = date.split(' ');
    let dateIn = dateTimeSplit[0];
    let time = dateTimeSplit[1];
    this.timeInEvents.push(
        {type: "TimeIn", hour: parseInt(time, 10), date: dateIn}
    )
    return this;
}

let createTimeOutEvent = function(date) {
    let dateTimeSplit = date.split(' ');
    let dateOut = dateTimeSplit[0];
    let time = dateTimeSplit[1];
    this.timeOutEvents.push(
        {type: "TimeOut", hour: parseInt(time, 10), date: dateOut}
    )
    return this;
}

let hoursWorkedOnDate = function(dateInput) {
    let clockIn = this.timeInEvents.find(e => e.date == dateInput);
    let clockOut = this.timeOutEvents.find(e => e.date == dateInput);
    let timeIn = clockIn.hour;
    let timeOut = clockOut.hour;
    let hours = (timeOut - timeIn) / 100;
    return hours; 
}

let wagesEarnedOnDate = function(date) {
    let hours = hoursWorkedOnDate.call(this, date);
    let pay = parseInt(this.payPerHour);
    return (hours*pay);
}

function calculatePayroll(array) {
    let totals = array.reduce(function(total, element) {
        return allWagesFor.call(element) + total
    }, 0)
    return(totals);
}

function findEmployeeByFirstName(array, employeeFirstName) {
    return array.find(e => e.firstName == employeeFirstName) //createEmployeeRecord(array) firstName: array[0],
}


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