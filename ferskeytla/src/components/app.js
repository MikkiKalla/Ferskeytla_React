import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";

const App = () => (
	<BrowserRouter>
		<div className="container">	
			 <Header />
				{/*<Switch>
					 <Route  exact path="/category/" component={} />
					<Route component={NotFound}/> 
				</Switch> */}
  		</div>
  	</BrowserRouter>
);

export default App;