export const pad = (n: number, width: number, z: string = '0') => {
    const s: string = String(n)
    return s.length >= width ? s : new Array(width - s.length + 1).join(z) + s;
}

