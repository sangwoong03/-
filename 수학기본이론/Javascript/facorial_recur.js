let result;

function factorial(n) {
	if (n === 1) {
		return 1;
	}
	return factorial(n - 1) * n;
}

result = factorial(5);
console.log(result);
