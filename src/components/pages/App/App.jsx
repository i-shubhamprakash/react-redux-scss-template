import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Demo1 from "../Demo1/Demo1";
import Demo2 from "../Demo2/Demo2";
import NOT_FOUND from "../NOT_FOUND/NOT_FOUND";

function App() {
	return (
		<Switch>
      	<Route exact path="/" component={Home} />	
      	<Route exact path="/demo1" component={Demo1} />	
      	<Route exact path="/demo2" component={Demo2} />	
      	<Route exact path="" component={NOT_FOUND} />	
		</Switch>
	);
}

export default App;
