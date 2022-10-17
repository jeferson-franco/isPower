const solution = require('./isPower.js');

test('test 1', () => {
    expect(solution(125)).toBe(true);
});

test('test 2', () => {
    expect(solution(72)).toBe(false);
});

test('test 3', () => {
    expect(solution(100)).toBe(true);
});

test('test 4', () => {
    expect(solution(11)).toBe(false);
});

test('test 5', () => {
    expect(solution(324)).toBe(true);
});

test('test 6', () => {
    expect(solution(256)).toBe(true);
});

test('test 7', () => {
    expect(solution(119)).toBe(false);
});

test('test 8', () => {
    expect(solution(400)).toBe(true);
});

test('test 9', () => {
    expect(solution(350)).toBe(false);
});

test('test 10', () => {
    expect(solution(361)).toBe(true);
});

test('test 11', () => {
    expect(solution(122)).toBe(false);
});

test('test 12', () => {
    expect(solution(290)).toBe(false);
});

test('test 13', () => {
    expect(solution(1)).toBe(true);
});

test('test 14', () => {
    expect(solution(2)).toBe(false);
});

test('test 15', () => {
    expect(solution(343)).toBe(true);
});

test('test 16', () => {
    expect(solution(144)).toBe(true);
});

test('test 17', () => {
    expect(solution(289)).toBe(true);
});

test('test 18', () => {
    expect(solution(225)).toBe(true);
});

test('test 19', () => {
    expect(solution(35)).toBe(false);
});

test('test 20', () => {
    expect(solution(3)).toBe(false);
});
