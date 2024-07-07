/* 
* 1. n과의 거리값을 절대값으로 구한다.
* 2. 거리가 작은 (가까운) 순서대로 정렬한다.
* 3. 거리가 같은 경우 큰수로 정렬한다.
*/

const solution = (numList, n) => {
    return numList.sort((a, b) => {
        const distanceA = Math.abs(a - n);
        const distanceB = Math.abs(b - n);
        
        if (distanceB === distanceA) return b - a;
        
        return distanceA - distanceB;
    });
}