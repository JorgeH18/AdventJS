/* GitHub solution by https://github.com/Achalogy/advent-js-2023/blob/main/retos/reto-5
Points earned: 160
1,503 ops/s
Cognitive complexity: 4
*/

function cyberReindeer(road, time) {
    let moves = [road]
    let a = 0
    let b = "."

    for (let i = 1; i < time; i++) {
        if (i == 5) road = road.replace(/\|/g, "*")
        const newRoad = road.replace(/S[\.\*]/, `${b}S`)
        if (newRoad != road) {
            a++
            b = road[a]
        }
        road = newRoad
        moves.push(road)
    }

    return moves;
}
