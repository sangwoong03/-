function solution(myString, pat) {
    const lastIdx = myString.lastIndexOf(pat);
    return myString.slice(0, pat.length + lastIdx);
}