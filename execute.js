
let ztable = [
    [0.0003,0.0003,0.0003,0.0003,0.0003,0.0003,0.0003,0.0003,0.0003,0.0002],//-3.4
    [0.0005,0.0005,0.0005,0.0004,0.0004,0.0004,0.0004,0.0004,0.0004,0.0003],
    [0.0007,0.0007,0.0006,0.0006,0.0006,0.0006,0.0006,0.0005,0.0005,0.0005],
    [0.001,0.0009,0.0009,0.0009,0.0008,0.0008,0.0008,0.0008,0.0007,0.0007],
    [0.0013,0.0013,0.0013,0.0012,0.0012,0.0011,0.0011,0.0011,0.001,0.001],
    [0.0019,0.0018,0.0018,0.0017,0.0016,0.0016,0.0015,0.0015,0.0014,0.0014],
    [0.0026,0.0025,0.0024,0.0023,0.0023,0.0022,0.0021,0.0021,0.002,0.0019],
    [0.0035,0.0034,0.0033,0.0032,0.0031,0.003,0.0029,0.0028,0.0027,0.0026],
    [0.0047,0.0045,0.0044,0.0043,0.0041,0.004,0.0039,0.0038,0.0037,0.0036],
    [0.0062,0.006,0.0059,0.0057,0.0055,0.0054,0.0052,0.0051,0.0049,0.0048],
    [0.0082,0.008,0.0078,0.0075,0.0073,0.0071,0.0069,0.0068,0.0066,0.0064],
    [0.0107,0.0104,0.0102,0.0099,0.0096,0.0094,0.0091,0.0089,0.0087,0.0084],
    [0.0139,0.0136,0.0132,0.0129,0.0125,0.0122,0.0119,0.0116,0.0113,0.011],
    [0.0179,0.0174,0.017,0.0166,0.0162,0.0158,0.0154,0.015,0.0146,0.0143],
    [0.0228,0.0222,0.0217,0.0212,0.0207,0.0202,0.0197,0.0192,0.0188,0.0183],
    [0.0287,0.0281,0.0274,0.0268,0.0262,0.0256,0.025,0.0244,0.0239,0.0233],
    [0.0359,0.0351,0.0344,0.0336,0.0329,0.0322,0.0314,0.0307,0.0301,0.0294],
    [0.0446,0.0436,0.0427,0.0418,0.0409,0.0401,0.0392,0.0384,0.0375,0.0367],
    [0.0548,0.0537,0.0526,0.0516,0.0505,0.0495,0.0485,0.0475,0.0465,0.0455],
    [0.0668,0.0655,0.0643,0.063,0.0618,0.0606,0.0594,0.0582,0.0571,0.0559],
    [0.0808,0.0793,0.0778,0.0764,0.0749,0.0735,0.0721,0.0708,0.0694,0.0681],
    [0.0968,0.0951,0.0934,0.0918,0.0901,0.0885,0.0869,0.0853,0.0838,0.0823],
    [0.1151,0.1131,0.1112,0.1093,0.1075,0.1056,0.1038,0.102,0.1003,0.0985],
    [0.1357,0.1335,0.1314,0.1292,0.1271,0.1251,0.123,0.121,0.119,0.117],
    [0.1587,0.1562,0.1539,0.1515,0.1492,0.1469,0.1446,0.1423,0.1401,0.1379],
    [0.1841,0.1814,0.1788,0.1762,0.1736,0.1711,0.1685,0.166,0.1635,0.1611],
    [0.2119,0.209,0.2061,0.2033,0.2005,0.1977,0.1949,0.1922,0.1894,0.1867],
    [0.242,0.2389,0.2358,0.2327,0.2296,0.2266,0.2236,0.2206,0.2177,0.2148],
    [0.2743,0.2709,0.2676,0.2643,0.2611,0.2578,0.2546,0.2514,0.2483,0.2451],
    [0.3085,0.305,0.3015,0.2981,0.2946,0.2912,0.2877,0.2843,0.281,0.2776],
    [0.3446,0.3409,0.3372,0.3336,0.33,0.3264,0.3228,0.3192,0.3156,0.3121],
    [0.3821,0.3783,0.3745,0.3707,0.3669,0.3632,0.3594,0.3557,0.352,0.3483],
    [0.4207,0.4168,0.4129,0.409,0.4052,0.4013,0.3974,0.3936,0.3897,0.3859],
    [0.4602,0.4562,0.4522,0.4483,0.4443,0.4404,0.4364,0.4325,0.4286,0.4247],
    [0.5,0.496,0.492,0.488,0.484,0.4801,0.4761,0.4721,0.4681,0.4641]//0.0 on the 
    
    //Top right = Smaller - Bottom left = Bigger i.e 0
];

