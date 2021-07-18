import { GetServerSideProps } from 'next'
import Layout from '../components/layout'
import parseCoffeeAcronym, { Acronym as CoffeeAcronym } from '../lib'
import styles from '../styles/Home.module.css'

const SITE_BASE_URL = 'https://thelw.coffee'

type AcronymProps = {
	acronym: string
}

const Acronym = ({ acronym }: AcronymProps) => {
	if (!acronym || typeof acronym !== 'string') {
		return null
	}

	const encodedHref = encodeURIComponent(`${SITE_BASE_URL}/${acronym}`)
	const ogImage = `${SITE_BASE_URL}/api/og-image?url=${encodedHref}`

	try {
		return (
			<Layout
				pageTitle={acronym.toUpperCase()}
				ogImage={ogImage}
			>
				<p className={styles.description}>
					Θέλω ένα:
				</p>
				<h1 className={styles.title}>
					{parseCoffeeAcronym(acronym as CoffeeAcronym)}
				</h1>
			</Layout>
		)
	} catch (error) {
		return <Layout>{error.message}</Layout>
	}
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	if (!params?.acronym) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			acronym: params.acronym,
		},
	}
}

export default Acronym
