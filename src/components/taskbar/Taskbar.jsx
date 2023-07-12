import React from 'react'
import TaskbarStart from './TaskbarStart'
import Search from './Search'
import TaskbarEnd from './TaskbarEnd'
import TaskbarMiddle from './TaskbarMiddle'

function Taskbar() {
  return (
    <div className='
    w-full
    bg-violet-950
    text-white
    fixed
    bottom-0
    left-0
    flex
    flex-row
    flex-wrap
    md:flex-nowrap
    items-stretch
    '>
        <TaskbarStart />

        <Search />

        <TaskbarMiddle />

        <TaskbarEnd />
    </div>
  )
}

export default Taskbar