import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Stylesheets from "./components/Stylesheets";


function App() {
  return (
    <>
    <Stylesheets />
      <Navbar title="TextMan" homesection="Home" />
      
      <div className="container my-3">
      <TextForm heading="Enter Your Text Below" />
      </div>

      
    </>
  );
}

export default App;
