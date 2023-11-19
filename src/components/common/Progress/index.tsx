import React from 'react'
import styles from "./Progress.module.scss"
import { Progress } from '@/Interface'

export default function ProgressComp({progress}: Progress) {
  return (
    <div className={styles.progressMain}>
        <progress className="progress w-56" value={progress} max="100"></progress>

    </div>
  )
}
