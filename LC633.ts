function judgeSquareSum(c: number): boolean {
    let left = 0;
    let right = Math.floor(Math.sqrt(c));
    while (left <= right) {
        const sum = left * left + right * right;
        if (sum === c) {
            return true;
        } else if (sum < c) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

console.log(judgeSquareSum(100));
