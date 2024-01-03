import { v4 } from 'uuid';
import { rectangleInfo } from '../../constants/rectangleInfo';
import Button from '../button/Button';
import RectangleInfo from '../rectangleInfo/RectangleInfo';
import styles from './CardRight.module.css';

const CardRight = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>Summary</div>
			<div>
				{rectangleInfo.map(rectangle => (
					<RectangleInfo
						key={v4()}
						title={rectangle.title}
						icon={rectangle.icon}
						points={rectangle.points}
						color={rectangle.color}
					/>
				))}
			</div>
			<Button />
		</div>
	);
};

export default CardRight;
