/*
Points earned: 25
1,799 ops/s
Cognitive complexity: 3
*/

function organizeGifts(gifts) {
    let result = "";

    // first divide by group (group=quantity and type)
    for (match of gifts.match(/\d+[a-zA-Z]/g)) {
        // for each group divide quantity and type
        let quantity = parseInt(match.slice(0, -1));
        const type = match.slice(-1);

        // then calculate the pallets
        // pallet=50 gift
        const pallets = Math.trunc(quantity / 50);
        result += `[${type}]`.repeat(pallets);
        // update gifts remaining
        quantity -= pallets * 50;

        // then calculate the boxes
        // box=10 gift
        const boxes = Math.trunc(quantity / 10);
        result += `{${type}}`.repeat(boxes);
        // update gifts remaining
        quantity -= boxes * 10;

        // add the remaining gifts
        if (quantity != 0) { result += `(${type.repeat(quantity)})`; }
    }
    return result;
}
