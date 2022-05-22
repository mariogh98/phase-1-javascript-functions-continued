// code your solution here
function saturdayFun(defaultActivity = "roller-skate") {
    return `This Saturday, I want to ${defaultActivity}!`
}


function mondayWork(defaultAction = "go to the office") {
    return `This Monday, I will ${defaultAction}.`
}

function wrapAdjective(string = "*") {
  return function(adjective1 = "special") {
      return `You are ${string}${adjective1}${string}!`;
  }
}

wrapAdjective("*")("a hard worker")
