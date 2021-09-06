import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Blogs from "./Blogs";
import Blogdetails from "./Blogdetails";
import About from "./About";
import Create from "./Create";
import Error from "./Error";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Blogs />
          </Route>
          <Route exact path="/blog/:id">
            <Blogdetails />
          </Route>
          <Route path="/create">
            <div>
              <Create />
            </div>
          </Route>
          <Route path="/about">
            <div>
              <About />
            </div>
          </Route>
          <Route path="*">
            <div>
              <Error />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
