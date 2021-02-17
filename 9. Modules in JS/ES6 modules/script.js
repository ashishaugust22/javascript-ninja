

export function fight (char1, char2) {
    const attach1 = Math.floor(Math.random() * char1.length);
    const attach2 = Math.floor(Math.random() * char2.length);
    return attach1 > attach2 ? `${char1} wins` : `${char2} wins`;
}