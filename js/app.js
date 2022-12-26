var toggled = false;
const settoggled = (e) => {
  toggled = e;
  if (e) {
    document.getElementById("pagetoggled").classList.add("toggled");
    document.getElementById("overlayopen").classList.add("open");
  } else {
    document.getElementById("pagetoggled").classList.remove("toggled");
    document.getElementById("overlayopen").classList.remove("open");
  }
};
var daynight = !1;
const setdaynight = (e) => {
  daynight = e;
};
var search = "";
const setsearch = () => {
  search = document.getElementById("searchicon").value;
};
var show1 = !1;
const setshow1 = (e) => {
  show1 = e;
  if (e) {
    document.getElementById("searchbaricon").classList.add("show");
    document.getElementById("searchcloseicon").classList.remove("show");
    document.getElementById("searchicon").value="";
    document.getElementById("searchicon").focus();
  } else {
    document.getElementById("searchbaricon").classList.remove("show");
    document.getElementById("searchcloseicon").classList.add("show");
  }
};
const changedaynight = (e) => {
  setdaynight(e);
  if (e) {
    document.body.classList.add("bodydark");
  } else {
    document.body.classList.remove("bodydark");
  }
};
const darklight = (t) => {
  changedaynight(!daynight);
};
const positionsunmoon = () => {
  var e = new Date().getHours(), t = !0;
  e <= 5 ? (e += 6) : e >= 6 && e <= 17 ? ((t = !1), (e -= 6)) : (e -= 18);
  changedaynight(t);
};
setTimeout(() => {
  positionsunmoon();
}, 6e4);
positionsunmoon();
var fullscreen = false;
const setFullscreen = (e) => {
  fullscreen = e;
};
const showfullscreen = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        document.getElementById("fullscreenicon").classList.remove("full");
        setFullscreen(false);
    } else {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
        document.getElementById("fullscreenicon").classList.add("full");
        setFullscreen(true);
    }
}
if(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement){
  document.getElementById("fullscreenicon").classList.add("full");
  setFullscreen(true);
}else{
  document.getElementById("fullscreenicon").classList.remove("full");
  setFullscreen(false);
}