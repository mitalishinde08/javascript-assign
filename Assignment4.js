function matchHouses(step) {
    if (step<1) {
        return 0
    }
    else {
        // starting with 6 matchsticks fir one house
        let matchsticks = 6;
        for (let i=2;i<=step;i++) {
            matchsticks+=5;
        }
    return matchsticks
    }
}

console.log(matchHouses(1))
console.log(matchHouses(4))
console.log(matchHouses(87))