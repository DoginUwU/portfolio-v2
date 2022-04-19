const getRandomFloatInclusive = (min: number, max: number) => {
    const randomBuffer = new Uint32Array(1);

    window.crypto.getRandomValues(randomBuffer);

    const randomNumber = randomBuffer[0] / (0xffffffff + 1);

    return randomNumber * (Math.floor(max) - Math.ceil(min) + 1) + min;
};

const getRandomIntInclusive = (min: number, max: number) => Math.floor(getRandomFloatInclusive(min, max));

export { getRandomIntInclusive, getRandomFloatInclusive };
