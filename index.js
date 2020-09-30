// Your code here
function createEmployeeRecord(arr){
  return {firstName:arr[0], familyName: arr[1], title:arr[2], payPerHour:arr[3], timeInEvents:[], timeOutEvents: []};
}

function createEmployeeRecords(arr){
  let result = [];
  for(let i =0; i < arr.length; i++){
    result.push(createEmployeeRecord(arr[i]))
  }
  return result;
}

function createTimeInEvent(time){
  this.timeInEvents.push({type:"TimeIn", date: time.split(" ")[0], hour: parseInt(time.split(" ")[1])});
  return this;
}

function createTimeOutEvent(time){
  this.timeOutEvents.push({type:"TimeOut", date: time.split(" ")[0], hour: parseInt(time.split(" ")[1])});
  return this;
}

function hoursWorkedOnDate(date){
  let hourstimein = parseInt(this.timeInEvents.find(element => element.date == date).hour)/100;
  let hourstimeout = parseInt(this.timeOutEvents.find(element => element.date == date).hour)/100;
  let hours = hourstimeout - hourstimein;
  return hours;
}

function wagesEarnedOnDate(date){
  return this.payPerHour * hoursWorkedOnDate.call(this,date);
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

function calculatePayroll(arr){
  let total = 0;
  for(let i =0; i < arr.length; i++){
    total += allWagesFor.call(arr[i])
  }
  return total;
}

function findEmployeeByFirstName(arr,name){
  return arr.find(element=> element.firstName == name);
}
