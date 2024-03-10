function manufacture(gifts, materials) {
    // Code here
    let buildableGifts = [];

    gifts.forEach(value => {
        let canBuild = true;
        for (let i = 0; i < value.length; i++) {
            if (materials.includes(value[i]) == false) { canBuild = false };
        };
        if (canBuild) { buildableGifts.push(value) }
    });

    return buildableGifts;
}