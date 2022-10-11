import React from 'react'

export default ({ emojiUnicode: unicode }) =>
  unicode && (
    <h1 className='text-center'>
      {String.fromCodePoint(parseInt(unicode.slice(2), 16))}
    </h1>
  )
