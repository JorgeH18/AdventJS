/* GitHub solution by https://github.com/Jioh19/adventjs-2023/blob/main/09/script.js
Points earned: 290
2,506 ops/s
Cognitive complexity: 1
*/

function adjustLights(lights) {
    const color = ['🟢', '🔴'];
    let res = 0;
    for (const [i, light] of lights.entries()) {
        res += +(light == color[i % 2]);
    }
    return Math.min(res, lights.length - res);
}
