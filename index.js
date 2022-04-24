// code your solution here
function saturdayFun(act = "roller-skate") {
    return `This Saturday, I want to ${act}!`;
}
function mondayWork(act = "go to the office") {
    return `This Monday, I will ${act}.`;
}
function wrapAdjective(decorate) {
    return function(what) {
        return `You are ${decorate}${what}${decorate}!`
    }
}