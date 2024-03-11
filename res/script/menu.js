localStorage.basTotal = basTotal;
localStorage.floTotal = floTotal;
localStorage.funTotal = funTotal;
localStorage.filTotal = filTotal;
localStorage.oopTotal = oopTotal;
localStorage.advTotal = advTotal;
localStorage.weeTotal = weeTotal;
levelDict = JSON.parse(localStorage.levelDict);
wrongDict = JSON.parse(localStorage.wrongDict);

if (localStorage.is_weekly == 1) {
    console.log('bluuuuuuuuuuuuu')
    $(".intro-bg").css({ backgroundColor: '#d3f26a' });
} else {
    $(".intro-bg").css({ backgroundColor: '#fff' });
}

localStorage.is_weekly = 0;

$("#basics-level").text(levelDict['bas']);
$("#basics-total").text(basTotal);
$("#basics-wrong").text(wrongDict['bas'].length);

$("#flow-level").text(levelDict['flo']);
$("#flow-total").text(floTotal);
$("#flow-wrong").text(wrongDict['flo'].length);

$("#function-level").text(levelDict['fun']);
$("#function-total").text(funTotal);
$("#function-wrong").text(wrongDict['fun'].length);

$("#file-level").text(levelDict['fil']);
$("#file-total").text(filTotal);
$("#file-wrong").text(wrongDict['fil'].length);

$("#oops-level").text(levelDict['oop']);
$("#oops-total").text(oopTotal);
$("#oops-wrong").text(wrongDict['oop'].length);

$("#advanced-level").text(levelDict['adv']);
$("#advanced-total").text(advTotal);
$("#advanced-wrong").text(wrongDict['adv'].length);

$("#weekly-level").text(levelDict['wee']);
$("#weekly-total").text(weeTotal);
$("#weekly-wrong").text(wrongDict['wee'].length);

$(".play").click(function () {
    setTimeout(() => {
        $(".ct").css({ transform: 'scale(0)' });
        $("body").css({ background: '#fff' });
        $(".top").fadeOut();
        setTimeout(() => {
            $(this).css({
                position: 'fixed'
            });
            $(".ct-ti, .ct-des, .ct-level").css({ visibility: 'hidden' });
        }, 200);
    }, 600);
});

function CtClick(_type) {
    localStorage.openedType = _type;
    setInterval(() => {
        parent.location = "content.html";
    }, 900);
}
localStorage.ImproveMode = 0;
function ImproveClick(_type) {
    localStorage.openedType = _type;
    localStorage.ImproveMode = 1;
    setInterval(() => {
        parent.location = "content.html";
    }, 900);
}

$(".reset").click(function () {
    $(".reset-bg").css({ display: 'flex' });
});

$("#reset-cancel").click(function () {
    $(".reset-bg").fadeOut();
});
$("#reset-ok").click(function () {
    localStorage.clear();
    setTimeout(() => { $(".intro-bg").css({ transform: 'scale(1)' }); }, 100);
    setTimeout(() => { location.replace("intro.html"); }, 450);
});