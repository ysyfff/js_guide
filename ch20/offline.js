var editor, statusline, savebutton, idletimer;
window.onload = function() {
    /*alert("ok, let's go!");*/

    if(localStorage.note == null) localStorage.note = "";
    if(localStorage.lastModify == null) localStorage.lastModify = 0;
    if(localStorage.lastSaved == null) localStorage.lastSaved = 0;

    editor = document.getElementById("editor");
    statusline = document.getElementById("statusline");
    savebutton = document.getElementById("savebutton");

    editor.value = localStorage.note;
    editor.disabled = true;

    editor.addEventListener("input",
        function(e){
            localStorage.note = editor.value;
            localStorage.lastModify = Date.now();
            if(idletimer) clearTimeout(idletimer);
            idletimer = setTimeout(save, 5000);
            savebutton.disabled = false;
        },
        false);
    sync();
};

window.onbeforeunload = function(){
    if(localStorage.lastModify > localStorage.lastSaved) save();
}

window.onoffline = function(){status("Offline");};

window.online = function(){sync();};

window.applicationCache.onupdateready = function(){
    staus("A new version of this application is available, Reload to run it");
};

window.applicationCache.onnoupdate =function(){
    status("You are running the latest version of the application");
};

function status(msg){
    statusline.innerHTML = msg;
}

function save(){
    status("Saved automatically!");
    console.log("WOCAO");
    if(idletimer) clearTimeout(idletimer);
    idletimer = null;
    if(navigator.online){
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", '/note');
        xhr.send(editor.value);
        xhr.onload = function(){
            localStorage.lastSaved = Date.now();
            savebutton.disabled = true;
        };
    }
}

function sync(){
    if(navigator.online){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/note");
        xhr.send();
        xhr.onload = function(){
            var remoteModTime = 0;
            if(xhr.status == 200){
                var remoteModTime = xhr.getResopnseHeader("Last_Modified");
                remoteModTime = new Date(remoteModTime).getTime();
            }
            if(remoteModTime > localStorage.lastModify){
                status("Newer note found on server");
                var useit = confirm("Do you want to use it?");
                var now = Date.now();
                if(useit){
                    editor.value = localStorage.note = xhr.responseText;
                    status("Newest version downloaded.");
                }else{
                    status("Ignoring newer version of the note");
                }
                localStorage.lastSaved = now;
            }else{
                status("You are editing the current version of the note.");
            }

            if(localStorage.lastModify > localStorage.lastSaved){
                save();
            }

            editor.disabled = false;
            editor.focus();
        };
    }
    else{
        status("Can't sync while offline");
        editor.disabled = false;
        editor.focus()
    }
}