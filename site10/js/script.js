$(document).ready(function() {
    var     sh = $("._shadow"),
            win_auth = $("#_win_auth"),
            win_reg = $("#_win_reg"),
            close1 = $("#close_1"),
            close2 = $("#close_2");
    
    CloseWin(win_auth);
    CloseWin(win_reg);

    $("#obj-1").select2({
        'placeholder': 'Выберете тематику группы',
        'containerCssClass': 'custom'
    });
    $("#obj-0").select2({
        'placeholder': 'Способ передачи',
        'containerCssClass': 'custom',
        'dropdownAutoWidth' : true
    });

    function EnableWin(b) 
    {
        if (b) 
        {
            sh.show();
        } else {
            sh.hide();
        }
    }

    function OpenWin(el) 
    {
        EnableWin(true)
        el.show();
    }

    function CloseWin(el) 
    {
        EnableWin(false)
        el.hide();
    }

    $("#auth").on("click", function(){
        OpenWin(win_auth);
    });
    $("#reg").on("click", function(){
        OpenWin(win_reg);
    });
    close1.on("click", function(){
        CloseWin(win_auth);
        CloseWin(win_reg);
        EnableWin(false);
    });
    close2.on("click", function(){
        CloseWin(win_auth);
        CloseWin(win_reg);
        EnableWin(false);
    });
});