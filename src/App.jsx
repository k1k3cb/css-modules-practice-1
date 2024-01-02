import CardLeft from './components/cardLeft/CardLeft';
import CardRight from './components/cardRight/CardRight';

const App = () => {
	return (
		<div className='container'>
			<div className='card__body'>
				<CardLeft />
				<CardRight />
			</div>
		</div>
	);
};

export default App;
