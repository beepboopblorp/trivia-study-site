const spreadsheet_id = '1oiQXvLxJO8WXE9OADI4Ss1_znS-WPgpU0-o_ZeyWoWs';
let pqbank = [], questionsdone = [], types = [], topicnames = [], topicinfo = [];
let rownum, colnum, qredo, ca, endingtype, randq, randnum, lastnum, topic, clickedtopic, clickedtype, chosenend, topicselect;
let ic = 0; //incorrectcounter
let acceptableq = true, pqfetched = false, topicsfetched = false, topicspopulated = false;
let mcqc = [1, 2, 3, 4];
let lastfive = ["", "", "", "", ""];
let lastten = ["", "", "", "", "", "", "", "", "", ""];
let typeselect = document.getElementsByClassName("typechoose");
let endchooses = document.getElementsByClassName("chooseend");

class info {
    constructor(question, answer) {
        this.q = question;
        this.a = answer;
    }
}

fetchtopics();

async function fetchpq() {
    if(!pqfetched) {
        let response = await fetch(`https://trivia-study-site.vercel.app/api/questions`);
        let data = await response.json();
        for(let i=0; i<data.questions.length; i++) {
            pqbank.push(new info(data.questions[i].Question, data.questions[i].Answer));
        }
        pqfetched = true;
    }
}

async function fetchtopics() {
    document.getElementById("loading").style.display = "inline";
    if(!topicsfetched) {
        let response = await fetch('https://trivia-study-site.vercel.app/api/topics');
        let data = await response.json();
        topicnames = data.thetopicnames;
        for(let i=0; i<data.thetopicinfo.length; i++) {
            let temparray = [];
            for(let j=0; j<data.thetopicinfo[i].length; j++) {
                temparray.push(new info(data.thetopicinfo[i][j].Question, data.thetopicinfo[i][j].Answer));
            }
            topicinfo.push(temparray);
        }
        topicsfetched = true;
    }
    if(!topicspopulated) {
        populatetopics();
    }
}

function populatetopics() {
    let div = document.getElementById('choosetopic');
    for(let i=0; i < topicnames.length; i++) {
        div.innerHTML += `<button class="topicselect" value="${topicnames[i]}"> ${topicnames[i]} </button>`;
    }
    topicselect = document.getElementsByClassName("topicselect");
    for (let i = 0; i < topicselect.length; i++) {
        if (topicselect[i]) {
            topicselect[i].addEventListener("click", clickybutton);
        }
    }
    document.getElementById("loading").style.display = "none";
    document.getElementById("prestart").style.display = "inline";
}

function settopic() {
    document.getElementById("prestart").style.display = "none";
    document.getElementById("loading").style.display = "inline";
    if (clickedtopic == 'pqbank') {
        fetchpq().then(() => topic = pqbank).then(() => {
            if(chosenend == 'random') {
                random_gameplay();
            } else if (chosenend == 'order') {
                order_gameplay();
            }
        });
    } else {
        for(let i=0; i<topicnames.length; i++) {
            if(clickedtopic == topicnames[i]) {
                topic = topicinfo[i];
                break;
            }
        }
        if(chosenend == 'random') {
            random_gameplay();
        } else if (chosenend == 'order') {
            order_gameplay();
        }
    }
}

function clickybutton() {
    if (!clickedtopic) {
        clickedtopic = this.value;
        this.style.backgroundColor = "white";
        this.style.color = "rebeccapurple";
        document.getElementById("choosetype").style.display = "inline";
    } else {
        resetchoice('topic');
        clickybutton();
    }
}

for (let i = 0; i < typeselect.length; i++) {
    types.push(typeselect[i].value);
    if (typeselect[i]) {
        typeselect[i].addEventListener("click", clickabutton);
    }
}

function clickabutton() {
    if (!clickedtype) {
        clickedtype = this.value;
        this.style.backgroundColor = "white";
        this.style.color = "rebeccapurple";

        document.getElementById("endchoose").style.display = "inline";
    } else {
        resetchoice('type');
        clickabutton();
    }
}

