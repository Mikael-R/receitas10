const pagination = (
  array: any[],
  pageNumber: number,
  pageSize: number
): [string, any[]] => {
  const count = (array.length / pageSize + 1).toFixed(0)
  const sliced = array.slice(
    (pageNumber - 1) * pageSize,
    (pageNumber - 1) * pageSize + pageSize
  )

  return [count, sliced]
}

export default pagination
