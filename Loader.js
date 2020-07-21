document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader-wrapper").style.visibility = "visible";
  } else {
    document.querySelector("#loader-wrapper").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
