export default {
    bodyHTML: `<div class="container">
    <div class="calculator dark day">
        <div class="theme-toggler active">
            <i class="toggler-icon"></i>
        </div>
        <div class="display-screen">
            <div id="display"></div>
        </div>
        <div class="buttons">
            <table>
                <tr>
                    <td><button class="btn-operator" id="clear">C</button></td>
                    <td><button class="btn-operator" id="/">&divide;</button></td>
                    <td><button class="btn-operator" id="*">&times;</button></td>
                    <td><button class="btn-operator" id="backspace"><</button></td>
                </tr>
                <tr>
                    <td><button class="btn-number" id="7">7</button></td>
                    <td><button class="btn-number" id="8">8</button></td>
                    <td><button class="btn-number" id="9">9</button></td>
                    <td><button class="btn-operator" id="-">-</button></td>
                </tr>
                <tr>
                    <td><button class="btn-number" id="4">4</button></td>
                    <td><button class="btn-number" id="5">5</button></td>
                    <td><button class="btn-number" id="6">6</button></td>
                    <td><button class="btn-operator" id="+">+</button></td>
                </tr>
                <tr>
                    <td><button class="btn-number" id="1">1</button></td>
                    <td><button class="btn-number" id="2">2</button></td>
                    <td><button class="btn-number" id="3">3</button></td>
                    <td rowspan="2"><button class="btn-equal" id="equal">=</button></td>
                </tr>
                <tr>
                    <td><button class="btn-operator" id="(">(</button></td>
                    <td><button class="btn-number" id="0">0</button></td>
                    <td><button class="btn-operator" id=")">)</button></td>
                </tr>
            </table>
        </div>
    </div>
    </div>`,

    bodyCSS: `<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        transition: all 0.5s ease;
    }
    
    a{
        text-decoration: none;
        color: aliceblue;
    }
    
    body{
        background-image: linear-gradient(to bottom right, rgba(79, 51, 176, 1), rgba(210, 53, 165));
    }
    
    .container{
        height: 100vh;
        width: 100vw;
        display: grid;
        /* 网格布局 */
        place-items: center;
        /* place-items 是一个简写属性 ，align-items + justify-items */
    }
    
    .calculator{
        position: relative;
        height: auto;
        width: auto;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 30px #000;
    }
    
    .theme-toggler{
        position: absolute;
        top: 30px;
        right: 30px;
        color: #fff;
        cursor: pointer;
        z-index: 1;
    }
    
    /* .theme-toggler.active{
        color: #333;
    } */
    
    /* :before 选择器向选定的元素前插入内容 */
    .theme-toggler.active::before{
        background-color: #333;
    }
    
    .theme-toggler::before{
        content: '';
        height: 30px;
        width: 30px;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: #fff;
        z-index: -1;
    }
    
    #display{
        margin: 0 10px;
        height: 150px;
        width: auto;
        max-width: 270px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        font-size: 30px;
        overflow-x: scroll;
    }
    
    /* ::-webkit-scrollbar CSS 伪类元素会影响设置了 overflow:scroll; 的元素的滚动条样式 */
    #display::-webkit-scrollbar{
        display: block;
        height: 3px;
    }
    
    button{
        height: 60px;
        width: 60px;
        border: 0;
        border-radius: 30px;
        margin: 5px;
        font-size: 20px;
        cursor: pointer;
        transition: all 200ms ease;
    }
    
    button:hover{
        transform: scale(1.1);
        /* Transform属性应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。 */
    }
    
    button#equal{
        height: 130px;
    }
    
    /* 白天主题 */
    .calculator.dark.day{
        background-color: #fff;
    }
    
    .calculator.dark.day #display{
        color: #0a1e23;
    }
    
    .calculator.dark.day button#clear{
        background-color: #ffd5d8;
        color: #fc4552;
    }
    
    .calculator.dark.day button.btn-number{
        background-color: #c3eaff;
        color: #000;
    }
    
    .calculator.dark.day button.btn-operator{
        background-color: #ffd0fd;
        color: #f967f3;
    }
    
    .calculator.dark.day button.btn-equal{
        background-color: #adf9e7;
        color: #000;
    }
    
    /* 夜间主题 */
    /* 类选择器的扩展用法 */
    .calculator.dark{
        background-color: #071115;
    }
    
    .calculator.dark #display{
        color: #f8fafd;
    }
    
    .calculator.dark button#clear{
        background-color: #2d191e;
        color: #bd3740;
    }
    
    .calculator.dark button.btn-number{
        background-color: #1b2f38;
        color: #f8fafb;
    }
    
    .calculator.dark button.btn-operator{
        background-color: #2e1f39;
        color: #aa00a4;
    }
    
    .calculator.dark button.btn-equal{
        background-color: #223323;
        color: #fff;
    }   
    </style>`,

    launch(){
        document.title = "计算器";
        document.body.innerHTML = this.bodyHTML + this.bodyCSS;
        this.getElement();
        this.bindEvent();
        this.themeSwitch();
    },

    getElement(){
        this.display= document.querySelector('#display');
        this.buttons= document.querySelectorAll('button');
        this.themeToggleBtn= document.querySelector('.theme-toggler');
        this.calculator= document.querySelector('.calculator');
    },

    bindEvent(){
        this.buttons.forEach((item) => {
            item.onclick = () => {
                if (item.id == 'clear'){
                    this.display.innerText = '';
                } else if (item.id == 'backspace'){
                    let string = this.display.innerText.toString();
                    this.display.innerText = string.substr(0, string.length - 1);
                } else if (this.display.innerText != '' && item.id =='equal'){
                    this.display.innerText = eval(this.display.innerText);
                } else if (this.display.innerText == '' && item.id == 'equal'){
                    this.display.innerText = 'Empty!';
                    setTimeout(() => (this.display.innerText = ''), 2000);
                } else {
                    this.display.innerText += item.id;
                }
            }
        })
    },

    themeSwitch(){
        // classList属性
        /* toggle()方法
            在元素中切换类名。
            第一个参数为要在元素中移除的类名，并返回 false。
            如果该类名不存在则会在元素中添加类名，并返回 true。*/
        let isDark = true;
        this.themeToggleBtn.onclick = () => {
            this.calculator.classList.toggle('day');
            this.themeToggleBtn.classList.toggle('active');
            isDark = !isDark;
        }
    }
}