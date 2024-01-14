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
function toggleContent (hash) {
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

function loadSkills () {
  const skills = [
    {
      name: "HTML",
      img: "html.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      level: "professional"
    },
    {
      name: 'JavaScript',
      img: 'js.jpg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      level: 'expert'
    },
    {
      name: "CSS",
      img: "css.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      level: "intermediate"
    }
  ]
  const card = document.createElement('div')
  card.classList.add('card')

  skills.forEach(skill => {
    const cardActions = document.createElement('div')
    cardActions.classList.add('card__actions')
    const link = document.createElement('a')
    link.setAttribute('href', skill.link)
    link.setAttribute('target', '_blank')
    const icon = document.createElement('i')
    icon.classList.add('material-icons')
    icon.appendChild(document.createTextNode('launch'))
    link.appendChild(icon)
    cardActions.appendChild(link)

  })
}

window.onload = () => {
  typeAnimation()
  addEventListener('hashchange', event => {
    toggleContent(getHash(event.newURL))
  })

  if (!window.location.hash) {
    window.location.hash = 'about'
  }

  toggleContent(window.location.hash.substring(1))
}
