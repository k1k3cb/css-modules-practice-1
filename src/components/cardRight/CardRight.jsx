import Button from '../button/Button';
import RectangleInfo from '../rectangleInfo/RectangleInfo';
import styles from './CardRight.module.css';

const CardRight = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>Summary</div>
			<div>
				<RectangleInfo
					title='Reaction'
					icon='/public/assets/images/icon-reaction.svg'
					points={80}
					color='red'
				/>

				<RectangleInfo
					title='Memory'
					icon='/public/assets/images/icon-memory.svg'
					points={92}
					color='yellow'
				/>

				<RectangleInfo
					title='Verbal'
					icon='/public/assets/images/icon-verbal.svg'
					points={61}
					color='green'
				/>

				<RectangleInfo
					title='Visual'
					icon='/public/assets/images/icon-visual.svg'
					points={73}
					color='blue'
				/>
			</div>
			<Button />
		</div>
	);
};

export default CardRight;
