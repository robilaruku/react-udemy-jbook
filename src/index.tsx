import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
import TextEditor from "./components/text-editor";
import { Provider } from "react-redux";
import { store } from "./state";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div>
          <TextEditor />
        </div>
      </Provider>
    </>
  );
};

const element = document.getElementById("root");

const root = createRoot(element!);

root.render(<App />);
