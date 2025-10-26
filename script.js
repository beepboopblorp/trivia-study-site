//set info

class info {
    constructor(question, answer) {
        this.q = question;
        this.a = answer;
    }
}

let statenumbers = [new info("alabama", 22), new info("alaska", 49), new info("arizona", 48), new info("arkansas", 25), new info("california", 31), new info("colorado", 38), new info("connecticut", 5), new info("delaware", 1), new info("florida", 27), new info("georgia", 4), new info("hawaii", 50), new info("idaho", 43), new info("illinois", 21), new info("indiana", 19), new info("iowa", 29), new info("kansas", 34), new info("kentucky", 15), new info("louisiana", 18), new info("maine", 23), new info("maryland", 7), new info("massachusetts", 6), new info("michigan", 26), new info("minnesota", 32), new info("mississippi", 20), new info("missouri", 24), new info("montana", 41), new info("nebraska", 37), new info("nevada", 36), new info("new hampshire", 9), new info("new jersey", 3), new info("new mexico", 47), new info("new york", 11), new info("north carolina", 12), new info("north dakota", 39), new info("ohio", 17), new info("oklahoma", 46), new info("oregon", 33), new info("pennsylvania", 2), new info("rhode island", 13), new info("south carolina", 8), new info("south dakota", 40), new info("tennessee", 16), new info("texas", 28), new info("utah", 45), new info("vermont", 14), new info("virginia", 10), new info("washington", 42), new info("west virginia", 35), new info("wisconsin", 30), new info("wyoming", 44)];

let statedates = [new info("alabama", "December 14, 1819"), new info("alaska", "January 3, 1959"), new info("arizona", "February 14, 1912"), new info("arkansas", "June 15, 1836"), new info("california", "September 9, 1850"), new info("colorado", "August 1, 1876"), new info("connecticut", "January 9, 1788"), new info("delaware", "December 7, 1787"), new info("florida", "March 3, 1845"), new info("georgia", "January 2, 1788"), new info("hawaii", "August 21, 1959"), new info("idaho", "July 3, 1890"), new info("illinois", "December 3, 1818"), new info("indiana", "December 11, 1816"), new info("iowa", "December 28, 1846"), new info("kansas", "January 29, 1861"), new info("kentucky", "June 1, 1792"), new info("louisiana", "April 30, 1812"), new info("maine", "March 15, 1820"), new info("maryland", "April 28, 1788"), new info("massachusetts", "February 6, 1788"), new info("michigan", "January 26, 1837"), new info("minnesota", "May 11, 1858"), new info("mississippi", "December 10, 1817"), new info("missouri", "August 10, 1821"), new info("montana", "November 8, 1889"), new info("nebraska", "March 1, 1867"), new info("nevada", "October 31, 1864"), new info("new hampshire", "June 21, 1788"), new info("new jersey", "December 18, 1787"), new info("new mexico", "January 6, 1912"), new info("new york", "July 26, 1788"), new info("north carolina", "November 21, 1789"), new info("north dakota", "November 2, 1889"), new info("ohio", "March 1, 1803"), new info("oklahoma", "November 16, 1907"), new info("oregon", "February 14, 1859"), new info("pennsylvania", "December 12, 1787"), new info("rhode island", "May 29, 1790"), new info("south carolina", "May 23, 1788"), new info("south dakota", "November 2, 1889"), new info("tennessee", "June 1, 1796"), new info("texas", "December 29, 1845"), new info("utah", "January 4, 1896"), new info("vermont", "March 4, 1791"), new info("virginia", "June 25, 1788"), new info("washington", "November 11, 1889"), new info("west virginia", "June 20, 1863"), new info("wisconsin", "May 29, 1848"), new info("wyoming", "July 10, 1890")];

