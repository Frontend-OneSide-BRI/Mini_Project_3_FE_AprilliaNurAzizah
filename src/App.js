import { Provider } from "react-redux";
import {store} from "./service/store"
import "./App.css";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
