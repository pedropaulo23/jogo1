// cookies.js

/**
 * Define um cookie com um determinado nome, valor e número de dias até expirar.
 * @param {string} name - O nome do cookie.
 * @param {string} value - O valor do cookie.
 * @param {number} days - O número de dias até o cookie expirar.
 */
export function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

/**
 * Obtém o valor de um cookie com um determinado nome.
 * @param {string} name - O nome do cookie.
 * @returns {string|null} - O valor do cookie, ou null se não encontrado.
 */
export function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

/**
 * Remove um cookie com um determinado nome.
 * @param {string} name - O nome do cookie.
 */
export function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}