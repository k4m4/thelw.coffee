import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const EXAMPLE_ACRONYM = 'fcmm'

export default function Home() {
	return (
		<Layout>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Θέλω Coffee!
				</h1>
				<p className={styles.description}>
					Add a Greek coffee acronym to retrieve its parsed version, like so:
				</p>
				<Link href={`/${EXAMPLE_ACRONYM}`}>
					<a className={styles.link}>
						<pre className={styles.code}>
							{`https://thelw.coffee/${EXAMPLE_ACRONYM}`}
						</pre>
					</a>
				</Link>
			</main>
		</Layout>
	)
}
