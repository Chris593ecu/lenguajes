function convertCtoF(temp) {
    if (temp === 0) {
        return 32;
    }
    if (temp !== 0) {
        return (temp * 9) / 5 + 32;
    }
}
