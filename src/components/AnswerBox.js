import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default ({ correctlyGuessedLetters, wordFromAPI }) => (
  <Row className='justify-content-center' id='answer-box-row' fluid='true'>
    {/* {wordFromAPI.map((letter, index) => { */}
    {wordFromAPI.map((letter, index) => {
      return (
        <Col
          key={index}
          className={`m-1 rounded text-center answer-box-letters ${
            correctlyGuessedLetters.find((x) => x === letter)
              ? 'bg-success'
              : 'bg-danger'
          }`}
          {...(wordFromAPI.length > 4 ? { xs: '1' } : { xs: 'auto' })}
        >
          {correctlyGuessedLetters.find((x) => x === letter) && letter}
        </Col>
      )
    })}
  </Row>
)
