function minDays(bloomDay: number[], m: number, k: number): number {
    if (m * k > bloomDay.length) {
        return -1;
    }

    let maxNumber = Math.max(...bloomDay)
    let minNumber = Math.min(...bloomDay)

    while (minNumber < maxNumber) {
        const middle = Math.floor((maxNumber - minNumber) / 2 + minNumber);
        if (canMake(bloomDay, m, k, middle)) {
            maxNumber = middle;
        } else {
            minNumber = middle + 1;
        }
    }

    return minNumber;
}

function canMake(bloomDay: number[], m: number, k: number, days: number): boolean {

    let bouquets = 0
    let flower = 0

    bloomDay.forEach(bloom => {
        if (bloom <= days) {
            flower++;
            if (flower == k) {
                flower = 0;
                bouquets++;
            }
        } else {
            flower = 0;
        }
    })

    return bouquets >= m;
}

console.log(minDays([62, 75, 98, 63, 47, 65, 51, 87, 22, 27, 73, 92, 76, 44, 13, 90, 100, 85], 2, 7));
