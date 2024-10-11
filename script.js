//select question types

let topicselect = document.getElementsByClassName("topicselect");
let topic;
let clickedtopic;

for (let i=0; i<topicselect.length; i++) {
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
            case "sciencebranches":
                topic = sciencebranches;
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
            case "pqbank":
                topic = pqbank;
                break;
        }
    }
}

let typeselect = document.getElementsByClassName("typechoose");
let types = [];
let clickedtype;

for (let i=0; i<typeselect.length; i++) {
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
        document.getElementById("start").style.display = "inline";
    }
}

//set info

class info {
    constructor(question, answer) {
        this.q = question;
        this.a = answer;
    }
}

let statenumbers = [new info("alabama",22), new info("alaska",49), new info("arizona",48), new info("arkansas",25), new info("california",31), new info("colorado",38), new info("connecticut",5), new info("delaware",1), new info("florida",27), new info("georgia",4), new info("hawaii",50), new info("idaho",43), new info("illinois",21), new info("indiana",19), new info("iowa",29), new info("kansas",34), new info("kentucky",15), new info("louisiana",18), new info("maine",23), new info("maryland",7), new info("massachusetts",6), new info("michigan",26), new info("minnesota",32), new info("mississippi",20), new info("missouri",24), new info("montana",41), new info("nebraska",37), new info("nevada",36), new info("new hampshire",9), new info("new jersey",3), new info("new mexico",47), new info("new york",11), new info("north carolina",12), new info("north dakota",39), new info("ohio",17), new info("oklahoma",46), new info("oregon",33), new info("pennsylvania",2), new info("rhode island",13), new info("south carolina",8), new info("south dakota",40), new info("tennessee",16), new info("texas",28), new info("utah",45), new info("vermont",14), new info("virginia",10), new info("washington",42), new info("west virginia",35), new info("wisconsin",30), new info("wyoming",44)];

