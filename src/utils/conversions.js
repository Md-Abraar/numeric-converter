export const decimalToBinary = (decimal) => (decimal >>> 0).toString(2);
export const binaryToDecimal = (binary) => parseInt(binary, 2);
export const decimalToOctal = (decimal) => (decimal >>> 0).toString(8);
export const octalToDecimal = (octal) => parseInt(octal, 8);
export const decimalToHexadecimal = (decimal) => (decimal >>> 0).toString(16).toUpperCase();
export const hexadecimalToDecimal = (hexadecimal) => parseInt(hexadecimal, 16);