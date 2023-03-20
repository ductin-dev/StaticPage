export const validString = (data: string, allowSpecial: boolean, allowNumber: boolean, minLength?: number, maxLength?: number): boolean => {
    if (!data) return false;
    if (!allowSpecial && data.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)) return false;
    if (!allowNumber && data.match(/^[0-9]*$/)) return false;
    if (minLength && data.length < minLength) return false;
    if (maxLength && data.length > maxLength) return false;
    return true;
};