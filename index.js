/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function() {
    let eligibleDates = this.timeInEvents.map(function(e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



function createEmployeeRecord(EmployeeInof) {
    //const timeOutEvents = [];
    // const timeInEvents = [];

    const employee = {
        firstName: EmployeeInof[0],
        familyName: EmployeeInof[1],
        title: EmployeeInof[2],
        payPerHour: EmployeeInof[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employee


}


function createEmployeeRecords(arrayOfArrays) {

    return arrayOfArrays.map(element => {
        return createEmployeeRecord(element)

    })

}


function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    let obj = {
        type: "TimeIn",
        date,
        hour: parseInt(hour)
    }

    this.timeInEvents.push(obj)
    return this

}


function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")


    let obj = {
        type: "TimeOut",
        date,
        hour: parseInt(hour)

    }

    this.timeOutEvents.push(obj)

    return this

}

function hoursWorkedOnDate(date) {
    let inObj = this.timeInEvents.find(el => el.date === date)
    let outObj = this.timeOutEvents.find(el => el.date === date)
    let hoursWorked = (outObj.hour - inObj.hour) / 100
    return hoursWorked
}


function wagesEarnedOnDate(date) {

    const workedHours = hoursWorkedOnDate.call(this, date)
    const PayOwed = workedHours * this.payPerHour
    return PayOwed

}


function calculatePayroll(employee) {



    return employee.reduce((accum, current) => accum + allWagesFor.apply(current), 0)


}

function findEmployeeByFirstName(srcArray, firstName) {

    return srcArray.find(el => el.firstName === firstName)


}