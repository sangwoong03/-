/*
* 배열의 길이가 다를 때 
    - arr1이 크면 1
    - arr2가 크면 -1
* 배열의 길이가 같을 때
    - 원소의 합
        arr1이 크면 1
        arr2가 크면 -1
    - 같으면 0
*/
function solution(arr1, arr2) {
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    const arr1Sum = arr1.reduce((acc, cur) => acc + cur)
    const arr2Sum = arr2.reduce((acc, cur) => acc + cur)
    
    if (arr1Length === arr2Length) {
        if (arr1Sum > arr2Sum ) return 1;
        if (arr1Sum < arr2Sum ) return -1;
        return 0
    } else {
        if (arr1Length > arr2Length ) return 1;
        if (arr1Length < arr2Length ) return -1;
    }
}