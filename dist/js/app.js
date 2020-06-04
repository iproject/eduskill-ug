const frame = document.getElementById('check');
const v2 = document.getElementById('video2');

v2.addEventListener('click',vTwo);

function vTwo() {
    prepareFrame('https://www.youtube.com/embed/O9MvdMqKvpU')
}
function prepareFrame(url) {
    var ifrm = document.createElement("iframe");
    var main = document.createElement("main-f");
    ifrm.setAttribute("src", url);
    ifrm.style.width = "640px";
    ifrm.style.height = "480px";
    frame.appendChild(ifrm)
    main.innerHTML = frame;

}


