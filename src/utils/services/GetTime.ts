export const getEpochTime = () => new Date().getTime();

export const getDifferenceInSeconds = (time: number) =>
  Math.round(time - getEpochTime() / 1000);
