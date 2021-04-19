const keypad = {
  '2': 'ABC',
  '3': 'DEF',
  '4': 'GHI',
  '5': 'JKL',
  '6': 'MNO',
  '7': 'PQRS',
  '8': 'TUV',
  '9': 'WXYZ'
}

const getPhoneWords = number => {
  let result = []

  for (const currentNumber of number) {
    const added_phonewords = []
    const letters = keypad[currentNumber]

    if (letters) {
      for (const letter of letters) {
        if (result.length) {
          for (let i = result.length - 1; i >= 0; i--) {
            added_phonewords.push(result[i] + letter)
          }
        } else {
          added_phonewords.push(letter)
        }
      }
    } else {
      added_phonewords.push(...result)
    }
    result = added_phonewords
  }

  return result
}

module.exports = getPhoneWords
