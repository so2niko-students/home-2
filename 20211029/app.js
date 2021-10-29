//math variant
var board = [
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
];

const checker = cond => {
    const positions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const flatCond = cond.flat();
    let catsGame = 0;

    const posLen = positions.length;
    for(let i = 0; i < posLen; i+= 1){
        const multi = positions[i].reduce((acc, el) => acc * flatCond[el], 1);
        if(multi === 1 || multi === 8){
            return Math.cbrt(multi);
        }
        if(multi === 0){
            catsGame = -1;
        }
    }

    return catsGame;
}

console.log(checker(board));

//flat().join('');
//  /^(...){,2}111(...){1,2}$/