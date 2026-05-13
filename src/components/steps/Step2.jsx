function Step2({ formData , setFormData , errors , setErrors , showPassword , setShowPassword}){
    const handleChange = (event) => {
        const { name , value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        validateField(name , value);
    };
      
       const validateField = (name , value) =>{
        let errorMessage = "";
        if (name === "email"){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)){
                errorMessage="Enter a valid email address";
            }
        }
        
        if (name === "password"){
            if (value.length < 8){
                errorMessage = "password must be atleast 8 charecters";
            }
        }
        
        if (name === "confirmPassword"){
            if (value !== formData.password){
                errorMessage = "Password do not match";
            }
        }
         
         setErrors({
            ...errors,
            [name]: errorMessage,
         });


       };


    return (
        <div className="step-container">
          <input type="email" 
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  />
                
               {errors.email && (
                <p className="error-text">
                    {errors.email}
                </p>
               )}


              <input type={showPassword ? "text" : "password" } 
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  />

                  {errors.password && (
                    <p className="error-text">
                        {errors.password}
                    </p>
                  )}
                
                <input type={showPassword ? "text" : "password" } 
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  />

                  {errors.confirmPassword && (
                    <p className="error-text">
                        {errors.confirmPassword}
                    </p>
                  )}

                  <button type="button"
                           className="toggle-btn"
                           onClick={() =>
                            setShowPassword(!showPassword)
                           }
                           >
                   {showPassword ? "Hide Password" : "Show Password"}

                  </button>

        </div>
    );
}
export default Step2;