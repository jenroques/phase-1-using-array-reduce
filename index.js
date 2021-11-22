const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// [4, 5, 3, 4, 4, 6, 5].reduce(totalBatteries(batteryBatches, battery){}, 0)

const addTotal = (previousBattery, currentBattery) => previousBattery + currentBattery;
    let totalBatteries = batteryBatches.reduce(addTotal);
    console.log(totalBatteries)
