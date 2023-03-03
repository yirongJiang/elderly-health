import React from 'react'
import './index.less'
export default function Header(props) {
  const { change } = props
  return (
    <div className='header'>
      {
        change === 1 ? <div className='addTitle'>新增评估病例</div> :
         <div className='title'>老年认知障碍评估测试</div>
      }

    </div>
  )
}
