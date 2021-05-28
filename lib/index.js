const plug = (delay = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), delay);
    });
};
export { plug };
export default plug;
//# sourceMappingURL=index.js.map