window.onload=function(){

    tab();
    autoCreatImages();
    setTimeout(function () {
    waterFull();
    },500);
    
    autoPlay();

    window.onscroll=function () {

        var scrollTop = window.pageYOffset;
        if(scrollTop>150){
            $("top_nav").style.display = "block";
            $("top").style.display = "block";
        }
        if(scrollTop<150){
            $("top_nav").style.display = "none";
            $("top").style.display = "none";
        }
    };

    $("header_login").onclick = function(){
        $("login_mask").style.display="block";
    };

    $("close_btn").onclick = function(){
        $("login_mask").style.display="none";
    };


    function waterFull(){
        var allBox=document.getElementsByClassName('box');
        var arr=[],boxminHeight=0,boxminIndex=0,boxheight=0;
        for (var i=0;i<allBox.length;i++) {
            boxheight=allBox[i].offsetHeight;
            if(i<5){//第一行
                arr.push(boxheight);
                allBox[i].style.position = "absolute";
                allBox[i].style.top=0+"px";
                allBox[i].style.left=i*246+"px";
            }else{//其他行
                boxminHeight = Math.min.apply(this,arr);//取出最矮的盒子高度
                boxminIndex=getMin(arr,boxminHeight);//找到最矮那个的下标
                allBox[i].style.position = "absolute";
                allBox[i].style.top=boxminHeight+"px";
                allBox[i].style.left=boxminIndex*246+"px";
                boxminHeight = boxminHeight+boxheight;
                arr[boxminIndex]=boxminHeight;
            }
        }
        function getMin(arr,val) {
            for (var j=0;j<allBox.length;j++){
                if(arr[j] === val){return j;}
            }
        }


    }



   //轮播
    function autoPlay() {
        var allList=$("banner").getElementsByTagName("li");
        var index=0;
        setInterval(function () {
            for (var i=0;i<allList.length;i++){
                allList[i].style.opacity = "0";
            }
            allList[index%7].style.opacity = "1";
            index++;
        },2000)
    }

    // 选项卡
    function tab() {
        var tabHeader=document.getElementById("tab_header");
        var tabLi=tabHeader.getElementsByTagName("li");
        var tabContent=document.getElementsByClassName("content");

        for (var i=0;i<tabLi.length;i++){
            tabLi[i].index=i;
            tabLi[i].onclick=function () {
                for (var j=0;j<tabLi.length;j++){
                    tabLi[j].className="";
                    tabContent[j].style.display="none";
                }
                this.className="current";
                tabContent[this.index].style.display="block";
            }

        }

    }



    function autoCreatImages() {
        var json = [
            {txt: '当我们正在为生活疲于奔命的时候，生活已经离我们而去。——约翰·列侬', pic: 'images/0.jpg'},
            {txt: '活在世上，不必什么都知道，只知道最好的就够了。——王小波', pic: 'images/1.jpg'},
            {txt: '世界上任何书籍都不能带给你好运，但是它们能让你悄悄变成你自己。——黑塞', pic: 'images/2.jpg'},
            {txt: '很多人不需要再见，只是路过而已。——《彼岸花》', pic: 'images/3.jpg'},
            {txt: '人生最困难的三件事：保守秘密，忘掉所受的创伤，充分利用余暇。——吉罗', pic: 'images/4.jpg'},
            {txt: '有些人是离开后，才会发觉那个人是最喜欢的。——《东邪西毒》', pic: 'images/5.jpg'},
            {txt: '我总是在日暮时分,书影与书影之间,宁静的悲哀里,最想念你。——亦舒', pic: 'images/6.jpg'},
            {txt: '再长的路，一步步地能走完，再短的路，不迈开双脚也无法到达。', pic: 'images/7.jpg'},
            {txt: '哪里会有人喜欢孤独，不过是不喜欢失望。——村上春树', pic: 'images/8.jpg'},
            {txt: '人时已尽，人世很长，我在中间，应当休息。——顾城', pic: 'images/9.jpg'},
            {txt: '信任的深浅，不在于会不会对你笑，而在于愿不愿意在你面前哭。', pic: 'images/10.jpg'},
            {txt: '有一种旅行，不为跋涉千里的向往，只为漫无目的的闲逛，不为人山人海的名胜，只为怡然自乐的街景...', pic: 'images/11.jpg'},
            {txt: '人都会孤独，但唯独他，可以越过这尘世的热闹，一眼明白这世间所有的繁华不过是他身边的过眼云烟。', pic: 'images/12.jpg'},
            {txt: '不乱于心，不困于情。不畏将来，不念过往。如此，安好。', pic: 'images/13.jpg'},
            {txt: '每一个人都需要这样一个朋友：当以为自己再也笑不出来的时候，他能让你开怀大笑！', pic: 'images/14.jpg'},
            {txt: '咖啡苦与甜，不在于怎么搅拌，而在于是否放糖；一段伤痛，不在于怎么忘记，而在于是否有勇气重新开始。', pic: 'images/15.jpg'},
            {txt: '其实我不是一定要等你，只是等上了，就等不了别人了。——《朝露若颜》', pic: 'images/16.jpg'},
            {txt: '一切都是瞬间，一切都会过去，一切过去了的都会变成亲切的怀念。——普希金', pic: 'images/17.jpg'},
            {txt: '多少人曾爱慕你年轻时的容颜，可知谁愿承受岁月无情的变迁', pic: 'images/18.jpg'},
            {txt: '不在任何东西面前失去自我，哪怕是教条，哪怕是别人的目光，哪怕是爱情。——《成为简·奥斯汀》', pic: 'images/19.jpg'},
            {txt: '你如果认识从前的我，也许你会原谅现在的我。——张爱玲', pic: 'images/20.jpg'},
            {txt: '简约不是少，而是没有多余。足够也不是多，而是刚好你在。', pic: 'images/21.jpg'},
            {txt: '若只是喜欢 何必夸张成爱。——林夕', pic: 'images/22.jpg'},
            {txt: '梦里出现的人，醒来时就该去见她，生活就是这么简单。——《新桥恋人》', pic: 'images/23.jpg'},
            {txt: '与众不同的你是幸运的，何必让自己变得与别人一样。', pic: 'images/24.jpg'},
            {txt: '阳光温热，岁月静好，你还不来，我怎敢老。', pic: 'images/25.jpg'},
            {txt: '一个人知道自己为什么而活，就能忍受任何生活。——尼采', pic: 'images/26.jpg'},
            {txt: '我们已经出发了太久，以至于我们忘了为什么要出发。——纪伯伦', pic: 'images/27.jpg'},
            {txt: '水来，我在水中等你；火来，我在灰烬中等你。——《你是我的独家记忆》', pic: 'images/28.jpg'},
            {txt: '天下就没有偶然，那不过是化了妆的，戴了面具的必然。——钱钟书', pic: 'images/29.jpg'}
        ];
        var str,txt,pic,creatDiv;
        for (var i=0;i<30;i++){
            str=$("content_pull").innerHTML;

            txt=json[i].txt;
            pic=json[i].pic;

            creatDiv="<div class='box'>\n" +
                "           <div class='pic' id='pic'>\n" +
                "           <img src="+pic+" alt=''>\n" +
                "           <div class='mask'>\n" +
                "           </div>\n" +
                "           </div>\n" +
                "           <p>"+txt+"</p>\n" +
                "           <div class=\"box-btn\">\n" +
                "           <a href='' class='collect'>采集</a>\n" +
                "           <a href='' class='like'>\n" +
                "           <span class='heart'></span>\n" +
                "           </a>\n" +
                "           </div>\n" +
                "           </div>";

            str=str+creatDiv;
            $("content_pull").innerHTML=str;

        }

        var allbox=document.getElementsByClassName("box");
        var allpic=document.getElementsByClassName("pic");

        for (var j=0;j<allbox.length;j++){
            allbox[j].onmouseover=function () {
                this.childNodes[5].style.display="block";
            }
        }

        for (var j=0;j<allbox.length;j++){
            allbox[j].onmouseout=function () {
                this.childNodes[5].style.display="none";
            }
        }

        for (var j=0;j<allpic.length;j++){
            allpic[j].onmouseover=function () {
                this.childNodes[3].style.display="block";
            }
        }

        for (var j=0;j<allpic.length;j++){
            allpic[j].onmouseout=function () {
                this.childNodes[3].style.display="none";
            }
        }



    }


    function $(id) {
        return typeof id === "string" ? document.getElementById(id):null;

    }




};


