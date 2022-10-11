import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default ({ buttonAction, disabled, buttonLabel }) => (
  <Card
    bg='transparent'
    disabled={disabled}
    id='main-btn-card'
    className='center'
  >
    <Button
      onClick={buttonAction}
      id='main-btn'
      variant={buttonLabel === 'Try again' ? 'success' : 'dark'}
      bg={buttonLabel === 'Try again' ? 'success' : 'primary'}
    >
      {buttonLabel || "Different 'Moji"}
    </Button>
  </Card>
)
