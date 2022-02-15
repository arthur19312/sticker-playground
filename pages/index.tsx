import Container from "@/Container";
import { store } from "@store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
export default App;