let sciencebranches = [new info("The study of ticks and mites", "Acarology"), new info("The study of the effects of radiation on living organisms", "Actinobiology"), new info("The study of the effect of light on chemicals", "Actinology"), new info("studies organic particles transported by the air", "Aerobiology"), new info("The study of the atmosphere", "Aerology"), new info("The study of the causes of disease", "Aetiology"), new info("the study of plant nutrition and growth related to soil", "agrobiology"), new info("The branch of soil science dealing with the production of crops", "Agrology"), new info("study of grasses", "agrostology"), new info("the study of the causes and treatment of allergies", "allergology"), new info("the study of male health", "andrology"), new info("study of anesthesia and anesthetics", "anesthesiology"), new info("The study of the anatomy of blood and lymph vascular systems", "angiology"), new info("study of humans", "anthropology"), new info("study of bees", "apiology"), new info("study of spiders", "arachnology"), new info("study of past cultures", "archaeology"), new info("study of relationships between humans and animals over time", "archaezoology"), new info("study of Mars", "areology"), new info("study of crawfish", "astacology"), new info("study of the origin of life", "astrobiology"), new info("study of the geology of celestial bodies", "astrogeology"), new info("study of hearing", "audiology"), new info("study of the ecology of individual organisms", "autecology"), new info("study of bacteria", "bacteriology"), new info("study of the interaction of life in the environment", "bioecology"), new info("study of life", "biology"), new info("study of food", "bromatology"), new info("study of the heart", "cardiology"), new info("study of tooth decay", "cariology"), new info("study of cetaceans (ie. whales, dolphins, porpoises)", "cetology"), new info("study of the climate", "climatology"), new info("study of beetles", "coleopterology"), new info("study of mollusc shells", "conchology"), new info("study of dust in the atmosphere and its effects", "coniology"), new info("study of the characteristics of the skull", "craniology"), new info("study of crime", "criminology"), new info("study of very low temperatures and related phenomena", "cryology"), new info("study of dogs", "cynology"), new info("study of cells", "cytology"), new info("study of the structure of cells", "cytomorphology"), new info("studies diseases on the cellular level", "cytopathology"), new info("study of the age of trees and the records in their rings", "dendrochronology"), new info("study of trees", "dendrology"), new info("study of skin", "dermatology"), new info("study of skin diseases at a microscopic and molecular level", "dermatopathology"), new info("study of ligaments", "desmology"), new info("study of diabetes", "diabetology"), new info("study of flies", "dipterology"), new info("study of interactions between organisms and the water cycle", "ecohydrology"), new info("study of relationships between living things and their environment", "ecology"), new info("study of how the environment affects the physiology of an organism", "ecophysiology"), new info("studies the influence of soil on life", "edaphology"), new info("study of the relationship between electric phenomena and bodily processes", "electrophysiology"), new info("study of embryos", "embryology"), new info("study of the endocrine system", "endocrinology"), new info("study of insects", "entomology"), new info("study of enzymes", "enzymology"), new info("study of the origin and spread of diseases", "epidemiology"), new info("study of animal behavior", "ethology"), new info("study of life in outer space", "exobiology"), new info("study of cats", "felinology"), new info("study of the fetus", "fetology"), new info("study of ants (latin origin)", "formicology"), new info("study of the stomach and intestines", "gastrology"), new info("study of gemstones", "gemology"), new info("studies the interactions between the physical Earth and the biosphere", "geobiology"), new info("study of the timeline of Earth events", "geochronology"), new info("study of the Earth", "geology"), new info("study of present-day landforms", "geomorphology"), new info("study of old age", "gerontology"), new info("study of glaciers", "glaciology"), new info("study of medicine relating to women", "gynecology"), new info("study of blood","hematology"), new info("study of the sun", "heliology"), new info("study of vibrations and oscillations in the sun", "helioseismology"), new info("study of parasitic worms", "helminthology"), new info("study of the liver", "hepatology"), new info("study of the medicinal use of plants", "herbology"), new info("study of reptiles and amphibians", "herpetology"), new info("study of horses", "hippology"), new info("study of living tissues", "histology"), new info("study of the microscopic structure of diseased tissue", "histopathology"), new info("study of underground water", "hydrogeology"), new info("study of water", "hydrology"), new info("study of traces left behind by living things", "ichnology"), new info("study of fish", "ichthyology"), new info("study of the immune system", "immunology"), new info("study of chromosomes", "karyology"), new info("study of movement in relation to human anatomy", "kinesiology"), new info("study of waves and wave motions", "kymatology"), new info("study of the larynx", "larynology"), new info("study of butterflies and moths", "lepidopterology"), new info("study of freshwater environments", "limnology"), new info("study of rocks", "lithology"), new info("study of the lymph system and glands", "lymphology"), new info("study of mollusks", "malacology"), new info("study of mammals", "mammalogy"), new info("study of weather", "meteorology"), new info("study of methods", "methodology"), new info("study of measurement", "metrology"), new info("study of micro-organisms", "microbiology"), new info("study of preparing and handling microscopic objects", "micrology"), new info("study of minerals", "mineralogy"), new info("study of fungi", "mycology"), new info("study of muscles", "myology"), new info("study of ants (greek origin)", "myrmecology"), new info("study of the study of manipulating matter at the nanoscale to create technology", "nanotechnology"), new info("study of friction on the molecular and atomic scale", "nanotribiology"), new info("study of roundworms or nematodes", "nematology"), new info("study of newborn infants", "neonatology"), new info("study of clouds", "nephology"), new info("study of kidneys", "nephrology"), new info("study of the nervous system", "neurology"), new info("study of neural diseases", "neuropathology"), new info("study of the physical function of the nervous system", "neurophysiology"), new info("study of disease classification", "nosology"), new info("study of oceans", "oceanology"), new info("study of dragonflies and damselflies", "odonatology"), new info("study of the teeth", "odontology"), new info("study of cancer", "oncology"), new info("study of eggs", "oology"), new info("study of the eyes", "opthalmology"), new info("study of birds", "ornithology"), new info("study of mountains and their mapping", "orology"), new info("study of grasshoppers and crickets", "orthopterology"), new info("study of bones", "osteology"), new info("study of the ear", "otology"), new info("study of fossils of ancient life", "paleontology"), new info("study of pollen", "palynology"), new info("study of paranormal or psychic phenomena that defy conventional scientific explanations", "parapsychology"), new info("study of parasites, parasitology"), new info("study of illness and disease", "pathology"), new info("study of rocks, their formation, and their composition", "petrology"), new info("study of drugs", "pharmacology"), new info("study of periodic biological phenomena", "phenology"), new info("study of vein diseases", "phlebology"), new info("study of vocal sounds", "phonology"), new info("study of algae", "phycology"), new info("physiology", "study of the functions of living organisms"), new info("study of plants and their broader applications", "phytology"), new info("study of planets and solar systems", "planetology"), new info("study of plankton", "planktology"), new info("study of fruits", "pomology"), new info("study of drug dosage", "posology"), new info("study of non-human primates", "primatology"), new info("study of the lungs and respiratory tract", "pulminology"), new info("study of rays, especially ionizing radiation", "radiology"), new info("study of reflexes or reflex responses", "reflexology"), new info("study of the flow of matter", "rheology"), new info("study of rheumatic diseases", "rheumatology"), new info("study of the nose", "rhinology"), new info("study of soft tissues", "sarcology"), new info("study of sediments", "sedimentology"), new info("study of earthquakes", "seismology"), new info("study of the moon", "selenology"), new info("study of blood serum", "serology"), new info("study of diet", "sitiology"), new info("study of society", "sociology"), new info("study of human characteristics", "somatology"), new info("stdy of sleep", "somnology"), new info("study of caves", "speleology"), new info("sutdy of the mouth", "stomatology"), new info("study of ecological interrelationships", "synecology"), new info("study of heat", "thermology"), new info("study of childbirth", "tocology"), new info("study of poisons", "toxicology"), new info("study of wounds and injuries", "traumatology"), new info("study of hair and scalp", "trichology"), new info("study of classification", "typology"), new info("study of the urinary system and urogenital tract", "urology"), new info("study of vaccines", "vaccinology"), new info("study of viruses", "virology"), new info("study of volcanoes", "volcanology"), new info("study of non-terrestrial life", "xenobiology"), new info("study of wood", "xylology"), new info("study of animals", "zoology"), new info("study of fermentation", "zymology")];

