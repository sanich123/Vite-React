type ErrorHandlerProps = {
  err: unknown;
  stateErrorHandler: (arg: { [key: string]: string }) => void;
};

export function errorHandler({ err, stateErrorHandler }: ErrorHandlerProps) {
  if (err instanceof Error) {
    const { message } = err;
    stateErrorHandler({ message });
  } else {
    stateErrorHandler({ message: 'Unknown error' });
  }
}
