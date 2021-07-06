import './App.css';
import ReactHookForm from "./ReactHookForm.js"
import Formik from "./Formik.js"
// import ReactFinalForm from "./ReactFinalForm"

function App() {
  return (
    <>
      <div>
        <h2>React Hook Form:</h2>
        <ReactHookForm />
        ---
      </div>
      <div>
        <h2>Formik Form:</h2>
        <Formik />
        ---
      </div>
    </>
  );
}

export default App;
