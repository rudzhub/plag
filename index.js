function plag(delay) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(true), delay);
	});
}

module.exports = plag;
