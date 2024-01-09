import React from 'react'
import styles from '@/styles/404.module.scss'

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src='/not_found.png' alt="alt" className={styles.error__image} />
      404 | Halaman Tidak Ditemukan
    </div>
  )
}

export default Custom404