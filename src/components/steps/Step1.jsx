function Step1({ formData , setFormData }) {
    const handleChange = (event) => {
        const {name , value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="step-container">
            <input type="text"
                   name="firstName"
                   placeholder="First Name"   
                   value={formData.firstName}   
                   onChange={handleChange}
                     />
           
         <input type="text"
                   name="lastName"
                   placeholder="Last Name"   
                   value={formData.lastName}   
                   onChange={handleChange}
                     />


            <input type="date"
                   name="dob"
                  
                   value={formData.dob}   
                   onChange={handleChange}
                     />

        </div>
    );
}

export default Step1;