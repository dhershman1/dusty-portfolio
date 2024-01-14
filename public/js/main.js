const typeText = document.getElementById('typeText')
const textToType = 'Full Stack Software Engineer'
const allowedHashes = new Set(['about', 'portfolio', 'skills'])
const sections = {
  about: document.getElementById('about'),
  portfolio: document.getElementById('portfolio'),
  skills: document.getElementById('skills')
}
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

function getHash (url) {
  const [, hash] = url.split('#')

  return hash
}

/**
 * A function that shows and hides content based on the current hash string
 * @param {String} hash A hash string we want to show the content of
 */
function showContent (hash) {
  let useHash = hash

  if (!allowedHashes.has(hash)) {
    useHash = 'about'
  }

  sections[useHash].classList.remove('hide')

  Object.keys(sections).forEach(k => {
    if (k !== useHash) {
      sections[k].classList.add('hide')
    }
  })

}

window.onload = () => {
  typeAnimation()
  addEventListener('hashchange', event => {
    showContent(getHash(event.newURL))
  })

  if (!window.location.hash) {
    window.location.hash = 'about'
  }

  showContent(window.location.hash.substring(1))
}
