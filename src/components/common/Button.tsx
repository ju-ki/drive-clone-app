import { Button } from '@/Interface'
import React from 'react'



export default function Button({btnClass, title, onClick}: Button) {
  return (
    <div>
      <button onClick={onClick} className={`btn ${btnClass}`}>{title}</button>
    </div>
  )
}
