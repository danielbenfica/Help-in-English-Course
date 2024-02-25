'use client'
import { useRouter } from 'next/navigation'
import { FiArrowLeft } from 'react-icons/fi'

import styles from '@/styles/components/headerPage/headerPage.module.css'

export default function HeaderPage({title}){
  const router = useRouter();
  return (
    <header className={styles.page__header}>
        <h1 className={styles.page__header_title}>
            <span><FiArrowLeft onClick={() => router.back()} /></span> 
            {title}
        </h1>
    </header>
  )
}