setTimeout(() => { $(".top").css({ transform: 'scale(1)', opacity: '1' }); }, 100);
setTimeout(() => { $(".mid").css({ transform: 'scale(1)', opacity: '1' }); }, 200);
setTimeout(() => { $(".btm").css({ transform: 'scale(1)', opacity: '1' }); }, 300);

function Outro() {
    setTimeout(() => { $(".top").css({ transform: 'scale(2)', opacity: '0' }); }, 100);
    setTimeout(() => { $(".mid").css({ transform: 'scale(2)', opacity: '0' }); }, 200);
    setTimeout(() => { $(".btm").css({ transform: 'scale(2)', opacity: '0' }); }, 300);
}

openedType = localStorage.openedType;
ImproveMode = parseInt(localStorage.ImproveMode);

function ScriptName(_type) {
    if (_type == "bas") return "basics";
    if (_type == "flo") return "flow";
    if (_type == "fun") return "function";
    if (_type == "fil") return "file";
    if (_type == "oop") return "oops";
    if (_type == "adv") return "advanced";
    if (_type == "wee") return "weekly";
}
function AppendtName(_type) {
    if (_type == "bas") return "Basics";
    if (_type == "flo") return "Flow Control";
    if (_type == "fun") return "Function";
    if (_type == "fil") return "File";
    if (_type == "oop") return "Object And Class";
    if (_type == "adv") return "Advanced";
    if (_type == "wee") return "Weekly Challenge";
}
$("body").prepend(`<script src="res/var/${ScriptName(openedType)}.js" id="_script">`);
darkMode = localStorage.darkMode;
function ChangeColor() {
    if (darkMode == 'T')
        $(".code-bg").css({ backgroundColor: 'black' });
    else
        $(".code-bg").css({ backgroundColor: '#f3f3f3' });
}
ChangeColor();
$(".dark-mode").click(function () {
    if (darkMode == 'T') { //darkMode is True
        darkMode = 'F';
        $(".code-bg").css({ backgroundColor: '#f3f3f3' });
    } else {//darkMode is False
        darkMode = 'T';
        $(".code-bg").css({ backgroundColor: 'black' });
    }
    localStorage.darkMode = darkMode;
});

function FillRed() {
    $(".code-bg, .btn").css({ border: 'solid 3px red' })
}

wrongDict = JSON.parse(localStorage.wrongDict);
console.log('wrongDict', wrongDict)
levelDict = JSON.parse(localStorage.levelDict);
level = levelDict[openedType];

if (ImproveMode == 1) {
    //its in the improve mode
    FillRed();
    openedLevel = wrongDict[openedType][0];
    totalLevel = wrongDict[openedType].length;
    indexLevel = 0;
} else {
    openedLevel = levelDict[openedType];
    totalLevel = localStorage.getItem(openedType + 'Total');
}
txtTotal = localStorage.getItem(openedType + 'Total'); //just to append on screen

console.log('openedLevel', openedLevel);
console.log('totalLevel', totalLevel);

//Capitalising first letter
$(".type-txt").text(AppendtName(openedType));
function Append() {
    if (wrongDict[openedType].length <= 0 && ImproveMode == 1) {
        //no mistaked question
        $(".no-more-con").css({ display: 'flex' });
        $(".report-bg, .lev-bg").css({ visibility: 'hidden' })
        return
    }

    $("code").text(window["q" + openedLevel]);
    Prism.highlightAll();
    $(".ques-bg").html(window["des" + openedLevel]);
    tmp_var = window["q" + openedLevel].replace("\n", '');
    if (tmp_var == "\n" || tmp_var == "") {
        $(".code-bg").css({ opacity: '0' });
    }
    else
        $(".code-bg").css({ opacity: '1' });

    $("#ans").text(window["ans" + openedLevel]);
    $("#noans1").text(window["noans1" + openedLevel]);
    $("#noans2").text(window["noans2" + openedLevel]);
    $("#noans3").text(window["noans3" + openedLevel]);
    $("#level").text(openedLevel);
    $("#totalLevel").text(txtTotal);

    $(function () {
        var parent = $(".option-bg");
        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    });

    $("#ans, .noans").css({ background: 'linear-gradient(90deg, #cb77fb, #ae32e3)', color: 'white' });
}
Append();

