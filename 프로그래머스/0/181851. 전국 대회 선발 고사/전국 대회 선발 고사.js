const solution = (rank, attendance) => {
  const obj = {}
  for (let i = 0; i < attendance.length; i++ ) {
    if (attendance[i])
      obj[rank[i]] = i
  }

  const [a, b, c] = Object.entries(obj).slice(0,3)
  
  return 10000 * +a[1] + 100 * +b[1] + c[1]
}