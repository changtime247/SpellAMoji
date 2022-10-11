import React, { useState, useRef } from 'react'
import Result from './components/Result'
import emojis from './data/data'
import { Container } from 'react-bootstrap'
import { clearAwards, isALetter } from './utils'
import Footer from './components/Footer'
import MainCard from './components/MainCard'

export default () => {
  const [keyPressed, setKeyPressed] = useState('')
  const [allKeysPressed, setAllKeysPressed] = useState([])
  const [wordFromAPI, setWordFromAPI] = useState([])
  const [isGameOn, setIsGameOn] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [resultBox, setResultBox] = useState({
    disabled: false,
    title: 'Press start to play',
    buttonLabel: "Spell A 'Moji",
  })
  const [failedLetters, setFailedLetters] = useState([])
  const [correctlyGuessedLetters, setCorrectlyGuessedLetters] = useState([])
  const [word, setWord] = useState('')
  const [emojiUnicode, setEmojiUnicode] = useState('')
  const inputRef = useRef(null)
  const [hint, setHint] = useState('')

  const handleKeyPress = (event) => {
    event.preventDefault()
    let letterPressed = isALetter(event.key) && event.key
    setKeyPressed(letterPressed)
    setAllKeysPressed([...allKeysPressed, letterPressed])
    if (wordFromAPI.length > 0 && isALetter(letterPressed)) {
      letterPressed = letterPressed.toUpperCase()
      if (
        !failedLetters.find((x) => x === letterPressed) &&
        !correctlyGuessedLetters.find((x) => x === letterPressed)
      ) {
        let count = 0
        for (let i = 0; i < wordFromAPI.length; i++) {
          if (letterPressed === wordFromAPI[i]) {
            count++
            const newCorrectlyGuessedLetters = correctlyGuessedLetters.concat([
              letterPressed,
            ])
            setCorrectlyGuessedLetters(newCorrectlyGuessedLetters)
            checkIfWin(newCorrectlyGuessedLetters)
            return
          }
        }
        if (count === 0) {
          if (failedLetters.length === 5) {
            setHint(
              `hint: word includes ${
                wordFromAPI.filter(
                  (e) => correctlyGuessedLetters.indexOf(e) === -1
                )[0]
              }`
            )
          }
          if (failedLetters.length === 10) {
            setResultBox({
              disabled: false,
              title: `Game Over. The word was '${word}'. Practice makes perfect :)`,
              buttonLabel: "Spell Another 'Moji",
            })
            setIsGameOver(true)
          }
          setFailedLetters(failedLetters.concat([keyPressed]))
        }
      }
    }
  }

  const startGame = () => {
    setResultBox({
      disabled: true,
      title: `10 tries to guess the letters. If a letter comes up more than one time, all of that same letter show up.`,
    })
    setFailedLetters([])
    setCorrectlyGuessedLetters([])
    setKeyPressed('')
    setAllKeysPressed([])
    setWordFromAPI([])
    setEmojiUnicode('')
    setWord('')
    setHint('')
    getDataFromAPI()
    setIsGameOver(false)
    inputRef.current.focus()
  }

  const continueGame = () => {
    setResultBox({
      disabled: true,
    })
    inputRef.current.focus()
  }

  const wordSetter = ({ name: word, unicode }) => {
    let wordArr = word.toUpperCase().split('')
    wordArr.map((item) => {
      item === '-' && wordArr.splice(wordArr.indexOf('-'), 1)
      item === ' ' && wordArr.splice(wordArr.indexOf(' '), 1)
      return item
    })
    setWordFromAPI(wordArr)
    setWord(word)
    setEmojiUnicode(unicode)
  }

  const getDataFromAPI = () => {
    // if using 3rd party api
    // const params = {}
    // let url = new URL('')
    fetch('', {
      method: 'GET',
    })
      .then((response) => {
        const responseStatus = response.status
        if (responseStatus >= 400 && responseStatus <= 500) {
          throw Error('API error, creating random word localy!')
        }
        return response.json()
      })
      // current app will use local data since data not too extensive
      .then((response) => {
        wordSetter(response.word)
        return response.status
      })
      .catch((error) => {
        console.log(error)
        const randomFruit = emojis[Math.floor(Math.random() * emojis.length)]
        wordSetter(randomFruit)
      })
  }

  const checkIfWin = (correctlyGuessedLetters) => {
    let uniqueLetters = [...new Set(wordFromAPI)]
    let award = emojiUnicode.slice()
    if (correctlyGuessedLetters.length === uniqueLetters.length) {
      setResultBox({
        disabled: false,
        title: "✨ You're correct! ✨",
        buttonLabel: 'Spell Another One',
      })
      if (emojiUnicode) {
        localStorage.setItem(
          'awards',
          localStorage.getItem('awards')
            ? localStorage.getItem('awards').split`,`.filter(
                (a) => a !== emojiUnicode
              ).join`,` +
                ',' +
                award
            : award
        )
      }
      setIsGameOver(true)
    }
  }

  const incorrectLetters = [...new Set(allKeysPressed)].filter(
    (e) => !word.includes(e)
  )

  return (
    <Container>
      {inputRef && (
        <MainCard
          emojiUnicode={emojiUnicode}
          hint={hint}
          incorrectLetters={incorrectLetters}
          keyPressed={keyPressed}
          wordFromAPI={wordFromAPI}
          failedLetters={failedLetters}
          allKeysPressed={allKeysPressed}
          inputRef={inputRef}
          resultBox={resultBox}
          isGameOver={isGameOver}
          handleKeyPress={handleKeyPress}
          correctlyGuessedLetters={correctlyGuessedLetters}
          word={word}
          setIsGameOn={setIsGameOn}
        ></MainCard>
      )}
      <Result
        disabled={resultBox.disabled}
        buttonLabel={resultBox.buttonLabel}
        buttonAction={isGameOn ? continueGame : startGame}
      />
      {resultBox?.title && resultBox.title.length > 20 ? (
        <h4 className='result-title text-center'>{resultBox.title}</h4>
      ) : (
        <h1 className='result-title text-center'>{resultBox.title}</h1>
      )}
      <Footer clearAwards={clearAwards}></Footer>
    </Container>
  )
}
