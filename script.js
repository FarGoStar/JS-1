 let members = []; 
 function member(name, marks) {
  this.name = name;
  this.marks = marks;
 }
function start(){
  let ans = prompt("Выберите действие:\n 1 - Добавить нового участника\n 2 - Найти победителя","1");
  switch(ans){
  case '1': let name;
            let marks = []
            let p = prompt("Введите имя участника:", "Иван");
            name = p.slice();
            for (i = 0; i < 7; i++)
            {
              p = prompt (`Введите оценки ${i+1} судьи: `, "1, 1, 1, 1, 1")
              marks[i] = p.split([", "]);
            }
            members.push(new member(name,marks));
            break;
  case '2': alert("Наивысшую оценку получил " + countWinner(members));
          break;
  default: alert("Введено неверное значение");
          break;
  };
};
function countWinner(mems) {
  let average = [];
  for (let i = 0; i < mems.length; i++){
    average[i] = countAvg(mems[i]);
  }
  return members[average.indexOf(Math.max.apply(null, average))].name
}
function countAvg(mem){
  let avgForJudges = [];
  for (let i = 0; i < 7; i++){
    
    avgForJudges[i] = mem.marks[i].reduce((sum, current) => sum + Number(current), 0);
  }
  avgForJudges.sort(compareNumbers);
  avgForJudges.shift();
  avgForJudges.pop();
  return avgForJudges.reduce((sum,current) => sum + Number(current), 0)/5;
}
function compareNumbers(a, b) {
  return a - b;
}
