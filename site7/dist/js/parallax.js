"use strict";
var Project;
(function (Project) {
    var UI;
    (function (UI) {
        class Parallax {
            ParallaxEnable(min, max) {
                var st = window.scrollY, article = document.getElementById('article-block'), top = "translate(0%, " + st * 0.2 + "%";
                if (article != null) {
                    if (st > min && st < max) {
                        article.style.transform = top;
                    }
                }
                else
                    console.error('[ARTICLE] is not found!');
            }
        }
        UI.Parallax = Parallax;
    })(UI = Project.UI || (Project.UI = {}));
})(Project || (Project = {}));
