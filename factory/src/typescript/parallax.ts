namespace Project.UI 
{
    export class Parallax 
    {
        public ParallaxEnable(min : number, max : number) 
        {
            var st = window.scrollY,
                article = document.getElementById('article-block'),
                top : string = "translate(0%, " + st * 0.2 + "%";

            if (article != null) {
                if (st > min && st < max) 
                {
                    article.style.transform = top;
                }
            } else console.error('[ARTICLE] is not found!');
        }
    }
}