import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Success from "./components/Success";
import Welcome from "./components/Welcome";
function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = () => {
    console.log(formData);
    setSubmitted(true);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

   const isStepValid = () =>{
    if (step === 1){
        return (
            formData.firstName.trim() !== "" &&
            formData.lastName.trim() !== "" &&
            formData.dob !== ""
        );
    }

     if (step === 2){
        return (
             /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
            formData.password.length >=8 &&
            formData.confirmPassword === formData.password
        );
     }
        return true;
   };

  return (
    <div className="app-container">
      <div className="form-card">
        {submitted ? (
          <Success />
        ) : (
          <>
          {step > 0 && (
            <>
            <h1>Registration Wizard</h1>
           
            <ProgressBar step={step} />
            </>

          )}
            
            {step === 0 && (
                <Welcome setStep={setStep} />
            )}

            {step === 1 && (
              <Step1 formData={formData} setFormData={setFormData} />
            )}

            {step === 2 && (
              <Step2
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                setErrors={setErrors}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            )}

            {step === 3 && (
              <Step3 formData={formData} handleSubmit={handleSubmit} />
            )}

            <div className="button-group">
              {step > 1 && step < 3 && (<button onClick={prevStep}>Back</button>)}

              {step >0 && step < 3 && (<button onClick={nextStep} disabled={!isStepValid()}>Next</button>)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
