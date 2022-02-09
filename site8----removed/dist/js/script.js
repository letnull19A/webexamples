var layer0, layer1, players, container, options = null;
var lastScrollTop = 0;

var open_menu, close_menu, menu_layer;

var scrollImage, scrollImage1, scrollImage2, scrollImage3, scrollImage4, scrollImage5;

var fixed_block;

$(document).ready(function () {
    layer0 = $("#layout-0"),
    layer1 = $("#layout-1");

    open_menu = $("#open-menu");
    close_menu = $("#close-menu");
    menu_layer = $("#menuLayer");

    close_menu.hide();

    SetOpacity(layer0, 1);
    SetOpacity(layer1, 0);

    scrollImage = new ImageScrollObject($(".preview__image")[0], $(".preview__image-canvas")[0]);
    scrollImage.Init();

    scrollImage2 = new ImageScrollObject($(".preview__image")[1], $(".preview__image-canvas")[1]);
    scrollImage2.Init();

    scrollImage1 = new ImageScrollObject($(".preview__image")[2], $(".preview__image-canvas")[2]);
    scrollImage1.Init();

    scrollImage3 = new ImageScrollObject($(".preview__image")[3], $(".preview__image-canvas")[3]);
    scrollImage3.Init();

    scrollImage4 = new ImageScrollObject($(".preview__image")[4], $(".preview__image-canvas")[4]);
    scrollImage4.Init();

    scrollImage5 = new ImageScrollObject($(".preview__image")[5], $(".preview__image-canvas")[5]);
    scrollImage5.Init();

    menu_layer.hide();

    Environment();

});

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (layer0 != null && layer1 != null) {
        SetOpacity(layer0, Clamp(1 - scroll / 400, 0, 1));
        SetOpacity(layer1, Clamp(scroll / 400, 0, 1));
    }

    scrollImage.ScrollImage(scroll);
    scrollImage1.ScrollImage(scroll);
    scrollImage2.ScrollImage(scroll);
    scrollImage3.ScrollImage(scroll);
    scrollImage4.ScrollImage(scroll);
    //scrollImage5.ScrollImage(scroll);
});

function Environment() {
    open_menu.on("click", () => {
        menu_layer.fadeIn(300);
        open_menu.hide();
        close_menu.show();
    });

    close_menu.on('click', () => {
        menu_layer.fadeOut(300);
        open_menu.show();
        close_menu.hide();
    });
}

function SetOpacity(element, value) {
    if (element == null) {
        console.error('Element is not found!');
    }
    $(element).css("opacity", value);
}

function Clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
}

class ImageScrollObject {
    constructor(HTMLImage, HTMLCanvas) {
        this.HTMLImage = HTMLImage;
        this.HTMLCanvas = HTMLCanvas;
        this.Folder = HTMLCanvas.getAttribute("data-path");
        this.Frames = HTMLCanvas.getAttribute("data-frames");
        this.ScrollHeight = HTMLCanvas.getAttribute("data-height");
        this.Speed = HTMLCanvas.getAttribute("data-speed");
    }

    Init() {
        this.image = new Image();
        this.ctx = this.HTMLCanvas.getContext('2d');
        this.ApplySettings();
        this.path = "./../assets/" + this.Folder + "/000001.jpg";
        this.HTMLImage.setAttribute("src", this.path);
        this.image.src = this.path;
    }

    ScrollImage(scroll) {
        if (scroll >= this.ScrollHeight) {
            var currentSpeed = ((scroll - this.ScrollHeight) * this.Speed);
            currentSpeed = Math.round(currentSpeed);
            this.path = "./../assets/" + this.Folder + "/" + String(Clamp(currentSpeed, 1, this.Frames)).padStart(6, '0') + ".jpg";
            this.HTMLImage.setAttribute("src", this.path);
            this.image.src = this.path;
            this.DrawImage(0, 0, this.HTMLCanvas.width, this.HTMLCanvas.height, 0, 0);
        }
    }

    ApplySettings() {
        this.ctx.mozImageSmoothingEnabled = true;
        this.ctx.webkitImageSmoothingEnabled = true;
        this.ctx.msImageSmoothingEnabled = true;
        this.ctx.imageSmoothingEnabled = true;
    }

    DrawImage(x, y, w, h, offsetX, offsetY) {

        if (arguments.length === 2) {
            x = y = 0;
            w = this.HTMLCanvas.width;
            h = this.HTMLCanvas.height;
        }
    
        // default offset is center
        offsetX = typeof offsetX === "number" ? offsetX : 0.5;
        offsetY = typeof offsetY === "number" ? offsetY : 0.5;
    
        // keep bounds [0.0, 1.0]
        if (offsetX < 0) offsetX = 0;
        if (offsetY < 0) offsetY = 0;
        if (offsetX > 1) offsetX = 1;
        if (offsetY > 1) offsetY = 1;
    
        var iw = this.image.width,
            ih = this.image.height,
            r = Math.min(w / iw, h / ih),
            nw = iw * r,   // new prop. width
            nh = ih * r,   // new prop. height
            cx, cy, cw, ch, ar = 1;
    
        // decide which gap to fill    
        if (nw < w) ar = w / nw;                             
        if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
        nw *= ar;
        nh *= ar;
    
        // calc source rectangle
        cw = iw / (nw / w);
        ch = ih / (nh / h);
    
        cx = (iw - cw) * offsetX;
        cy = (ih - ch) * offsetY;
    
        // make sure source rectangle is valid
        if (cx < 0) cx = 0;
        if (cy < 0) cy = 0;
        if (cw > iw) cw = iw;
        if (ch > ih) ch = ih;
    
        // fill image in dest. rectangle
        this.ctx.drawImage(this.image, cx, cy, cw, ch,  x, y, w, h);
    }
}