function Step3({ formData , handleSubmit , prevStep }) {
    return (
        <div className="step-container">

            <h2> Review your Details </h2>
            
            <p>
                <strong>First Name:</strong>
                {" "}
                {formData.firstName}
            </p>

             <p>
                <strong>Last Name:</strong>
                {" "}
                {formData.lastName}
            </p>

             <p>
                <strong>Date Of Birth:</strong>
                {" "}
                {formData.dob}
            </p>
              

            <p>
                <strong>Email:</strong>
                {" "}
                {formData.email}
            </p>

            <div className="button-group">
                <button type="button" onClick={prevStep}> Back </button>
                <button type="button" onClick={handleSubmit}> Submit </button>
            </div> 

        </div>
    );
}

export default Step3;