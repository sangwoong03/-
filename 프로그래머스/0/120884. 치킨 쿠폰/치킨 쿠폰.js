const solution = (chicken) => {
    let result = 0;
    let coupons = chicken;

    while (coupons >= 10) {
        let service = Math.floor(coupons / 10);
        
        result += service;
        coupons = coupons % 10 + service;
    }

    return result;
}