//Main rating change
const broadMatch = document.querySelector("#bookMeta");
if (broadMatch != null) {
const matches = broadMatch.querySelectorAll("span[itemprop='ratingValue']");
var mainRating = parseFloat(matches[0].innerText);
var mainzScore = findzScore(mainRating);
var mainPercentile = (findPercentile(mainzScore));
console.log(mainPercentile);
var mainString = mainRating + " - " + mainPercentile + "%";
matches[0].innerText = mainString;
}
console.log("test")
////////////////////////////////////////////////////////////
//Imagine ever Hardcoding inefficient things lmao

const specialMatch = document.querySelectorAll("div[class='RatingStatistics__rating']");
for (z = 0; z < specialMatch.length; z++) {
    var specialRating = specialMatch[z].innerText;
    var specialPercentile = doEverything(specialRating);
    var specialString = specialRating + " - " + specialPercentile + "%";
    specialMatch[z].innerText = specialString;
}



//Please forgive me for this

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//sleep function - I don't actually get
async function continuousReload() {
    for (let i = 0; i < 100000; i++) {
        console.log("triggered");
        
        const miniBroadMatch = document.querySelectorAll(".minirating");
//const miniMatches = miniBroadMatch.querySelectorAll("span[class='minirating'");
        for (var z=0; z < miniBroadMatch.length; z++) {
//    var selected = miniMatches[i].innerText;
            var selected = miniBroadMatch[z].innerText;
            if (selected.slice(-1) === "%") {
            } else {
                let miniRating = selected.charAt(1) + "." + selected.charAt(3) + selected.charAt(4);
                miniRating = parseFloat(miniRating);
                let miniPercentile = findPercentile(findzScore(miniRating));
                var miniString = miniBroadMatch[z].innerText + " - " + miniPercentile + "%";
                miniBroadMatch[z].innerText = miniString;
            }
}


const specialBroadMatch = document.querySelectorAll("span[class='AverageRating__ratingValue'");
for (z = 0; z < specialBroadMatch.length; z++) {
    var specialRating = specialBroadMatch[z].innerText;
    if (specialRating.slice(-1) === "%") {
        
    } else {
    var specialPercentile = doEverything(specialRating);
    var specialString = specialRating + " - " + specialPercentile + "%";
    specialBroadMatch[z].innerText = specialString;
    }
}

/////////////////////////////////////////////////IknowitsnotreadableImsorryfutureme


        await sleep(i * 100);       
    }
}

continuousReload();
//Continually checks fro new things to rate



const miniBroadMatch = document.querySelectorAll("span[class='greyText smallText'");
    for (var z=0; z < miniBroadMatch.length; z++) {
        var selected = miniBroadMatch[z].innerText;
                let miniRating = selected.charAt(11) + "." + selected.charAt(13) + selected.charAt(14);
                miniRating = parseFloat(miniRating);
                let miniPercentile = findPercentile(findzScore(miniRating));
                var miniString = selected.substr(0, 16) + " - " + miniPercentile + "% " + selected.substr(16);
                miniBroadMatch[z].innerText = miniString;
                }
//edge case time! - If rating is 4.00, "really liked it\n" is attached to first bit
function findzScore(rating) {
    let mean = 3.9547;
    let stDev = 0.2658;   
    zScore = (rating - mean)/stDev;
    if (isNaN(zScore) === true) {
        rating = 4.00;
        zScore = (rating - mean)/stDev;
    }
    return zScore;
}

//THis is very inefficient but it works so I'm not going to touch it
function findPercentile(zScore) {
    zScore = zScore.toString();
    let percentile = 0;
    if (zScore.charAt(0) === "-"){
        let firstNum = zScore.charAt(1) + zScore.charAt(3);
        let secondNum = zScore.charAt(4);
        firstNum = parseInt(parseFloat(firstNum));
        secondNum = parseInt(secondNum);
        percentile = ztable[34-firstNum][secondNum];
        percentile = Math.floor(percentile * 1000);
        percentile = percentile/10;
        return percentile;
    }
    else {
        let firstNum = zScore.charAt(0) + zScore.charAt(2);
        let secondNum = zScore.charAt(3);
        firstNum = parseInt(firstNum);
        console.log(firstNum);
        secondNum = parseInt(secondNum);
        
        console.log(secondNum);
        percentile = 1 - ztable[34-firstNum][secondNum];
        percentile = Math.floor(percentile * 1000);
        percentile = percentile/10;
        return percentile;
    }
}

function doEverything(rating) {
    percentile = findPercentile(findzScore(rating));
    return percentile;
}




//Graveyard of bad ideas
//let listofcovers = document.getElementsByClassName("cover");
//for (var y = 0; y < listofcovers.length; y++) {
//    listofcovers[y].addEventListener("mouseenter", refreshMiniRatings());
//    console.log(listofcovers[y]);
//}
//let listofbookcovers = document.getElementsByClassName("bookImage");
//for (var y = 0; y < listofbookcovers.length; y++) {
//    listofbookcovers[y].addEventListener("mouseenter", refreshMiniRatings());
//    console.log(listofbookcovers[y]);
//}
//
//body = document.querySelector("body");
//body.addEventListener("mouseenter", refreshMiniRatings());
