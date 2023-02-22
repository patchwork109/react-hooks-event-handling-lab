// Code Keypad Component Here

function Keypad () {
    
    const handlePasswordChange = (e) => {
        console.log("Entering password...");
    }
    
    return (
        <div>
            <input 
                type="password"
                onChange={handlePasswordChange}
                placeholder="Enter your password"
            />
        </div>
    )
}

export default Keypad;