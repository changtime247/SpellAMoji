import emojis from './data/data'

const isALetter = (char) => {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char)
}

const clearAwards = () => {
  localStorage.clear()
  window.location.reload()
}

export { isALetter, clearAwards, emojis }
