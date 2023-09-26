function between(a, b) {
  
  let arr = []

  for (let i = a; i <= b; i++) {
    arr.push(i)
  }

  return arr

}

console.log(between(7,13))

// parameter: a, b      // two integers
// return: array of integers between and including the parameters
// e.g. between(7, 13)
// results in [7, 8, 9, 10, 11, 12, 13]

// create an empty array
// initialize a for loop with counter i starting at value a
// push i to the array
// end loop at b

// return the array