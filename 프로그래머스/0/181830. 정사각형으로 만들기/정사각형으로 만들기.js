const solution = (arr) => {
    const numRows = arr.length;
    const numCols = arr[0].length;

    if (numRows > numCols) {
        // Add columns
        for (let i = 0; i < numRows; i++) {
            while (arr[i].length < numRows) {
                arr[i].push(0);
            }
        }
    } else if (numCols > numRows) {
        // Add rows
        while (arr.length < numCols) {
            arr.push(new Array(numCols).fill(0));
        }
    }

    return arr;
};