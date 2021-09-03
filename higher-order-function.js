let things = ['Building', 'car', 'bicycle', 'automobile', 'Tree', 'house']

// things.sort()

things.sort(function(a,b) {
  let x = a.toLowerCase(),
      y = b.toLowerCase()

  if (x < y) return -1 // x comes first
  if (x > y) return 1 // y comes first
  return 0 // equal
})