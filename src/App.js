import React, { useState, useRef } from 'react'
import Result from './components/Result'
import { Container, Navbar } from 'react-bootstrap'
import { clearAwards, emojis, isALetter } from './utils'
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
    title: '',
    buttonLabel: "Spell A 'Moji",
  })
  const [failedLetters, setFailedLetters] = useState([])
  const [correctlyGuessedLetters, setCorrectlyGuessedLetters] = useState([])
  const [word, setWord] = useState('')
  const [emojiUnicode, setEmojiUnicode] = useState('')
  const inputRef = useRef(null)
  const [hint, setHint] = useState('')
  const [isEasy, setIsEasy] = useState(true)

  const handleKeyPress = (event) => {
    event.preventDefault()
    let letterPressed = isALetter(event.key) && event.key
    if (letterPressed) {
      letterPressed = letterPressed.toLowerCase()
      setKeyPressed(letterPressed)
      setAllKeysPressed([...new Set([...allKeysPressed, letterPressed])])
      if (wordFromAPI.length > 0 && isALetter(keyPressed)) {
        if (
          !failedLetters.find((x) => x === letterPressed) &&
          !correctlyGuessedLetters.find((x) => x === letterPressed)
        ) {
          let count = 0
          for (let i = 0; i < wordFromAPI.length; i++) {
            if (letterPressed === wordFromAPI[i]) {
              count++
              const newCorrectlyGuessedLetters = correctlyGuessedLetters.concat(
                [letterPressed]
              )
              setCorrectlyGuessedLetters(newCorrectlyGuessedLetters)
              checkIfWin(newCorrectlyGuessedLetters)
              return
            }
          }

          setFailedLetters([...failedLetters, letterPressed])
          setResultBox({
            disabled: true,
            title: `${9 - failedLetters.length} ${
              9 - failedLetters.length > 1 ? 'tries' : 'more try'
            } left`,
          })

          if (count === 0) {
            if ([...new Set(failedLetters)].length >= 4) {
              setHint(
                `hint: word includes ${
                  wordFromAPI.filter(
                    (e) => correctlyGuessedLetters.indexOf(e) === -1
                  )[0]
                }`
              )
            }
            if ([...new Set(failedLetters)].length >= 9) {
              setResultBox({
                disabled: false,
                title: `Game Over. The word was '${word}'. Practice makes perfect!`,
                buttonLabel: "Spell Another 'Moji",
              })
              setIsGameOver(true)
            }
          }
        }
      }
    }
  }

  const startGame = () => {
    setResultBox({
      disabled: true,
      title: `10 tries left`,
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
    let wordArr = word.toLowerCase().split('')
    wordArr.map((item) => {
      item === '-' && wordArr.splice(wordArr.indexOf('-'), 1)
      item === ' ' && wordArr.splice(wordArr.indexOf(' '), 1)
      return item
    })
    setWordFromAPI(wordArr)
    setWord(word)
    setEmojiUnicode(unicode)
  }

  const getDataFromAPI = async () => {
    // if using 3rd party api
    try {
      if (isEasy) {
        const eList = emojis.filter(
          ({ name, difficulty }) => name.length < 6 && difficulty !== 'hard'
        )
        return wordSetter(eList[Math.floor(Math.random() * eList.length)])
      } else {
        const hList = emojis.filter(({ name }) => name.length > 5)
        return wordSetter(hList[Math.floor(Math.random() * hList.length)])
      }
      // }
    } catch (error) {
      console.log(error)
    }
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

  const clickEasyHard = (e) => {
    setIsEasy(!isEasy)
  }

  const incorrectLetters = [...new Set(allKeysPressed)]
    .filter((e) => e && !word.includes(e))
    .map((e) => e.toLowerCase())

  // disable line below when development mode
  // overwritng error for react input (type a letter) controlled element
  // being used 'uncontrolled' manner
  // error bypassed with code
  console.log = console.warn = console.error = () => {}

  return (
    <>
      <Navbar fixed='top' className='navbar'>
        <input
          className='tgl tgl-flip'
          id='cb5'
          type='checkbox'
          onClick={(e) => clickEasyHard(e)}
        />
        <label
          className='tgl-btn'
          data-tg-on='&nbsp;Hard'
          data-tg-off='&nbsp;Easy'
          htmlFor='cb5'
        ></label>
      </Navbar>
      <Container style={{ margin: '0 auto' }}>
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
          <h2 className={`result-title text-center ${isGameOver && 'fail'}`}>
            {resultBox.title}
          </h2>
        ) : (
          <h1 className={`result-title text-center ${isGameOver && 'success'}`}>
            {resultBox.title}
          </h1>
        )}
        <Footer clearAwards={clearAwards}></Footer>
      </Container>
    </>
  )
}
