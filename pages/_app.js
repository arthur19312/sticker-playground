import { store } from "@/store/index";
import { Provider } from "react-redux";
import Container from "@/pages/Container";
import Storage from "@/dbStorage";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Container />
      <Storage />
    </Provider>
  );
}
export default App;
