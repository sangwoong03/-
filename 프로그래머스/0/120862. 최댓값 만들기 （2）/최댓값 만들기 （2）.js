function solution(numbers) {
    numbers.sort((a, b) => b - a);

    // 가장 큰 양수 두 개를 곱한 경우
    const positiveResult = numbers[0] * numbers[1];

    // 가장 작은 음수 두 개를 곱해서 양수로 만든 후, 가장 큰 양수와 곱한 경우
    const negativeResult = numbers[numbers.length - 1] * numbers[numbers.length - 2];

    return Math.max(positiveResult, negativeResult);
}