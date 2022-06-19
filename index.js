// Your code here


const createEmployeeRecords = function(employeeRowData){
    return employeeRowData.map(function(row) {
        return createEmployeeRecord(row)
    })
}

const createEmployeeRecord = function(employee) {
    return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
    }
}


const createTimeInEvent = function(employee, dateRecord){
    let [date, hour] = dateRecord.split(' ')

    employee.timeInEvents.push({type: "TimeIn",hour: parseInt(hour, 10),date,
    })

    return employee
}

const createTimeOutEvent = function(employee, dateRecord){
    let [date, hour] = dateRecord.split(' ')

    employee.timeOutEvents.push({type: "TimeOut",hour: parseInt(hour, 10),date,
    })

    return employee
}
const hoursWorkedOnDate = function(employee, date){
    const inEvent = employee.timeInEvents.find(function(){
        return date === date
    })
    const outEvent = employee.timeOutEvents.find(function(){
        return date === date
    })


    return (outEvent.hour - inEvent.hour) / 100

} 

const wagesEarnedOnDate = function(employee, date){
    let wage = hoursWorkedOnDate(employee, date)
    return wage * employee.payPerHour
}

 const allWagesFor = function employee(TimeIn, TimeOut){
    return (hoursWorkedOnDate, payPerHour);
 }

  //array of multiple employees
  //calculatePayroll