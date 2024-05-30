function solution(arr) {
    function transform(elem) {
        if (elem >= 50 && elem % 2 === 0) {
            return Math.floor(elem / 2);
        } else if (elem < 50 && elem % 2 === 1) {
            return elem * 2 + 1;
        }
        return elem;
    }

    let x = 0;
    while (true) {
        let newArr = arr.map(elem => transform(elem));
        if (JSON.stringify(newArr) === JSON.stringify(arr)) {
            return x;
        }
        arr = newArr;
        x += 1;
    }
}