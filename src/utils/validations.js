export const validateDecimal = (value) => /^\d*$/.test(value);
export const validateBinary = (value) => /^[01]*$/.test(value);
export const validateOctal = (value) => /^[0-7]*$/.test(value);
export const validateHexadecimal = (value) => /^[0-9a-fA-F]*$/.test(value);
