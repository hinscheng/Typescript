class Snake {
    // 表示蛇的元素
    head: HTMLElement;
    // 蛇的身体
    bodys: HTMLCollection; // HTMLCollection元素集合 会自动获取新增元素
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake>div')!;
        this.bodys = document.getElementById('snake')!.getElementsByTagName('div');
    }

    // 获取蛇的坐标X
    get X() {
        return this.head.offsetLeft
    }
    // 获取蛇的Y轴坐标
    get Y() {
        return this.head.offsetTop
    }

    set X(value: number) {
        // 如果新值和旧值相同 则直接返回不再修改
        if (this.X == value) {
            return
        }
        // X的值的合法范围0-290 是否撞墙
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了！')
        }
        // 修改X时 不能掉头
        if(this.bodys[1] && (this.bodys[1] as HTMLElement).offsetLeft==value){
            // 如果发生了掉头 让蛇向反方向继续移动
            if(value>this.X){
                // 如果新值value大于旧值X 则说明蛇在向右走 此时发生掉头 蛇继续向左走
                value = this.X-10
            }else{
                // 向左走
                value=this.X+10
            }
        }

        // 移动身体
        this.moveBody()
        this.head.style.left = value + 'px'
        // 检查有没有撞到
        this.checkHeadBody()
    }
    set Y(value: number) {
        if (this.Y == value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了！')
        }

        if(this.bodys[1] && (this.bodys[1] as HTMLElement).offsetTop==value){
            if(value>this.Y){
                value = this.Y-10
            }else{
                value=this.Y+10
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        // 检查有没有撞到
        this.checkHeadBody()
    }

    // 蛇增加身体的方法
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    // 添加一个蛇身体方法
    moveBody(){
        /**
         * 将后边的身体设置为前边身体的位置
         * 
         */
        // 遍历获取所有的身体
        for(let i=this.bodys.length-1;i>0;i--){
            // 获取前边身体的位置
            let X=(this.bodys[i-1] as HTMLElement).offsetLeft;
            let Y=(this.bodys[i-1] as HTMLElement).offsetTop; 

            // 将值设置到当前身体上
            (this.bodys[i] as HTMLElement).style.left = X+'px';
            (this.bodys[i] as HTMLElement).style.top = Y+'px'
        }
    }

    // 判断蛇是否撞自己身体
    checkHeadBody(){
        // 获取所有的身体 检查其是否和蛇头的坐标发生重叠
        for(let i=1;i<this.bodys.length;i++){
            let bd = this.bodys[i] as HTMLElement;
            if(this.X==bd.offsetLeft&&this.Y==bd.offsetTop){
                // 进入判断说明蛇头撞到身体
                throw new Error('撞到自己了!')
            }
        }
    }
}

export default Snake