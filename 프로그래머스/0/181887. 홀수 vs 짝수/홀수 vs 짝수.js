function solution(num_list) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) even += num_list[i]
        if (i % 2 !== 0) odd += num_list[i]
    }
    
    if (odd > even) return odd;
    if (odd < even) return even;
    
    return odd;
}