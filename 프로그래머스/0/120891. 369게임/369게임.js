const solution = (order) => {
    const nums = ['3', '6', '9'];
    return [...order.toString()].filter(num => nums.includes(num)).length;
}