function resetchoice(choicetype) {
    if(choicetype == 'topic') {
        clickedtopic = "";
        for(let i=0; i < topicselect.length; i++) {
            topicselect[i].style.backgroundColor = 'rebeccapurple';
            topicselect[i].style.color = 'white';
        }
    } else if (choicetype == 'type') {
        clickedtype = "";
        for(let i=0; i < typeselect.length; i++) {
            typeselect[i].style.backgroundColor = 'rebeccapurple';
            typeselect[i].style.color = 'white';
        }
    } else if (choicetype == 'end') {
        chosenend = "";
        for(let i=0; i < endchooses.length; i++) {
            endchooses[i].style.backgroundColor = 'rebeccapurple';
            endchooses[i].style.color = 'white';
        }
        document.getElementById("start-random").style.display = "none";
        document.getElementById("start-order").style.display = "none";
    }
}

for(i=0; i<endchooses.length; i++) {
    if (document.getElementsByClassName("chooseend")[i]) {
        document.getElementsByClassName("chooseend")[i].addEventListener("click", endchooseclicked);
    }
}

function endchooseclicked() {
    if (!chosenend) {
        chosenend = this.value;
        this.style.backgroundColor = "white";
        this.style.color = "rebeccapurple";
        if(chosenend == "random") {
            document.getElementById("start-random").style.display = "inline";
        } else if(chosenend == "order") {
            document.getElementById("start-order").style.display = "inline";
        }
    } else {
        resetchoice('end');
        endchooseclicked();
    }
}

//random game stuff
if (document.getElementById("start-random")) {
    document.getElementById("start-random").addEventListener("click", settopic);
}

if (document.getElementById("start-order")) {
    document.getElementById("start-order").addEventListener("click", settopic);
}

if (document.getElementById("showoptions")) {
    document.getElementById("showoptions").addEventListener("click", () => {
        if(document.getElementById("showoptions").style.color == "white") {
            document.getElementById("showoptions").style.color = "rebeccapurple";
            document.getElementById("showoptions").style.backgroundColor = "white";
            document.getElementById("MC").style.display = "inline";
        } else {
            document.getElementById("showoptions").style.color = "white";
            document.getElementById("showoptions").style.backgroundColor = "rebeccapurple";
            document.getElementById("MC").style.display = "none";
        }
    })
}

function random_gameplay() {
    endingtype = "random";
    document.getElementById("SA").style.display = "none";
    document.getElementById("questionthings").style.display = "inline";
    document.getElementById("MC").style.display = "none";
    document.getElementById("showoptions").style.color = "white";
    document.getElementById("showoptions").style.backgroundColor = "rebeccapurple";

    if (clickedtopic == "pqbank") {
        lastnum = lastten;
    } else {
        lastnum = lastfive;
    }

    do {
        randq = Math.floor(Math.random() * topic.length);
        if(!lastnum.includes(randq)) {
            acceptableq = true;
        } else {
            acceptableq = false;
        }
    } while (!acceptableq)

    if (acceptableq) {
        lastnum.push(randq);
        lastnum.splice(0, 1);
        document.getElementById("qask").innerText = topic[randq].q;
        if (clickedtype == "MCQ") {
            ca = Math.floor(Math.random() * 4);
            document.getElementById("answer" + (ca + 1)).innerText = topic[randq].a;
            mcqc.splice(ca, 1);
            let i = 0;
            while (i < 3) {
                randnum = Math.floor(Math.random() * topic.length);
                if ((topic[randnum].a != document.getElementById("answer1").innerText) && (topic[randnum].a != document.getElementById("answer2").innerText) && (topic[randnum].a != document.getElementById("answer3").innerText) && (topic[randnum].a != document.getElementById("answer4").innerText)) {
                    document.getElementById("answer" + mcqc[i]).innerText = topic[randnum].a;
                    i++
                }
            }
        } else if (clickedtype == "SAQ") {
            document.getElementById("SA").style.display = "inline";
            document.getElementById("MC").style.display = "none";
        }
    }
    document.getElementById("loading").style.display = "none";
}

//check mcq answers
function mcqreset() {
    mcqc = [1, 2, 3, 4];
    for (let i = 0; i < 4; i++) {
        document.getElementById("answer" + (i + 1)).style.backgroundColor = "rebeccapurple";
    }
    if (endingtype == "random") {
        random_gameplay();
    } else if (endingtype == "order") {
        order_gameplay();
    }
}

for (let i = 0; i < 4; i++) {
    if (document.getElementById("answer" + (i + 1))) {
        document.getElementById("answer" + (i + 1)).addEventListener("click", checkmcq);
    }
}

