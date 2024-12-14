import React from 'react'
import C from './C'

function B({oneapple}) {
    console.log('my apple',oneapple);
  return (
    <>
    {/* <div>B</div> */}
    <C fruit={oneapple} />
    </>
  )
}

export default B