/* 
문자열 다루기?
다음과 같은 데이터를
['Mon/1900', 'Mon/2100', 'Tue/1900', 'Tue/2100']
아래와 같이 형태를 바꿔주세요
[{ day: '월,화', time: '7 PM, 9 PM' }]
*/
function seperateDays(arr) {
	let day = [];
	for (let i = 0; i < arr.length; i++) {
		const days = arr[i].split("/")[0];
		switch (days) {
			case "Mon":
				day[i] = "월";
				break;
			case "Tue":
				day[i] = "화";
				break;
			case "Wed":
				day[i] = "수";
				break;
			case "Thu":
				day[i] = "목";
				break;
			case "Fri":
				day[i] = "금";
				break;
			case "Sat":
				day[i] = "토";
				break;
			case "Sun":
				day[i] = "일";
				break;
			default:
				day[i] = null;
		}
	}
	return day;
}

function seperateYears(arr) {
	let year = [];
	for (let i = 0; i < arr.length; i++) {
		const years = parseInt(arr[i].split("/")[1]) * 0.01;
		if (years > 12) {
			year[i] = `${years - 12}PM`;
		} else {
			year[i] = `${years}AM`;
		}
	}
	return year;
}

function answer(arr) {
	return [
		{
			day: seperateDays(arr)
				.filter((item, index) => seperateDays(arr).indexOf(item) === index)
				.join(", "),
			time: seperateYears(arr)
				.filter((item, index) => seperateYears(arr).indexOf(item) === index)
				.join(", "),
		},
	];
}
let input = [
	"Mon/1900",
	"Mon/2100",
	"Tue/1900",
	"Tue/2100",
	"Fri/1500",
	"Sat/0900",
];

console.log(answer(input));
