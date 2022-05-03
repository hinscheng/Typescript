// 引入其他类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器 控制其他类
class GameControl {
    // 定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    // 创建来存储蛇的移动方向
    direction: string = ''
    // 创建一个属性判断游戏是否结束
    isLive = true

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,3)
        this.init()
    }

    // 游戏初始化方法 调用后游戏即开始
    init() {
        //绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // console.log(event.key)
        this.direction = event.key

    }

    // 控制蛇的移动方法
    run() {
        // 获取蛇现在坐标
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                //向上移动top减少
                Y -= 10
                break;
            case 'ArrowDown':
            case 'Down':
                //向上移动top增加
                Y += 10
                break;
            case 'ArrowLeft':
            case 'Left':
                //向左移动left减少
                X -= 10
                break;
            case 'ArrowRight':
            case 'Right':
                //向右移动left减少
                X += 10
                break;
        }

        this.checkEat(X,Y)

        // 捕获蛇撞墙报错信息
        try {
            // 修改 X Y 的值
            this.snake.X = X
            this.snake.Y = Y
        } catch (error: any) {
            alert(error.message + 'Game Over!')
            this.isLive = false
        }


        // 开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }
    checkEat(X:number,Y:number){
         // 检查蛇是否吃到了食物
         if(X== this.food.X && Y== this.food.Y){
            // 吃到食物 位置要变更
            this.food.change()
            // 分数增加
            this.scorePanel.addScore()
            // 蛇增加一节
            this.snake.addBody()
        }


    }
}

export default GameControl