let result;

function fibonacci(n) {
	if (n == 1 || n == 0) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}
// f(5) = f(4) + f(3) = 5

// f(4) = f(3) + f(2) = 3
// f(3) = f(2) + f(1) = 2

// f(2) = f(1) + f(0) = 1
// f(1) = 1

// f(0) = 0

result = fibonacci(5);
console.log(result);
