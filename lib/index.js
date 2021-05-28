const plag = (delay = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), delay);
    });
};
export { plag };
export default plag;
//# sourceMappingURL=index.js.map