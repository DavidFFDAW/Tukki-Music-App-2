const parseResult = (valid, message) => {
    return { error: !valid, message: valid ? '' : message };
}

export const validateEmail = (email) => {
    const validMails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@outlook.com'];
    const isValid = validMails.filter(mail => email.includes(mail)).length > 0;

    return parseResult(isValid, 'Invalid email');
}

export const validatePassword = (password) => {
    const isValid = password.length >= 6;

    return parseResult(isValid, 'Debe tener al menos 6 caracteres');
}