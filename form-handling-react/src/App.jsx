import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
    return (
        <div>
            <h1>User Registration (Controlled Components)</h1>
            <RegistrationForm />
          <h1>User Registration (Formik)</h1>
            <FormikForm />
        </div>
    );
}

export default App;
