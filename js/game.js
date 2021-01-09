textButton = {"1":["加入棒球隊","不加入棒球隊"],
"2":["繼續去練球","偷懶一下沒關係啦"],
"3":["不要放棄好了……","放棄打棒球吧"],
"4":["算了不要報名學測","還是報名一下"],}

textStories = {
"1" : ["我是小賴，阿美族，今年國一。小時候我爸都會帶我看球，那時候就覺得陳鏞基和張泰山很帥！",
    "後來部落裡的朋友都在打棒球，和他們打著打著，開始覺得如果能當職棒選手也不錯",
    "剛好今年暑假有機會加入棒球隊，爸爸也滿支持的樣子……要加入嗎？"],
"2" : ["朋友：欸欸，整個部落只剩下你沒有加了啦，我都加了，一起去打球啦！（結果還是加了）",
    "在國中棒球隊都打得不錯，現在就要畢業了，是時候該想想我的下一步了。",
    "家人都還滿支持我繼續打球，乾脆……高中繼續打棒球好了！",
    "高中棒球隊的生活好像沒有想像中好玩，每天練習、晨操，真的好無聊。不然…今天晨操要不要偷懶一下呀？"],
"3" : ["學長：幹什麼東西，偷懶？想被打嗎！",
    "唉，雖然乖乖去練球了，但是訓練越來越無聊。而且教練都只管木棒組，鋁棒組也想要好好練習啊。",
    "有的隊友也退隊轉學了。訓練一直這樣，我接下來該怎麼辦？",],
"4" : ["學長：你就堅持一下，訓練上有需要我也可以幫你啦，先把高中打完之後還有機會！",
    "反正不打棒球我也不知道要幹嘛，讀書更無聊吧。",
    "而且學長跟我說再撐一下就好了，再撐一下，我大學就有機會了。",
    "最近學校發下了學測報名表，學測好像是拿來考大學的，我該報名嗎？"],
"5" : ["教練：你把這個錢拿來繳隊費比較實在啦！或是報體保阿，幹嘛報名，浪費錢。",
    "因為練球身體有了傷勢，高中打球的成績也沒特別好，哥哥說這樣根本就不能成為職棒選手。",
    "家裡的經濟不好，好像沒有辦法繼續支撐我打棒球，爸媽也覺得這條路不應該再走下去，應該要去讀有用一點的科系……"]}

images = {"lai": "assets/lai.png", "lai2": "assets/lai2.png", "lai3": "assets/lai3.png", "lai4": "assets/lai4.png", "lai5": "assets/lai5.png",
          "friend": "assets/friend.png", "senpai": "assets/senpai.png", "senpai2": "assets/senpai2.png", "coach": "assets/coach.png"}

function imageChange(main, sub){
    if(main == "1"){
        if(sub == 0){
            imageL.src = images["lai"];
        };
    } else if(main == "2"){
        if(sub == 0){
            imageL.src = "";
            imageM.src = images["friend"];
        } else if(sub == 1){
            imageM.src = "";
            imageL.src = images["lai2"];
        } else if(sub == 3){
            imageL.src = images["lai4"];
            $("#game").css("background-image", "url(assets/bkg2.jpg)");
        };
    } else if(main == "3"){
        if(sub == 0){
            imageL.src = "";
            imageM.src = images["senpai"];
        } else if(sub == 1){
            imageM.src = "";
            imageL.src = images["lai4"];
        };
    } else if(main == "4"){
        if(sub == 0){
            imageL.src = "";
            imageM.src = images["senpai2"];
        } else if(sub == 1){
            imageM.src = "";
            imageL.src = images["lai5"];
        };
    } else if(main == "5"){
        if(sub == 0){
            imageL.src = "";
            imageM.src = images["coach"];
        } else if(sub == 1){
            imageM.src = "";
            imageL.src = images["lai4"];
        };        
    };

};

// 打字機效果
var i = 0;
var txt = "";
var speed = 50;

function storyChange(){
    i = 0;
    document.getElementById("textStory").innerHTML = "";
    txt = textStories[mainStage.toString()][subStage];
    typeWriter();
};

function typeWriter(){
    if (i< txt.length) {
        document.getElementById("textStory").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    };
};

//