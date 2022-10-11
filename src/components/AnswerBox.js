import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default ({ correctlyGuessedLetters, wordFromAPI }) => (
  <Container>
    <Row className='justify-content-center'>
      {/* {wordFromAPI.map((letter, index) => { */}
      {wordFromAPI.map((letter, index) => {
        return (
          <Col
            key={index}
            xs='auto'
            className={`m-1 rounded text-center answer-box-letters ${
              correctlyGuessedLetters.find((x) => x === letter)
                ? 'bg-success'
                : 'bg-dark'
            }`}
            {...(wordFromAPI.length > 8 ? { xs: 'auto' } : { xs: '12' })}
          >
            {correctlyGuessedLetters.find((x) => x === letter) && letter}
          </Col>
        )
      })}
    </Row>
  </Container>
)
