// Partial solution by me, this script dont work with the nested words

function decode(message) {
    // Code here
    let regExp = /\(([^)]+)\)/g;
    var matches = [...message.matchAll(regExp)];

    // each match[1] is the value without parentheses
    for (const match of matches) {
        let wordToReverse = match[1];
        let wordReversed = wordToReverse.split("").reverse().join("");
        //replace the matched element with the reversed word
        message = message.replace("(" + wordToReverse + ")", wordReversed);
    }
    return message;
}

/* GitHub solution by https://github.com/Achalogy/advent-js-2023/tree/main/retos/reto-4
Points earned: 280
2,270 ops/s
Cognitive complexity: 2
*/

function decode(message) {
    const regex = /\(([^()]+)\)/g
    const replacer = (_, group) => [...group].reverse().join("")

    return message
        .replace(regex, replacer)
        .replace(regex, replacer)
}
