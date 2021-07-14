import { useRouter } from 'next/router'
import Layout from '../components/layout'
import parseCoffeeAcronym, { Acronym as CoffeeAcronym } from '../lib'
import styles from '../styles/Home.module.css'

const Acronym = () => {
	const router = useRouter()
	const { acronym } = router.query
	if (!acronym || typeof acronym !== 'string') {
		return null
	}

	try {
		return (
			<Layout pageTitle={acronym.toUpperCase()}>
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

export default Acronym
