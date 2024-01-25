import React from 'react'
import style from './SidebarItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

const SidebarItem = ({ ...props }) => {
  return (
    <div className={style.wrapper} onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} className={style.icon} />
      <span>{props.text}</span>
    </div>
  )
}

export default SidebarItem