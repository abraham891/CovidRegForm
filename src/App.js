import "./styles.css";
import { Form, Review, Header, Footer } from "./Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/review" component={Review} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
