/*
* 1. A와 B의 길이가 다르면 -1 반환
* 2. A길이만큼 순회하면서 1칸씩 밀고 그 값을 B와 비교함.
* 3. 모든 조건 충족 못하는 경우 -1 반환
*/

const solution = (A, B) => {
    const lenA = A.length;
    const lenB = B.length;
    
    if (lenA !== lenB) return -1;
    
    for (let i = 0; i < lenA; i++) {
        if (A === B) return i;
        A = A[lenA - 1] + A.slice(0, lenB - 1)
    }

    return -1;
}