let vitamins = [new info("helps you see at night, make red blood cells, fight off infections, prevent damage to cells, and prevent macular degeneration", "Vitamin A"), new info("helps maintain a healthy nervous system, cannot be stored by the body", "Thiamin/Vitamin B1"), new info("protect cells from damage, helps with energy production, cellular function, and metabolism", "Riboflavin/Vitamin B2"), new info("maintaining the health of your heart, blood vessels, and metabolism, improve cholesterol", "Niacin/Vitamin B3"), new info("helps protect against memory loss, colorectal cancer, and PMS, creation of neurotransmitters", "Vitamin B6"), new info("DNA synthesis, red blood cell formation, and nerve function", "Vitamin B12"), new info("helps your bones, skin, and muscles grow, heals wounds, and produces collagen", "ascorbic acid/Vitamin C"), new info("anti-inflammatory, antioxidant and neuroprotective to support immune health, muscle function, and neuroactivity", "Vitamin D"), new info("protects cells from damage and boost immune system", "Vitamin E"), new info("helps make DNA and prevent brain birth defects", "Folic Acid"), new info("helps clot blood, build bones, and maintain cardiovascular health", "Vitamin K")];

let heraldry = [new info("Generosity", "gold"), new info("Sincerity, Peace, Innocence", "white"), new info("Justice, Sovereignty, Regality", "purple"), new info("Warrior, Martyr, Military Strength", "red"), new info("Strength, Loyalty, Morality", "blue"), new info("Hope, Joy, Loyalty in Love", "green"), new info("Constancy, Grief, Wisdom", "black"), new info("Success, Worthwhile Ambition", "orange"), new info("Victorius, Patient in Battle", "maroon")];

let statethings = [new info("amphibian", "tennessee cave salamander"), new info("beverage", "milk"), new info("bird", "mockingbird"), new info("game bird", "bobwhite quail"), new info("butterfly", "zebra swallowtail"), new info("sport fish", "smallmouth bass"), new info("commerical fish", "channel catfish"), new info("cultivated flower", "iris"), new info("wildflower 1", "passion flower"), new info("wildflower 2", "tennessee coneflower"), new info("fossil", "Pterotrigonia"), new info("fruit", "tomato"), new info("gem", "tennessee river pearl"), new info("horse", "tennessee walking horse"), new info("agricultural insect", "honeybee"), new info("mineral", "agate"), new info("reptile", "eastern box turtle"), new info("rock", "limestone"), new info("tree", "tulip poplar"), new info("evergreen tree", "eastern red cedar"), new info("wild animal", "raccoon"), new info("insect 1", "firefly"), new info("insect 2", "ladybug")];

let keys = [new info("major: 7 sharps", "C sharp"), new info("major: 6 sharps", "F sharp"), new info("major: 5 sharps", "B"), new info("major: 4 sharps", "E"), new info("major: 3 sharps", "A"), new info("major: 2 sharps", "D"), new info("major: 1 sharp", "G"), new info("major: all natural", "C"), new info("major: 1 flat", "F"), new info("major: 2 flats", "B flat"), new info("major: 3 flats", "E flat"), new info("major: 4 flats", "A flat"), new info("major: 5 flats", "D flat"), new info("major: 6 flats", "G flat"), new info("major: 7 flats", "C flat"), new info("minor: 7 sharps", "A sharp"), new info("minor: 6 sharps", "D sharp"), new info("minor: 5 sharps", "G sharp"), new info("minor: 4 sharps", "C sharp"), new info("minor: 3 sharps", "F sharp"), new info("minor: 2 sharps", "B"), new info("minor: 1 sharp", "E"), new info("minor: all natural", "A"), new info("minor: 1 flat", "D"), new info("minor: 2 flats", "G"), new info("minor: 3 flats", "C"), new info("minor: 4 flats", "F"), new info("minor: 5 flats", "B flat"), new info("minor: 6 flats", "E flat"), new info("minor: 7 flats", "A flat")];

