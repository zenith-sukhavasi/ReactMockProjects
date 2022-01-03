import { TagProvider } from "./DATA/TagContext";
import Test from "./pages/Test";

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';



function App() {
  return (
    <div className="app">
      <TagProvider>
      <Test></Test>
      </TagProvider>
      <img src="..\images\2.png" alt="" />
    </div>
  );
}

export default App;
