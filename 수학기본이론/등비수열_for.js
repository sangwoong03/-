let result;

// s 시작값, t 등차(등비), number 반복횟수
function forloop(s, t, number) {
	let acc = 1;

	for (let i = 1; i <= number; i++) {
		if (i === 1) {
			acc *= s;
		} else {
			acc *= t;
		}
		console.log(i, acc);
	}
	return acc;
}

result = forloop(3, 2, 5);
console.log(result);
