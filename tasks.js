const TASKS = [
    'bank robbery',
    'car crash',
    'rain storm',
    'duck hunting',
    'football game',
    'university lecture',
    'earthquake',
    'traffic jam',
    'funeral',
    'rollercoaster ride',
    'moon landing',
    'yoga session',
    'auction',
    'talk show',
    'radio show',
    'demolition of building'
]

function getRandomTasks()
{
    let randomPicks = [];
    while(randomPicks.length < 3) {
        let r = Math.floor(Math.random() * TASKS.length);
        if(randomPicks.indexOf(r) === -1) randomPicks.push(r);
    }
    let randomTasks = [
        TASKS[randomPicks[0]],
        TASKS[randomPicks[1]],
        TASKS[randomPicks[2]]
    ];
    return randomTasks;
}