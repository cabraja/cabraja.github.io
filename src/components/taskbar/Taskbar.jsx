import React from 'react'
import TaskbarStart from './TaskbarStart'
import Search from './Search'
import TaskbarEnd from './TaskbarEnd'
import TaskbarMiddle from './TaskbarMiddle'
import useDesktopTheme from '../../hooks/useDesktopTheme'

function Taskbar() {

  const desktopTheme = useDesktopTheme()

  return (
    <div className='
    w-full
    text-white
    fixed
    bottom-0
    left-0
    flex
    flex-row
    flex-wrap
    md:flex-nowrap
    items-stretch
    '
    style={{backgroundColor: desktopTheme.currentTheme.color}}>
        <TaskbarStart />

        <Search />

        <TaskbarMiddle />

        <TaskbarEnd />
    </div>
  )
}

export default Taskbar