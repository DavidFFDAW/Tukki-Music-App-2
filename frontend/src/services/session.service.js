const getParsedCookies = _ => {
    return document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        return { ...acc, [key.trim()]: value };    
    }, {});
}

const save = (key,value) => {
    const d = new Date(); // today's date
    d.setDate(d.getSeconds() + 1800); // will expire in 1800 seconds
    const expires = d.toUTCString();
    document.cookie = `${key}=${value}; expires=${expires}; path=/;`
}

const get = (key) => {
    const cookies = getParsedCookies();
    return cookies[key];
}

const remove = (key = false) => {
    if (!key) {
        Object.keys(getParsedCookies()).forEach(key => {
            document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        });
    }
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

export const SessionService = {
    save, get, remove,
};