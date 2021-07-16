import { ReactNode } from 'react'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const SITE_NAME = 'Thelw Coffee'
const SITE_DOMAIN = 'thelw.coffee'
const DESCRIPTION = 'Greek Coffee acronym parser'
const LOCALE = 'el_GR'

type HeadProps = {
	pageTitle?: string
	ogImage?: string
}

const Head = ({ pageTitle, ogImage }: HeadProps) => {
	const router = useRouter()
	const title: string = `${pageTitle && `${pageTitle} | `}${SITE_NAME}`
	const url = `${SITE_DOMAIN}/${router.asPath}`
	return (
		<NextHead>
			<title>{title}</title>
			<meta name="description" content={DESCRIPTION} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={DESCRIPTION} />
			{ogImage && (
				<>
					<meta property="og:image" content={ogImage} />
					<meta name="twitter:image" content={ogImage} />
				</>
			)}
			{/* <link rel="icon" href="/favicon.ico" /> */}
			<meta property="og:locale" content={LOCALE} />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content={SITE_DOMAIN} />
			<meta property="twitter:url" content={url} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={DESCRIPTION} />
		</NextHead>
	)
}

type LayoutProps = {
	pageTitle?: string
	ogImage?: string
	children: ReactNode
}

export default function Layout({ children, ...headProps }: LayoutProps) {
	return (
		<>
			<Head {...headProps} />
			<main className={styles.main}>
				{children}
			</main>
		</>
	)
}
