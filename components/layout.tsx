import { ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

type LayoutProps = {
	pageTitle?: string
	ogImage?: string
	children: ReactNode
}

export default function Layout({ pageTitle, ogImage, children }: LayoutProps) {
	return (
		<>
			<Head>
				<title>{pageTitle && `${pageTitle} | `}Thelw Coffee</title>
				<meta name="description" content="Greek Coffee acronym parser" />
				{ogImage && (
					<meta property="og:image" content={ogImage} />
				)}
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				{children}
			</main>
		</>
	)
}
