const solution = (arr, delete_list) => {
    return arr.filter(elem => !delete_list.includes(elem))

}