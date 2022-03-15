export const toCamelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
    index === 0 ? word.toLowerCase() : word.toUpperCase()
  ).replace(/\s+/g, '');
}

export const toSnakeCase = (str) => {
  return toCamelCase(str).replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
}

// Convert any string to pascal case
export const toPascalCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) =>
    word.toUpperCase()
  ).replace(/\s+/g, '');
}
