function Welcome({setStep}){
    return(
        <div className="step-container welcome-screen">
             <h1>Welcome to Hogwarts ✨</h1>
             <p>
               Create your wizarding account and complete the Hogwarts onboarding process to access your magical portal and 
               begin your enchanted journey.
             </p>

             <button onClick={()=>setStep(1)}>
                Get Started 

             </button>
        </div>
    );
}

export default Welcome;