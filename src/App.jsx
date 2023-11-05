import Navbar from "./components/Navbar";
import Sales from "./components/Sales";
import {popularsales} from "./data/data.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Sales endpoint={popularsales} />
    </>
  );
};

export default App;