function checkmcq() {
    if (this.innerText == topic[randq].a) {
        this.style.backgroundColor = "green";
        setTimeout(mcqreset, 1000);
    } else {
        this.style.backgroundColor = "red";
        for (i=0;i<topic.length;i++) {
            if(topic[i].q == document.getElementById("qask").innerText) {
                qredo = i;
            }
        }
        for(i=0;i<questionsdone.length;i++){
            if(questionsdone[i] == qredo) {
                questionsdone.splice(i, 1);
            }
        }
    }
}

//check saq answers
if (document.getElementById("check")) {
    document.getElementById("check").addEventListener("click", checksaq);
}

function checksaq() {
    if (document.getElementById("saqans").value == topic[randq].a) {
        document.getElementById("statecorrect").style.color = "green";
        document.getElementById("statecorrect").innerText = "CORRECT";
        setTimeout(saqreset, 1000);
    } else {
        document.getElementById("statecorrect").style.color = "red";
        document.getElementById("statecorrect").innerText = "INCORRECT";
        ic++;
        if (ic >= 3) {
            document.getElementById("statecorrect").innerText = ("INCORRECT; CORRECT ANSWER: " + topic[randq].a);
            setTimeout(saqreset, 1000);
        } else {
            setTimeout(() => {
                document.getElementById("saqans").value = "";
                document.getElementById("statecorrect").innerText = "";
            }, 1000);
        }
    }
}

function saqreset() {
    document.getElementById("saqans").value = "";
    ic = 0;
    document.getElementById("statecorrect").innerText = "";
    if (endingtype == "random") {
        random_gameplay();
    } else if (endingtype == "order") {
        order_gameplay();
    }
}

//order game stuff
function order_gameplay() {
    endingtype = "order";
    document.getElementById("prestart").style.display = "none";
    document.getElementById("SA").style.display = "none";
    document.getElementById("questionthings").style.display = "inline";
    document.getElementById("MC").style.display = "none";
    document.getElementById("showoptions").style.color = "white";
    document.getElementById("showoptions").style.backgroundColor = "rebeccapurple";
    
    do {
        randq = Math.floor(Math.random() * topic.length);
        if (questionsdone.includes(randq)) {
            acceptableq = false;
            if (questionsdone.length == topic.length) {
                document.getElementById("prestart").style.display = "none";
                document.getElementById("questionthings").style.display = "none";
                document.getElementById("endofgame").style.display = "inline";
                acceptableq = true;
            }
        } else {
            acceptableq = true;
            questionsdone.push(randq);
        }
    } while (!acceptableq)
    
    document.getElementById("qask").innerText = topic[randq].q;
    
    if (clickedtype == "MCQ") {
        ca = Math.floor(Math.random() * 4);
        document.getElementById("answer" + (ca + 1)).innerText = topic[randq].a;
        mcqc.splice(ca, 1);
        let i = 0;
        while (i < 3) {
            randnum = Math.floor(Math.random() * topic.length);
            if ((topic[randnum].a != document.getElementById("answer1").innerText) && (topic[randnum].a != document.getElementById("answer2").innerText) && (topic[randnum].a != document.getElementById("answer3").innerText) && (topic[randnum].a != document.getElementById("answer4").innerText)) {
                document.getElementById("answer" + mcqc[i]).innerText = topic[randnum].a;
                i++
            }
        }
    } else if (clickedtype == "SAQ") {
        document.getElementById("SA").style.display = "inline";
        document.getElementById("MC").style.display = "none";
    }
    document.getElementById("loading").style.display = "none";
}

//begin again
if (document.getElementById("returntostart")) {
    document.getElementById("returntostart").addEventListener("click", beginagain)
}

function beginagain() {
    clickedtopic = "";
    clickedtype = "";
    chosenend = "";
    endingtype = "";
    randq = "";
    randnum = "";
    lastnum = "";
    ca = "";
    types = [];
    questionsdone = [];
    lastfive = ["", "", "", "", ""];
    lastten = ["", "", "", "", "", "", "", "", "", ""];
    acceptableq = true;
    mcqc = [1, 2, 3, 4];
    ic = 0;
    for (i=0; i<document.getElementsByTagName("button").length; i++) {
        document.getElementsByTagName("button")[i].style.backgroundColor = "rebeccapurple";
        document.getElementsByTagName("button")[i].style.color = "white";
    }
    document.getElementById("choosetype").style.display = "none";
    document.getElementById("endchoose").style.display = "none";
    document.getElementById("questionthings").style.display = "none";
    document.getElementById("start-random").style.display = "none";
    document.getElementById("start-order").style.display = "none";
    document.getElementById("endofgame").style.display = "none";
    document.getElementById("prestart").style.display = "inline";
}