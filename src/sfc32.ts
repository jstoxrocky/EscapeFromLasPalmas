const sfc32 = (seed: number) => {
    // Pad seed with dummy data
    let a = 0x9E3779B9;
    let b = 0x243F6A88;
    let c = 0xB7E15162;
    const rng = () => {
        a >>>= 0; b >>>= 0; c >>>= 0; seed >>>= 0; 
        let t = (a + b) | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = (c << 21 | c >>> 11);
        seed = seed + 1 | 0;
        t = t + seed | 0;
        c = c + t | 0;
        return (t >>> 0) / 4294967296;
    }
    // Advance the RNG a few times
    for (let i = 0; i < 15; i++) rng();
    return rng;
}

export default sfc32;
