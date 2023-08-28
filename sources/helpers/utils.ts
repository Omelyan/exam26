/**
 * Resolves a promise after timeout.
 * @param time Timeout value in milliseconds.
 */
export async function wait(time: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), time);
  });
}
