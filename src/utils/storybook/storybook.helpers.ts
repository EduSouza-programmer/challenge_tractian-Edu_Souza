/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-types */

export const details = (obj: Object) => {
  const keys = Object.keys(obj);
  const formatted = keys.reduce((acc, value, index, array) => {
    const lastkey = index === array.length - 1;
    if (!acc) {
      acc += `"${value}" |`;

      return acc;
    }
    if (lastkey) {
      acc += ` "${value}"`;

      return acc;
    }

    acc += ` "${value}" |`;

    return acc;
  }, "");
  return formatted;
};

export const options = (obj: Object) => {
  return Object.keys(obj);
};

export function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
