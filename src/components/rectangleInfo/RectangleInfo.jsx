import styles from './RectangleInfo.module.css';

const RectangleInfo = ({ title, icon, color, points }) => {
	return (
		<div className={`${styles.container}  ${styles[color]}`}>
			<p className={`${styles[color + '-text']}`}>
				<img src={icon} alt={title} />
				{title}
			</p>
			<div className={styles.result}>
				<span className={styles.points}>{points} </span>/100
			</div>
		</div>
	);
};

export default RectangleInfo;
