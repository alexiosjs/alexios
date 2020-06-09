// @ts-nocheck

window.removeHcTigaServeWarning = function () {
  document
    .getElementsByTagName("html")[0]
    .removeChild(
      document.getElementsByClassName("cpp-hv-tiga-serve-warning")[0]
    );
};

var a = document.createElement("div");

a.innerHTML =
  '\n  Currently in serve mode, just for local validation, do not use this in production.\n  <span style="cursor: pointer; float: right; margin-right: 100px; font-size: 15px" onclick="removeHcTigaServeWarning()">X</span>\n';
a.className = "cpp-hv-tiga-serve-warning";
a.style.width = "100%";
a.style.height = "50px";
a.style.backgroundColor = "pink";
a.style.position = "fixed";
a.style.top = "0";
a.style.left = "0";
a.style.lineHeight = "50px";
a.style.textAlign = "center";
a.style.boxShadow = "0px 0px 15px rgba(0,0,0,0.3)";
a.style.color = "#5f5d2e";
a.style.zIndex = "9999";
a.style.textOverflow = "ellipsis";
a.style.whiteSpace = "nowrap";
a.style.overflow = "hidden";

document.getElementsByTagName("html")[0].appendChild(a);
