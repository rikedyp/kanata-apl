$=s=>document.getElementById(s)
$$=s=>document.getElementsByClassName(s)

let ks; let kn;
let last;

window.onload = function() {
    ks = $$('keyboard-base')[0].children
    kn = [] ; for ( let k of ks ) { kn.push(k.innerHTML.toLowerCase()) }    
    document.body.addEventListener('keydown', function(event) {
        //event.preventDefault()
        idx = getKey(event)
        ks[idx].style.backgroundColor = 'rgb(181, 226, 250)'
    });
    document.body.addEventListener('keyup', function(event) {
        last = event
        console.log(event.key);
        console.log(event.code);
        $('status').innerHTML  = 'key: ' + event.key + ', code: ' + event.code
        $('status').innerHTML += '<br>' + 'charCode: ' + event.keyCode
        console.log(kn.indexOf(map[event.code]))
        console.log(kn.indexOf(event.code))
        console.log(map[event.code])
        idx = getKey(event)
        ks[idx].style.backgroundColor = 'rgb(249, 247, 243)'
    });
}

function getKey (event) {    
    key = event.key.toLowerCase()
    idx = kn.indexOf(map[key]) ; if ( idx === -1 ) { idx = kn.indexOf(key) }
    if ( idx === -1 ) { key = event.code.toLowerCase() }
    idx = kn.indexOf(map[key]) ; if ( idx === -1 ) { idx = kn.indexOf(key) }
    return idx
}

let map = {
    "`": "~",
    "=": "+",
    "f13": "capslock"
    // "⍺": "a"
}
