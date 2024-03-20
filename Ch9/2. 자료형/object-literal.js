let studentScore = {
    koreanScore : 80,
    englishScore : 70,
    mathScore : 90,
    scienceScore : 60
};

let WhatDayIsIt = {
    monday : false,
    thesday : false,
    wednesday : true,
    thursday : false,
    friday : false,
    saturday : false,
    sunday : false
};

console.log(studentScore.englishScore); // 70
console.log(studentScore['mathScore']); // 90

console.log("2nd test");
console.log(WhatDayIsIt['monday']);
console.log(WhatDayIsIt.wednesday);