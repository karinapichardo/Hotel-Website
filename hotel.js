function customerInfo(firstName, lastName, desiredRoom) {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var desiredRoom = document.getElementById('rooms').value;
    var numberOfDays = document.getElementById('days').value;
    var taxRate = 0.08;

    var standardRoom = 125.25 * numberOfDays;
    var deluxeRoom = 175.50 * numberOfDays;
    var suiteRoom = 225.75 * numberOfDays;

    if (desiredRoom === 'standard') {
        var taxAmount = standardRoom * taxRate;
        var totalCharge = standardRoom + taxAmount;

        document.getElementById("result").innerHTML = `Hello ${firstName} ${lastName}, you've chosen to stay at ParkSide Hotel for ${numberOfDays} days in our ${desiredRoom} room, therefore your total charges amount to $ ${totalCharge}`;
        event.preventDefault();
    } else if (desiredRoom === 'deluxe') {
        var taxAmount = deluxeRoom * taxRate;
        var totalCharge = deluxeRoom + taxAmount;

        document.getElementById("result").innerHTML = `Hello ${firstName} ${lastName}, you've chosen to stay at ParkSide Hotel for ${numberOfDays} days in our ${desiredRoom} room, therefore your total charges amount to $ ${totalCharge}`;
        event.preventDefault();
    } else if (desiredRoom === 'suite') {
        var taxAmount = suiteRoom * taxRate;
        var totalCharge = suiteRoom + taxAmount;

        document.getElementById("result").innerHTML = `Hello ${firstName} ${lastName}, you've chosen to stay at ParkSide Hotel for ${numberOfDays} days in our ${desiredRoom} room, therefore your total charges amount to $ ${totalCharge}`;
        event.preventDefault();
    }
}
