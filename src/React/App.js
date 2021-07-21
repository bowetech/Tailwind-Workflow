import React from 'react';
import Child from './components/Child';

class App extends React.Component {

	render() {
		return (<div className="mt-10 p-8 max-w-sm rounded overflow-hidden shadow-lg">

			<h3 className="testing123">This is my React Componen</h3>



			<Child />
		</div>)
	}
}

export default App;