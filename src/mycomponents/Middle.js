import React from 'react'
import userImage from '../image/user.jpeg'

export default function Middle() {
  return (
    <div>
      <h2> I am Middle Component</h2>
      <img src={userImage} alt='userimage'></img>
    </div>
  )
}
