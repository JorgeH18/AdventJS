function findFirstRepeated(gifts) {
    // Code here
    let result = -1;
    let repeatedIndex = [];

    for (let i = 0; i < gifts.length; i++) {
        let ind = gifts.indexOf(gifts[i], i + 1);
        if (ind != -1) {
            repeatedIndex.push(ind);
        }
    }

    if (repeatedIndex.length != 0) {
        result = gifts[Math.min(...repeatedIndex)];
    }

    return result;
}
