import React from 'react'
import { Button } from 'antd'


export default function ToTopBtn() {

  const handleScroll = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }

  return (
    <Button style={{
      padding: '3rem',
      position: 'fixed',
      height: ' 5vh !important',
      fontSize: '3rem',
      margin: 0,
      top: '50vh',
      right: '1vw',
      Height: '50px',
      zIndex: 3,
      transition: 'all 1s'
    }} type='primary' ghost onClick={handleScroll}>回到顶部</Button>
  )
}
