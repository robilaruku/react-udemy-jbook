import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
import CodeCell from "./components/code-cell";

const App = () => {
  return (
    <>
      <CodeCell />
    </>
  );
};

const element = document.getElementById("root");

const root = createRoot(element!);

root.render(<App />);
