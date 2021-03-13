export type Try<S, E extends Error = Error> = Success<S> | Failure<E>;

export type Success<T> = Readonly<{
  success: true;
  value: T;
}>;

export type Failure<T> = Readonly<{
  success: false;
  error: T;
}>;

export const success = function <T>(value: T): Success<T> {
  return {
    success: true,
    value,
  };
};

export const failure = function <T>(error: T): Failure<T> {
  return {
    success: false,
    error,
  };
};
