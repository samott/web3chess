import styles from '../styles/components/PageHeader.module.css';

export default function PageHeader() {
	return (
		<header className={styles.PageHeader}>
			<div className={styles.HeaderTitle}>
				<h1>Web3 Chess</h1>
			</div>

			<div className={styles.WalletButton}>
				<w3m-button />
			</div>
		</header>
	);
}
