import { useRouter } from 'next/router'
import Layout from '../components/layout'
import parseCoffeeAcronym from '../lib'
import styles from '../styles/Home.module.css'

const Acronym = () => {
	const router = useRouter()
	const { acronym } = router.query
	if (!acronym) {
		return null
	}

	try {
		return (
			<Layout>
				<p classNames={styles.description}>Θέλω ένα:</p>
				<h1 classNames={styles.title}>{parseCoffeeAcronym(acronym)}</h1>
			</Layout>
		)
	} catch (error) {
		return <Layout>{error.message}</Layout>
	}
}

export default Acronym
