const typeText = document.getElementById('typeText')
const textToType = 'Full Stack Software Engineer'
let isAdding = true
let idx = 1

function typeAnimation () {
  setTimeout(function () {
    // set the text of typeText to a substring of
    // the textToType using idx.
    typeText.textContent = textToType.slice(0, idx)
    if (isAdding) {
      // adding text
      if (idx > textToType.length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
          typeAnimation()
        }, 2000)
        return
      } else {
        // increment idx by 1
        idx++
      }
    }
    // call itself
    typeAnimation()
  }, 120)
}

typeAnimation()
