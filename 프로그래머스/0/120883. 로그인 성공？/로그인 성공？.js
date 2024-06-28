function solution(id_pw, db) {
    const userId = id_pw[0];
    const userPw = id_pw[1];
    
    const [res] = db.filter(([id, pw]) => id === userId);
    
    if (!res) return 'fail';
    if (res[1] === userPw) return 'login';
    if (res[1] !== userPw) return 'wrong pw';
}