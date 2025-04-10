export const checkValidation = (email, password) => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if(!emailRegex) {
        return "Invalid email format.";
    }

    if(!passwordRegex) {
        return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }



    return null;
}