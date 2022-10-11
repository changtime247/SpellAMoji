import emojis from './data/data'

const isALetter = (char) => {
  return 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'.includes(char)
}

const clearAwards = () => {
  localStorage.clear()
  window.location.reload()
}

export { isALetter, clearAwards, emojis }
