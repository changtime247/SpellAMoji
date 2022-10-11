import React from 'react'
import Emoji from './Emoji'
import { Row, Col, Button } from 'react-bootstrap'

const Award = ({ clearAwards }) => (
  <>
    <Row xs='auto' className='justify-content-xs-left'>
      {localStorage.getItem('awards') && (
        <Col>
          <h6>Spelling Awards:</h6>
        </Col>
      )}
      {localStorage.getItem('awards') &&
        localStorage.getItem('awards').split`,`
          .filter((e) => e !== '')
          .map((e, idx) => (
            <Col id='emojilist' key={idx}>
              <Emoji emojiUnicode={e}></Emoji>
            </Col>
          ))}
      <Button className='btn-sm' onClick={clearAwards} id='right-bottom-corner'>
        Clear awards
      </Button>
    </Row>
  </>
)
export default Award
