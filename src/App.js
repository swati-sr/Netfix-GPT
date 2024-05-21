import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