let vitamins = [new info("helps you see at night, make red blood cells, fight off infections, prevent damage to cells, and prevent macular degeneration", "Vitamin A"), new info("helps maintain a healthy nervous system, cannot be stored by the body", "Thiamin/Vitamin B1"), new info("protect cells from damage, helps with energy production, cellular function, and metabolism", "Riboflavin/Vitamin B2"), new info("maintaining the health of your heart, blood vessels, and metabolism, improve cholesterol", "Niacin/Vitamin B3"), new info("helps protect against memory loss, colorectal cancer, and PMS, creation of neurotransmitters", "Vitamin B6"), new info("DNA synthesis, red blood cell formation, and nerve function", "Vitamin B12"), new info("helps your bones, skin, and muscles grow, heals wounds, and produces collagen", "ascorbic acid/Vitamin C"), new info("anti-inflammatory, antioxidant and neuroprotective to support immune health, muscle function, and neuroactivity", "Vitamin D"), new info("protects cells from damage and boost immune system", "Vitamin E"), new info("helps make DNA and prevent brain birth defects", "Folic Acid"), new info("helps clot blood, build bones, and maintain cardiovascular health", "Vitamin K")];

let heraldry = [new info("Generosity", "gold"), new info("Sincerity, Peace, Innocence", "white"), new info("Justice, Sovereignty, Regality", "purple"), new info("Warrior, Martyr, Military Strength", "red"), new info("Strength, Loyalty, Morality", "blue"), new info("Hope, Joy, Loyalty in Love", "green"), new info("Constancy, Grief, Wisdom", "black"), new info("Success, Worthwhile Ambition", "orange"), new info("Victorius, Patient in Battle","maroon")];

let statethings = [new info("amphibian", "tennessee cave salamander"), new info("beverage", "milk"), new info("bird", "mockingbird"), new info("game bird", "bobwhite quail"), new info("butterfly", "zebra swallowtail"), new info("sport fish", "smallmouth bass"), new info("commerical fish", "channel catfish"), new info("cultivated flower", "iris"), new info("wildflower 1", "passion flower"), new info("wildflower 2", "tennessee coneflower"), new info("fossil", "Pterotrigonia"), new info("fruit", "tomato"), new info("gem", "tennessee river pearl"), new info("horse", "tennessee walking horse"), new info("agricultural insect", "honeybee"), new info("mineral", "agate"), new info("reptile", "eastern box turtle"), new info("rock", "limestone"), new info("tree", "tulip poplar"), new info("evergreen tree", "eastern red cedar"), new info("wild animal", "raccoon"), new info("insect 1", "Firefly"), new info("insect 2", "ladybug")];

let keys = [new info("major: 7 sharps", "C sharp"), new info("major: 6 sharps", "F sharp"), new info("major: 5 sharps", "B"), new info("major: 4 sharps", "E"), new info("major: 3 sharps", "A"), new info("major: 2 sharps", "D"), new info("major: 1 sharp", "G"), new info("major: all natural", "C"), new info("major: 1 flat", "F"), new info("major: 2 flats", "B flat"), new info("major: 3 flats", "E flat"), new info("major: 4 flats", "A flat"), new info("major: 5 flats", "D flat"), new info("major: 6 flats", "G flat"), new info("major: 7 flats", "C flat"), new info("minor: 7 sharps", "A sharp"), new info("minor: 6 sharps", "D sharp"), new info("minor: 5 sharps", "G sharp"), new info("minor: 4 sharps", "C sharp"), new info("minor: 3 sharps", "F sharp"), new info("minor: 2 sharps", "B"), new info("minor: 1 sharp", "E"), new info("minor: all natural", "A"), new info("minor: 1 flat", "D"), new info("minor: 2 flats", "G"), new info("minor: 3 flats", "C"), new info("minor: 4 flats", "F"), new info("minor: 5 flats", "B flat"), new info("minor: 6 flats", "E flat"), new info("minor: 7 flats", "A flat")];

