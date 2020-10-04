/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const createEmployeeRecord = function(srcArray){
  return {
    firstName: srcArray[0],
    familyName: srcArray[1],
    title: srcArray[2],
    payPerHour: srcArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
};


const createEmployeeRecords = function(arrOfArrays){
    return arrOfArrays.map( arr => createEmployeeRecord(arr))
};


const createTimeInEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(" ")
  this.timeInEvents.push({
    type: "TimeIn",
    date,
    hour: parseInt(hour),
  })

  return this
};


const createTimeOutEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(" ")
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date,
  })

  return this
};


const hoursWorkedOnDate = function(dateSought){
  const dateIn = this.timeInEvents.find(event => event.date === dateSought );
  const dateOut = this.timeOutEvents.find(event => event.date === dateSought );

  return (dateOut.hour - dateIn.hour) / 100;
};


const wagesEarnedOnDate = function(dateStamp){
  const wagesEarned = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour

  return parseFloat(wagesEarned)
};


let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date
  })

  let payable = eligibleDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
};


const findEmployeeByFirstName = function(srcArray, firstName){
  return srcArray.find(record => record.firstName === firstName)
}


const calculatePayroll = function(employeeRecords){
  return employeeRecords.reduce( (memo, employee) => {
    return memo + allWagesFor.call(employee)
  }, 0)
}