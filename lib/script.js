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
            let p = prompt("Введите имя участника и оценки судей:", "Иван, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4");
            name = p.slice(0, p.indexOf(','));
            p = p.replace(p.slice(0,p.indexOf(' ')+1),'');
            for (i = 0; i < 7; i++)
            {
              marks[i] = p.split([", "],5);
              for (j= 0; j < 5; j++)
                p = p.replace(p.slice(0,p.indexOf(' ')+1),'');  
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
    avgForJudges[i] = mem.marks[i].reduce((sum, current) => sum + Number(current), 0)/5;
  }
  avgForJudges.sort(compareNumbers);
  avgForJudges.shift();
  avgForJudges.pop();
  return avgForJudges.reduce((sum,current) => sum + Number(current), 0)/5;
}
function compareNumbers(a, b) {
  return a - b;
}
