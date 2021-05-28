const plag = (delay: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), delay);
  });
};

export { plag };
export default plag;
