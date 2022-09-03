/* Your Code Here */
function createEmployeeRecord(employeeArray) {
	const records = {
		firstName: employeeArray[0],
		familyName: employeeArray[1],
		title: employeeArray[2],
		payPerHour: employeeArray[3],
		timeInEvents: [],
		timeOutEvents: [],
	};
	return records;
}
function createEmployeeRecords(employeeArray) {
	const records = employeeArray.map((data) => createEmployeeRecord(data));
	return records;
}
function createTimeInEvent(dateStamp) {
	let [date, hour] = dateStamp.split(" ");
	this.timeInEvents.push({
		type: "TimeIn",
		hour: parseInt(hour, 10),
		date,
	});
	return this;
}
function createTimeOutEvent(dateStamp) {
	let [date, hour] = dateStamp.split(" ");
	this.timeOutEvents.push({
		type: "TimeOut",
		hour: parseInt(hour, 10),
		date,
	});
	return this;
}
function hoursWorkedOnDate(specificDate) {
	let timeInEvent = this.timeInEvents.find(
		(event) => event.date === specificDate
	);
	let timeOutEvent = this.timeOutEvents.find(
		(event) => event.date === specificDate
	);
	let totalTimeWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
	return parseInt(totalTimeWorked);
}
function wagesEarnedOnDate(specificDate) {
	return parseInt(
		hoursWorkedOnDate.call(this, specificDate) * this.payPerHour.toString()
	);
}
function findEmployeeByFirstName(srcArray, firstName) {
	return srcArray.find((findFirst) => findFirst.firstName === firstName);
}
function calculatePayroll(employeeRecord) {
	let empRecords = employeeRecord.reduce((allInfo, datesRecords) => {
		return allInfo + allWagesFor.call(datesRecords);
	}, 0);
	return parseInt(empRecords);
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
	const eligibleDates = this.timeInEvents.map(function (e) {
		return e.date;
	});

	const payable = eligibleDates.reduce(
		function (memo, d) {
			return memo + wagesEarnedOnDate.call(this, d);
		}.bind(this),
		0
	); // <== Hm, why did we need to add bind() there? We'll discuss soon!

	return payable;
};