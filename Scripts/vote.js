////// 

////////function getQS(QS) {
////////    QS = QS.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
////////    var regex = new RegExp("[\\?&]" + QS + "=([^&#]*)"),
////////        results = regex.exec(location.search);
////////    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
////////}

function getQS() {
    var a = location.href.split('../../../index-2.html');
    return a[a.length - 2];
}

var $vote_result = $("#vote_result");
var vote_result = "";

function GetVote(id) {

    try {
        vote_read(id);
        var PrRating = $.cookie("_vote" + id);
        $(".rating").css("width", "" + PrRating + "%");
    } catch (e) {

    }
  

}

$(document).ready(function () {
    var id = getQS();
    //alert(id);
    //alert(PrRating);
    GetVote(id);

    setTimeout(function () { GetVote(id); }, 500);

    $(".stars input").click(function () {

        var pointt = $(this).val().toString();

        if ($.cookie("vote" + id) == null) {

            $.cookie("vote" + id, pointt, { expires: 30 });
            voting(id, pointt);
        }
        else
            $vote_result.html(dahaonceoyladiniz + " " + $.cookie("vote" + id));
    });
});

function vote_read(id) {
    $.ajax({
        type: "POST",
        url: "/WebServices/Admin.asmx/VoteRead",
        data: "{ProductID:" + id + "}",
        contentType: "application/json; charset=utf-8",
        success: function (msg) {
            vote_result = msg.d;
            $vote_result.html(msg.d);
        },
        error: function (xhr, status, error) {
            $vote_result.html(error);
        }

    });
}

function voting(id, point) {
    $.ajax({
        type: "POST",
        url: "/WebServices/Admin.asmx/Voting",
        data: "{ProductID:" + id + ", Point:" + point + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            $vote_result.html(oyicintesekkurler);

        },
        error: function (xhr, status, error) {
            $vote_result.html(error);
        }
    });
}