let alloys = [new info("iron and less than 2% carbon", "steel"), new info("copper and zinc", "brass"), new info("copper and tin", "bronze"), new info("tin, copper, lead, and antimony", "pewter"), new info("silver and copper", "sterling silver"), new info("iron, chromium, and nickel", "stainless steel"), new info("iron and 2-4% carbon", "cast iron"), new info("copper, tin, and zinc", "gunmetal"), new info("gold and copper", "rose gold"), new info("gold, palladium, nickel, and zinc", "white gold")];

let schemes = [new info("a single color with varying shades and tints", "monochromatic"), new info("one main color with the two colors directly next to it on the color wheel", "analogous"), new info("two colors directly across from each other on the color wheel", "complementary"), new info("one dominant color and the two colors directly adjacent to the dominant color's complement on the color wheel", "split complementary"), new info("three colors equidistant from each other on the color wheel to create a triangle shape", "triadic"), new info("four colors equidistant from each other on the color wheel to create a square shape", "square"), new info("four colors arranged in two complementary pairs", "rectangular/tetradic")];

let pqbank = [];

//game stuff
let randq;
let randnum;

let ca;
let mcqc = [1,2,3,4];

if(document.getElementById("start")) {
    document.getElementById("start").addEventListener("click",gameplay);
}

function gameplay(){
    document.getElementById("prestart").style.display = "none";
    document.getElementById("SA").style.display = "none";
    document.getElementById("questionthings").style.display = "inline";
    
    randq = Math.floor(Math.random() * topic.length);
    document.getElementById("qask").innerText = topic[randq].q;
    if (clickedtype == "MCQ") {
        ca = Math.floor(Math.random() * 4);
        document.getElementById("answer" + (ca + 1)).innerText = topic[randq].a;
        mcqc.splice(ca,1);
        let i=0;
        while (i < 3) {
            randnum = Math.floor(Math.random() * topic.length);
            if (topic[randnum].a != (document.getElementById("answer1") && document.getElementById("answer2") && document.getElementById("answer3") && document.getElementById("answer34"))) {
                document.getElementById("answer" + mcqc[i]).innerText = topic[randnum].a; 
                i++
            }
        }
    } else if (clickedtype == "SAQ") {
        document.getElementById("SA").style.display = "inline";
        document.getElementById("MC").style.display = "none";
    }
}

//check mcq answers

function mcqreset() {
    mcqc = [1,2,3,4];
    for(let i=0; i < 4; i++) {
        document.getElementById("answer" + (i+1)).style.backgroundColor = "rebeccapurple";
    }
    gameplay();
}

for(let i=0; i < 4; i++) {
    if(document.getElementById("answer" + (i+1))) {
        document.getElementById("answer" + (i+1)).addEventListener("click", checkmcq);
    }
}

function checkmcq() {
    if(this.innerText == topic[randq].a) {
        this.style.backgroundColor = "green";
        setTimeout(mcqreset, 1500);
    } else {
        this.style.backgroundColor = "red";
    }
}

//check saq answers
let ic=0; //incorrectcounter

if (document.getElementById("check")) {
    document.getElementById("check").addEventListener("click", checksaq);
}

function checksaq() {
    if (document.getElementById("saqans").value == topic[randq].a) {
        document.getElementById("statecorrect").style.color = "green";
        document.getElementById("statecorrect").innerText = "CORRECT";
        setTimeout(saqreset, 1500);
    } else {
        document.getElementById("statecorrect").style.color = "red";
        document.getElementById("statecorrect").innerText = "INCORRECT";
        ic++;
        if (ic >= 3) {
            document.getElementById("statecorrect").innerText = ("INCORRECT; CORRECT ANSWER: " + topic[randq].a);
            setTimeout(saqreset, 1500);
        } else {setTimeout(()=>{
            document.getElementById("saqans").value = "";
            document.getElementById("statecorrect").innerText = "";
        }, 1500);}
    }
}

function saqreset() {
    document.getElementById("saqans").value = "";
    ic = 0;
    document.getElementById("statecorrect").innerText = "";
    gameplay();
}