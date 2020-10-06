function openSideMenu() {
    // document.getElementById("sidenav").style.width= "50%";
    var sidenav = document.getElementById("sidenav");
    var span1 = document.getElementById("span1");
    var span2 = document.getElementById("span2");
    var span3 = document.getElementById("span3");
    var sidenavmenu = document.getElementById("sidenav-menu");

    if(sidenav.style.width === "80%") {
        sidenav.style.width = "0px";
        span1.style.transform = "rotate(0)";
        span3.style.transform = "rotate(0)";
        span2.style.display = "block";
        sidenavmenu.style.display = "none";
    } else {
        sidenav.style.width = "80%";
        span1.style.transform = "rotate(45deg) translate(15px, -9px)";
        span3.style.transform = "rotate(-45deg) translate(15px, 9px)";
        span2.style.display = "none";
        sidenavmenu.style.display = "block";
    }
}

function closeSideMenu() {
    document.getElementById("sidenav").style.width= "0px";
    document.getElementById("span1").style.transform = "rotate(0)";
    document.getElementById("span2").style.display = "block";
    document.getElementById("span3").style.transform = "rotate(0)";
    document.getElementById("sidenav-menu").style.display = "none";

}