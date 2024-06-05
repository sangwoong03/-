function solution(order) {
    let price = 0;
    for (const menu of order) {
        if (menu.includes('americano') || menu === 'anything') price += 4500;
        else price += 5000;
    }
    return price;
}