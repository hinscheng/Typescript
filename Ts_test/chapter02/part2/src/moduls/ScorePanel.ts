// 定义记分牌的类
class ScorePanel{
    score = 0 ; 
    level = 1 ;
    scoreEle : HTMLElement;
    levelEle : HTMLElement;
    maxlevel:number ;
    upScore:number;
    constructor(maxlevel:number,upScore=10){
        this.scoreEle=document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxlevel = maxlevel,
        this.upScore=upScore
    }

    // 设置一个加分方法
    addScore(){
        // this.score++
        this.scoreEle.innerHTML = ++this.score+''
        // 判断分数是多少
        if(this.score%this.upScore==0){
            this.levelUp()
        }
    }
    // 等级提升方法
    levelUp(){
        if(this.level<this.maxlevel){
            this.levelEle.innerHTML= ++this.level+''
        }
    }
}
// const scorePanel =new ScorePanel(10,10)
// scorePanel.addScore()
// scorePanel.addScore()
// scorePanel.addScore()

export default ScorePanel