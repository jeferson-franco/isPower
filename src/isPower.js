function solution(n) {
    if (n === 1) {
        return true;
    }
    for (let i = 2; i < n; i++) {
        let power = i;
        while (power < n) {
            power *= i;
        }
        if (power === n) {
            return true;
        }
    }
    return false;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test isPower

// alternative solution
