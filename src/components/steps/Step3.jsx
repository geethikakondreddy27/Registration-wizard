function Step3({ formData , handleSubmit }) {
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

            <button onClick={handleSubmit}>
                Submit 
            </button>

        </div>
    );
}

export default Step3;