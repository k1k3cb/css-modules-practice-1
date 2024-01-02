import styles from './CardLeft.module.css';

const CardLeft = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>Your Result</div>
			<div className={styles.result}>
				<div className={styles.points}>76</div>
				<div className={styles.total}>of 100</div>
			</div>
			<div className=''>
				<div className={styles.title}>Great</div>

				<div className={styles.text}>
					Your performance exceed 65% of the people conducting the test here!
				</div>
			</div>
		</div>
	);
};

export default CardLeft;
