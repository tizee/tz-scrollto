function linear(time: number) {
  return time;
}

function easeIn(time: number) {
  return time * time;
}

function easeOut(time: number) {
  return 1 - (time - 1) * (time - 1);
}

function easeInOut(time: number) {
  return time <= 0.5 ? 2 * time * time : 1 - 2 * (time - 1) * (time - 1);
}

export const mapToFunc: Record<string, Function> = {
  linear,
  easeIn,
  easeOut,
  easeInOut,
};
