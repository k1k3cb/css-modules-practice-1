import RectangleInfo from '../rectangleInfo/RectangleInfo';
import styles from './CardRight.module.css';

const CardRight = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>Summary</div>
			<div>
				<RectangleInfo />
			</div>
		</div>
	);
};

export default CardRight;
