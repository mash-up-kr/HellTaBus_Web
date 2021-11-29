type Reducer = (accumulator: unknown, value: unknown, key: string) => unknown;

export const reduceObject = (
  object: Record<string, unknown>,
  reducer: Reducer,
  initialValue: unknown
) => {
  const keys = Object.keys(object);
  let newInitialValue = initialValue;

  if (!newInitialValue) {
    const firstKey = keys.shift() as string;
    newInitialValue = object[firstKey];
  }

  return keys.reduce((accumulator, key) => {
    return reducer(accumulator, object[key], key);
  }, newInitialValue);
};