let alloys = [new info("iron and less than 2% carbon", "steel"), new info("copper and zinc", "brass"), new info("copper and tin", "bronze"), new info("tin, copper, lead, and antimony", "pewter"), new info("silver and copper", "sterling silver"), new info("iron, chromium, and nickel", "stainless steel"), new info("iron and 2-4% carbon", "cast iron"), new info("copper, tin, and zinc", "gunmetal"), new info("gold and copper", "rose gold"), new info("gold, palladium, nickel, and zinc", "white gold")];

let schemes = [new info("a single color with varying shades and tints", "monochromatic"), new info("one main color with the two colors directly next to it on the color wheel", "analogous"), new info("two colors directly across from each other on the color wheel", "complementary"), new info("one dominant color and the two colors directly adjacent to the dominant color's complement on the color wheel", "split complementary"), new info("three colors equidistant from each other on the color wheel to create a triangle shape", "triadic"), new info("four colors equidistant from each other on the color wheel to create a square shape", "square"), new info("four colors arranged in two complementary pairs", "rectangular/tetradic")];

let operas = [new info("Carmen", "bizet"), new info("Aida", "verdi"), new info("The Ring of Nibelung", "wagner"), new info("Messiah", "handel"), new info("symphony no. 9, 'Choral'", "beethoven"), new info("symphony no. 6, 'Pastoral'", "beethoven"), new info("Symphonie Fantastique", "berlioz"), new info("Nutcracker", "tchaikovsky"), new info("The Rite of Spring", "stravinsky"), new info("Madama Butterfly", "puccini"), new info("Symphony No. 3, 'Eroica'", "beethoven"), new info("The Barber of Seville", "rossini"), new info("Appalachian Spring", "copland"), new info("The Magic Flute", "mozart"), new info("Rigoletto", "verdi"), new info("Don Giovanni", "mozart"), new info("La Boheme", "puccini"), new info("Fidelio", "beethoven"), new info("The Four Seasons", "vivaldi"), new info("Rhapsody in Blue", "gershwin"), new info("The Marriage of Figaro", "mozart"), new info("West Side Story", "bernstein"), new info("Siegfried", "wagner"), new info("Moonlight Sonata", "beethoven"), new info("The Planets", "holst"), new info("Symphony No. 6, 'Pathetique'", "tchaikovsky"), new info("Porgy and Bess", "gershwin"), new info("William Tell", "rossini"), new info("Peter and the Wolf", "prokofiev"), new info("The Song of the Earth", "mahler"), new info("Swan Lake", "tchaikovsky"), new info("The Flying Dutchman", "wagner"), new info("Lohengrin", "wagner"), new info("Bolero", "ravel"), new info("The Phantom of the Opera", "andrew lloyd webber"), new info("Tosca", "puccini"), new info("Turandot", "puccini"), new info("La Triavata", "verdi"), new info("Pictures at an Exhibition", "mussorgsky"), new info("A German Requiem", "brahms"), new info("Symphone No. 94, 'Surprise'", "haydn"), new info("Symphony No. 41, 'Jupiter'", "mozart"), new info("Symphony No. 9, 'From the New World'", "dvorak"), new info("My Fair Lady", "loewe"), new info("Falstaff", "verdi"), new info("Boris Godunov", "mussorgsky"), new info("Cats", "andrew lloyd webber"), new info("Enigma Variations", "elgar"), new info("Salome", "strauss")];

