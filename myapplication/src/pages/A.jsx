import React from 'react'
import B from './B'

function A({fruit}) {
    console.log(fruit);
  return (
    <>
    <div>my name is A</div>
    <B oneapple={fruit} />
    </>
  )
}

export default A