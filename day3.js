/*
Points earned: 260
2,839 ops/s
Cognitive complexity: 4
*/

function findNaughtyStep(original, modified) {
    // Code here
    let longestSequence;
    let shortestSequence;
    let differChar = "";

    if (original.length > modified.length) {
        longestSequence = original;
        shortestSequence = modified;
    } else {
        longestSequence = modified;
        shortestSequence = original;
    }

    for (let i = 0; i < longestSequence.length; i++) {
        if (longestSequence[i] != shortestSequence[i]) {
            differChar = longestSequence[i];
            break;
        }
    }
    return differChar;
}