inter = parseInt(localStorage.inter);
firstTimeAns = true;
$("#ans").click(function () {
    if (firstTimeAns && ImproveMode == 1) {
        indexToDelete = wrongDict[openedType].indexOf(openedLevel);
        wrongDict[openedType].splice(indexToDelete, 1);
        localStorage.wrongDict = JSON.stringify(wrongDict)
        if (indexLevel != 0) {
            indexLevel--;
        }
        openedLevel = wrongDict[openedType][indexLevel];
    }

    firstTimeAns = true;
    inter++;
    CheckInter();
    document.getElementById('correct-aud').play();
    console.log("Correct!")
    $("#ans").css({ background: 'green' });
    setTimeout(() => {
        $(".win-ct-bg").css({ transform: 'translateY(0)' });
        $(".win-bg").css({ display: 'flex' });
    }, 200);
    if (ImproveMode == 0) {
        if (openedLevel < totalLevel) {
            if (openedLevel == level) {
                //unlocked new level
                level++; openedLevel++;
                levelDict[openedType] = level;
                localStorage.setItem("levelDict", JSON.stringify(levelDict));
            } else {
                //just progress to next level which is already completed
                openedLevel++;
            }
        } else {
            //All level completed

        }
    }

});


$(".noans").click(function () {
    if (firstTimeAns) {
        firstTimeAns = false;

        // Check if the number already exists in the "bas" array
        if (wrongDict[openedType].indexOf(openedLevel) === -1) {
            // If not, push the number to the "bas" array
            wrongDict[openedType].push(openedLevel);
            wrongDict[openedType].sort((a, b) => a - b);
            console.log(`Number added to ${openedType} array:`, openedLevel);
        } else {
            console.log(`Number already exists in ${openedType} array:`, openedLevel);
        }

        console.log(wrongDict);
        localStorage.setItem('wrongDict', JSON.stringify(wrongDict));
    }
    inter++;
    CheckInter();
    document.getElementById('wrong-aud').play();
    $(this).css({ background: 'red' });
});

$(".com-next").click(function () {
    document.getElementById('button-aud').play();
    setTimeout(() => {
        $(".win-ct-bg").css({ transform: 'translateY(100%)' });
        $(".win-bg").fadeOut();
        Append();
    }, 200);
});

$("#next").click(function () {
    firstTimeAns = true;
    console.log('wrongDict[openedType][-1]', wrongDict[openedType][wrongDict[openedType].length - 1])
    if (ImproveMode == 1) {
        wrongDict = JSON.parse(localStorage.wrongDict);
        if (openedLevel != wrongDict[openedType][wrongDict[openedType].length - 1]) {
            indexLevel++;
            openedLevel = wrongDict[openedType][indexLevel];
            Append();
            console.log("openedLevel is", openedLevel);
            $("#prev").css({ opacity: '1' });
            if (openedLevel == wrongDict[openedType][wrongDict[openedType].length - 1])
                $("#next").css({ opacity: '.3' });
        }

    } else {
        if (openedLevel < level && openedLevel < totalLevel) {
            openedLevel++;
            Append();
            console.log("openedLevel is", openedLevel);
            $("#prev").css({ opacity: '1' });
            if (openedLevel == level)
                $("#next").css({ opacity: '.3' });
        }
    }

});
if (openedLevel == 1)
    $("#prev").css({ opacity: '.3' });

$("#prev").click(function () {
    firstTimeAns = true;
    console.log('openedLevel', openedLevel);
    console.log('wrongDict[openedType][0]', wrongDict[openedType][0]);
    if (ImproveMode == 1) {
        wrongDict = JSON.parse(localStorage.wrongDict);
        if (openedLevel > wrongDict[openedType][0]) {
            indexLevel--;
            openedLevel = wrongDict[openedType][indexLevel];
            Append();
            console.log("openedLevel is", openedLevel);
            $("#next").css({ opacity: '1' });
            if (openedLevel == wrongDict[openedType][0])
                $("#prev").css({ opacity: '.3' });
        }
    } else {
        if (openedLevel > 1) {
            openedLevel--;
            Append();
            console.log("openedLevel is", openedLevel);
            $("#next").css({ opacity: '1' });
            if (openedLevel == 1)
                $("#prev").css({ opacity: '.3' });
        }
    }

});

$(".back-img").click(function () {
    Outro();
    setTimeout(() => {
        window.history.back();
    }, 500);
});

$(".report-bg").click(function () {
    window.parent.location = `
mailto:codecerebrum@gmail.com?subject=Error%20reporting&
body=%20opnLvl-${openedLevel}%20opnTyp-${openedType}%0D%0A
(Please%20dont%20edit%20above%20line)%0D%0A
(Write%20something%20below%20to%20clarify%20the%20error%20(optional))
`;
});

function CheckInter() {
    if (inter > 5) {
        inter = 1;
        localStorage.inter = 1;
        parent.location = 'https://inter';
    }
}