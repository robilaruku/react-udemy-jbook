import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
import TextEditor from "./components/text-editor";

const App = () => {
  return (
    <>
      <TextEditor />
    </>
  );
};

const element = document.getElementById("root");

const root = createRoot(element!);

root.render(<App />);