let formulas = [new info("final velocity squared", "(v0)^2 + 2aΔx"), new info("sum of the forces", "ma"), new info("force of gravity between two objects", "Gmm/(r^2)"), new info("force of friction", "μFn"), new info("force of a spring", "-kΔx"), new info("centripetal acceleration", "v^2/r"), new info("kinetic energy", "0.5mv^2"), new info("spring potential energy", "-0.5kx^2"), new info("gravitational potential energy between two objects", "-Gmm/r"), new info("gravitational potential energy between planet and object", "mgh"), new info("average power", "W/t"), new info("instantaneous power", "Fvcosθ"), new info("momentum", "mv"), new info("change in momentum", "FΔt"), new info("torque", "Frsinθ"), new info("period of a spring", "2π√(m/k)"), new info("period of a pendulum", "2π√(l/g)"), new info("density", "m/V"), new info("pressure", "F/A"), new info("fluid pressure", "ρgh"), new info("buoyant force", "ρgV"), new info("force of a charge", "qE"), new info("force between two charges", "1/(4π(ε₀)|qq/r^2|"), new info("change in voltage", "Q/C"), new info("potential energy of a charge", "qV"), new info("potential energy between two charges", "1/(4π(ε₀)|qq/r|"), new info("voltage", "IR"), new info("power", "IV"), new info("resistance of a wire", "ρL/A"), new info("magnetic field strength", "µ₀nI"), new info("magnetic force on a particle", "qvB"), new info("speed of a wave", "fλ"), new info("speed of light", "nv"), new info("sine of angle of refraction of speed of light", "n2/n1")];

let latin = [new info("to the man", "ad hominem"), new info("to infinity", "ad infinitum"), new info("to one's pleasure", "ad libitum"), new info("elsewhere", "alibi"), new info("nurturing mother (a former school or univeristy)", "alma mater"), new info("the year of the lord", "anno domini (AD)"), new info("before the war", "antebellum"), new info("before noon", "ante meridiem (AM)"), new info("after noon", "post meridiem (PM)"), new info("in good faith", "bona fide"), new info("let him beware", "caveat"), new info("with honor", "cum laude"), new info("with great honor", "magna cum laude"), new info("with greatest honor", "suma cum laude"), new info("course of life (a CV or resume)", "curriculum vitae"), new info("in fact/from the fact", "de facto"), new info("by law", "de jure"), new info("god from a machine", "deus ex machina"), new info("therefore", "ergo"), new info("among other things", "et cetera"), new info("you may have the body/bring the body", "habeas corpus"), new info("in place of a parent", "in loco parentis"), new info("in memory", "in memoriam"), new info("in the middle of things (starting a story in the middle of action)", "in media res"), new info("in the original location", "in situ"), new info("in glass/outside a living organism", "in vivo/in vitro"), new info("because of the act itself/inevitably", "ipso facto"), new info("great work", "magnum opus"), new info("through my own fault", "mea culpa"), new info("it does not follow (like in a conversation that goes off topic)", "non sequitor"), new info("per year", "per annum"), new info("per day", "per diem"), new info("per unit of population", "per capita"), new info("for the (public) good", "pro bono"), new info("something for something", "quid pro quo"), new info("rest", "requiem"), new info("current state/condition", "status quo"), new info("solid ground", "terra firma"), new info("exactly the same words", "verbatim"), new info("the other way around", "vice versa"), new info("seize the day", "carpe diem"),
    new info("blank slate", "tabula rasa"), new info("i came, i saw, i conquered", "veni vidi vici"), new info("i think therefore i am", "cogito ergo sum"), new info("juice", "sucus"), new info("i forbid", "veto"), new info("archer", "sagittarius"), new info("oremus", "let us pray"), new info("affidavit", "a sworn written statement"), new info("rest in peace", "resquiat in pace"), new info("at first sight", "prima facie"), new info("used to highlight an important point", "nota bene(NB)"), new info("the thing speaks for itself", "res ipsa loquitur"), new info("for example", "exempli gratia (e.g.)"), new info("that is/in other words", "id est (i.e.)"), new info("after what has been written (in a letter)", "post scriptum (p.s.)"), new info("for the time being", "pro tempore"), new info("and others", "et alii (et al.)"), new info("method of operating", "modus operandi (M.O.)"), new info("let the buyer beware", "caveat emptor"), new info("out of many, one (US Motto)", "E Pluribus Unum"), new info("always faithful (marines motto)", "semper fidelis"), new info("alway ready (coast guard motto)", "semper paratus"), new info("always courageous (unofficial navy motto)", "semper fortis"), new info("always above (space force motto)", "semper supra"), new info("always beware","semper caveo"), new info("always more", "semper maior"), new info("always first", "semper primus"), new info("always forward", "semper avanti"), new info("always vigilant", "semper vigilo")];

