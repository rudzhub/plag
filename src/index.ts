const plug = (delay: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), delay);
  });
};

export { plug };
export default plug;
