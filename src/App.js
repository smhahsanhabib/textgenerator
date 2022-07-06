import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar title="TextMan" homesection="Home" />
      
      <div className="container my-3">
      <TextForm heading="Enter Your Text Below" />
      </div>

      
    </>
  );
}

export default App;