let tech = [new info("CPU", "central processing unit"), new info("GPU", "graphical processing unit"), new info("RAM", "random access memory"), new info("ROM", "read only memory"), new info("SSD", "solid state drive"), new info("HDD", "hard disk drive"), new info("BIOS", "basic input/output system"), new info("LCD", "liquid crystal display"), new info("LED", "light emitting diode"), new info("OLED", "organic light emitting diode"), new info("UPS", "uninterruptible power supply"), new info("SIM", "subscriber identity module"), new info("IP", "internet protocol"), new info("TCP/IP", "transmission control protocol/internet protocol"), new info("LAN", "local area network"), new info("WAN", "wide area network"), new info("Wi-Fi", "wireless fidelity"), new info("DNS", "domain name system"), new info("VPN", "virtual private network"), new info("HTTP", "hypertext transfer protocol"), new info("HTTPS", "hypertext transfer protocol secure"), new info("FTP", "file transfer protocol"), new info("URL", "uniform resource locator"), new info("IoT", "internet of things"), new info("NIC", "network interface card"), new info("HTML", "hypertext markup language"), new info("CSS", "cascading style sheets"), new info("API", "application program interface"), new info("UI", "user interface"), new info("GUI", "graphical user interface"), new info("HDMI", "high definition multimedia interface"), new info("USB", "universal serial bus"), new info("OS", "operating system"), new info("DOS", "disk operating system"), new info("VGA", "video graphics array"), new info("PDF", "portable document format"), new info("SQL", "structured query language"), new info("IT", "information technology"), new info("IC", "integrated circuit"), new info("DSP", "digital signal processor"), new info("MOSFET", "metal oxide semiconductor field effect transistor"), new info("JFET", "junction field effect transistor"), new info("GPIO", "general purpose input/output"), new info("EMI", "electromagnetic interference"), new info("ESD", "electrostatic discharge"),
    new info("MCU", "microcontroller unit"), new info("MMU", "memory management unit"), new info("AWG", "american wire gauge"), new info("ASCII", "american standard code for information interchange"), new info("CRT", "cathode ray tube"), new info("DAC", "digital to analog converter"), new info("DVD", "digital video disk"), new info("FDD", "floppy disk drive"), new info("I/O", "input/output"), new info("HFS", "hierarchical file system"), new info("RTC", "real time clock"), new info("VCR", "video cassette recorder")];

let pqbank = []; 
let rownum, colnum;

/*fetch("https://docs.google.com/spreadsheets/d/1oiQXvLxJO8WXE9OADI4Ss1_znS-WPgpU0-o_ZeyWoWs/gviz/tq?sheet=Sheet1")
.then(response => response.text())
.then(data => {
    let questions = data.split("setResponse(")[1].slice(0,this.length - 2);
    questions = JSON.parse(questions);
    rownum = questions.table.rows.length;
    colnum = questions.table.cols.length;
    for(i = 0; i < colnum; i+=2) {
        for(j = 0; j < rownum; j++) {
            if(questions.table.rows[j].c[i] && questions.table.rows[j].c[i].v){
                pqbank.push(new info(questions.table.rows[j].c[i].v, questions.table.rows[j].c[i+1].v));
            }
        }
    }
})
.catch(error => console.error(error));*/

//select question types
let topicselect = document.getElementsByClassName("topicselect");
let topic;
let clickedtopic;

for (let i = 0; i < topicselect.length; i++) {
    if (topicselect[i]) {
        topicselect[i].addEventListener("click", clickybutton);
    }
}

