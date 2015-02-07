/*jslint nomen: true */
/*global jQuery */

var job_desc = {
    "name": "Lyn Blade Master",
    "diff": "●●◐○○",
    "race": "Lyn",
    "desc": "no description",
    "video": "<iframe id=\"ytplayer\" width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/kshVx2xIqzc?rel=0&amp;controls=0&amp;showinfo=0&enablejsapi=1\" frameborder=\"0\" allowfullscreen></iframe>"
};

var _training;
// PvE-------------------------------------------------------------------------------------------------------------
function diel_pve_essential() {
    "use strict";
    (function ($) {
        $("#buildlist").animate({
            height: "0%"
        });
        $(document).ready(function () {
            _training.loadGetJsonData("{\"character_level\" : 50, \"character_mastery_level\" : 1, \"character_job\" : \"SM\", \"json_slot_data\" : {\"27100\" : \"4\", \"27101\" : \"4\", \"27102\" : \"4\", \"27103\" : \"10\", \"27104\" : \"4\", \"27111\" : \"11\", \"27113\" : \"2\", \"27114\" : \"2\", \"27126\" : \"4\", \"27129\" : \"10\", \"27144\" : \"6\", \"27157\" : \"1\", \"27200\" : \"10\", \"27300\" : \"22\", \"27304\" : \"41\", \"27400\" : \"3\", \"27404\" : \"4\", \"27405\" : \"3\", \"27407\" : \"6\"}}");
        });
    }(jQuery));
}

function diel_pve_build1() {
    "use strict";
    (function ($) {
        $("#buildlist").animate({
            height: "0%"
        });
        $(document).ready(function () {
            _training.loadGetJsonData("{\"character_level\" : 50, \"character_mastery_level\" : 12, \"character_job\" : \"SM\", \"json_slot_data\" : {\"27100\" : \"7\", \"27101\" : \"7\", \"27102\" : \"7\", \"27103\" : \"8\", \"27104\" : \"8\", \"27109\" : \"2\", \"27111\" : \"11\", \"27113\" : \"4\", \"27114\" : \"2\", \"27126\" : \"5\", \"27129\" : \"10\", \"27144\" : \"6\", \"27157\" : \"1\", \"27200\" : \"11\", \"27300\" : \"22\", \"27304\" : \"52\", \"27400\" : \"3\", \"27404\" : \"7\", \"27405\" : \"3\", \"27407\" : \"6\"}}");
        });
    }(jQuery));
}
// PvP-------------------------------------------------------------------------------------------------------------

function diel_pvp_build1() {
    "use strict";
    (function ($) {
        $("#buildlist").animate({
            height: "0%"
        });
        $(document).ready(function () {
            _training.loadGetJsonData("{\"character_level\" : 50, \"character_mastery_level\" : 12, \"character_job\" : \"SM\", \"json_slot_data\" : {\"27103\" : \"11\", \"27104\" : \"8\", \"27109\" : \"2\", \"27111\" : \"4\", \"27113\" : \"4\", \"27114\" : \"2\", \"27126\" : \"5\", \"27129\" : \"10\", \"27144\" : \"6\", \"27157\" : \"1\", \"27200\" : \"7\", \"27202\" : \"4\", \"27300\" : \"13\", \"27304\" : \"23\", \"27307\" : \"4\", \"27400\" : \"5\", \"27404\" : \"7\", \"27405\" : \"5\", \"27407\" : \"6\"}}");
        });
    }(jQuery));
}

var builds = {
    "pve01": {
        "type": "PvE",
        "name": "Essential",
        "req": "Lv50 H1",
        "bfunc": "diel_pve_essential();",
        "desc_title": "Essential LBM Build by Di'el",
        "desc": "No description"
    },
    "pve02": {
        "type": "PvE",
        "name": "General Build",
        "req": "Lv50 H12",
        "bfunc": "diel_pve_build1();",
        "desc_title": "General LBM Build by Di'el",
        "desc": "No description"
    },
    "pvp01": {
        "type": "PvP",
        "name": "1v1",
        "req": "Lv50 H12",
        "bfunc": "diel_pvp_build1();",
        "desc_title": "1v1 PvP Build by Di'el",
        "desc": "No description"
    }
};