import React from 'react'
import { Card, InputGroup, Form, Row, Col } from 'react-bootstrap'
import AnswerBox from './AnswerBox'
import Emoji from './Emoji'

const MainCard = ({
  emojiUnicode,
  hint,
  incorrectLetters,
  keyPressed,
  wordFromAPI,
  failedLetters,
  allKeysPressed,
  inputRef,
  resultBox,
  isGameOver,
  handleKeyPress,
  correctlyGuessedLetters,
  word,
  setIsGameOn,
}) => {
  return (
    <Card
      style={{ maxWidth: '75vw' }}
      id='main-card'
      className={!emojiUnicode && 'hidden'}
    >
      {emojiUnicode && (
        <Card.Title>
          <h1 className='text-center'>What is this emoji?</h1>
          <Emoji emojiUnicode={emojiUnicode} className='question'></Emoji>
          {hint && <h4 className='hint text-center'>{hint}</h4>}
        </Card.Title>
      )}
      {failedLetters.length !== 0 && (
        <Row>
          <Col xs={6} className='incorrect-letters text-center'>
            <h5>{incorrectLetters.length} incorrect letters: </h5>
          </Col>
          <Col xs={6} className='incorrect-letters'>
            <h6>{incorrectLetters.join`, `}</h6>
          </Col>
        </Row>
      )}
      <InputGroup id='input-group-custom' className={!emojiUnicode && 'none'}>
        <Form.Control
          className={
            keyPressed && word.includes(keyPressed)
              ? 'correct-input'
              : wordFromAPI.length === 0 || failedLetters.length === 0
              ? ''
              : 'incorrect-input'
          }
          value={
            allKeysPressed.slice(-1).toString().length === 1
              ? allKeysPressed.slice(-1)
              : ''
          }
          // onKeyUp={(this.value = (e) => e.key)}
          ref={inputRef}
          autoFocus={resultBox.disabled ? true : false}
          onFocus={() => {
            setIsGameOn(false)
          }}
          {...(!isGameOver && { onKeyDown: handleKeyPress })}
        />
        <InputGroup.Text id='basic-addon2'>
          &larr; click here and type a letter
        </InputGroup.Text>
      </InputGroup>

      <AnswerBox
        wordFromAPI={wordFromAPI}
        correctlyGuessedLetters={correctlyGuessedLetters}
        word={word}
      />
    </Card>
  )
}
export default MainCard