function clickybutton() {
    if (!clickedtopic) {
        clickedtopic = this.value;
        this.style.backgroundColor = "white";
        this.style.color = "rebeccapurple";
        document.getElementById("choosetype").style.display = "inline";
        switch (clickedtopic) {
            case "statenumbers":
                topic = statenumbers;
                break;
            case "statedates":
                topic = statedates;
                break;
            case "vitamins":
                topic = vitamins;
                break;
            case "musicals":
                topic = musicals;
                break;
            case "heraldry":
                topic = heraldry;
                break;
            case "statethings":
                topic = statethings;
                break;
            case "keys":
                topic = keys;
                break;
            case "alloys":
                topic = alloys;
                break;
            case "schemes":
                topic = schemes;
                break;
            case "operas":
                topic = operas;
                break;
            case "formulas":
                topic = formulas;
                break;
            case "latin":
                topic = latin;
                break;
            case "tech":
                topic = tech;
                break;
            case "pqbank":
                fetch("https://docs.google.com/spreadsheets/d/1oiQXvLxJO8WXE9OADI4Ss1_znS-WPgpU0-o_ZeyWoWs/gviz/tq?sheet=Sheet1")
                .then(response => response.text())
                .then(data => {
                    let questions = data.split("setResponse(")[1].slice(0,this.length - 2);
                    questions = JSON.parse(questions);
                    rownum = questions.table.rows.length;
                    colnum = questions.table.cols.length;
                    for(i = 0; i < colnum; i+=2) {
                        for(j = 0; j < rownum; j++) {
                            if(questions.table.rows[j].c[i] && questions.table.rows[j].c[i].v){
                                pqbank.push(new info(questions.table.rows[j].c[i].v, questions.table.rows[j].c[i+1].v));
                            }
                        }
                    }
                })
                .catch(error => console.error(error));
                topic = pqbank;
                break;
        }
    }
}

let typeselect = document.getElementsByClassName("typechoose");
let types = [];
let clickedtype;

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
    }
}
let endchooses = document.getElementsByClassName("chooseend");
for(i=0; i<endchooses.length; i++) {
    if (document.getElementsByClassName("chooseend")[i]) {
        document.getElementsByClassName("chooseend")[i].addEventListener("click", endchooseclicked);
    }
}

let chosenend;
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
    }
}

let endingtype;
//random game stuff
let randq;
let randnum;
let lastnum;
let lastfive = ["", "", "", "", ""];
let lastten = ["", "", "", "", "", "", "", "", "", ""];
let acceptableq = true;

if (clickedtopic == "pqbank") {
    lastnum = lastten;
} else {
    lastnum = lastfive;
}

let ca;
let mcqc = [1, 2, 3, 4];

if (document.getElementById("start-random")) {
    document.getElementById("start-random").addEventListener("click", random_gameplay);
}

if (document.getElementById("start-order")) {
    document.getElementById("start-order").addEventListener("click", order_gameplay);
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
    document.getElementById("prestart").style.display = "none";
    document.getElementById("SA").style.display = "none";
    document.getElementById("questionthings").style.display = "inline";
    document.getElementById("MC").style.display = "none";
    document.getElementById("showoptions").style.color = "white";
    document.getElementById("showoptions").style.backgroundColor = "rebeccapurple";

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

let qredo;
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
let ic = 0; //incorrectcounter

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

let questionsdone = [];

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
}

//begin again

if (document.getElementById("returntostart")) {
    document.getElementById("returntostart").addEventListener("click", beginagain)
}

function beginagain() {
    topicselect = document.getElementsByClassName("topicselect");
    topic = "";
    clickedtopic = "";
    typeselect = document.getElementsByClassName("typechoose");
    types = [];
    clickedtype = "";
    endchooses = document.getElementsByClassName("chooseend");
    chosenend = "";
    endingtype = "";
    randq = "";
    randnum = "";
    lastnum = "";
    lastfive = ["", "", "", "", ""];
    lastten = ["", "", "", "", "", "", "", "", "", ""];
    acceptableq = true;
    ca;
    mcqc = [1, 2, 3, 4];
    ic = 0;
    questionsdone = [];
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