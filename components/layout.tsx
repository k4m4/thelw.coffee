import { ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Layout({ pageTitle, children }: { pageTitle?: string, children: ReactNode }) {
	return (
		<>
			<Head>
				<title>{pageTitle && `${pageTitle} | `}Thelw Coffee</title>
				<meta name="description" content="Greek Coffee acronym parser" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				{children}
			</main>
		</>
	)
}
