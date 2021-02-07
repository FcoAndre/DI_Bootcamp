function bannerApp () {
    let bann = document.createElement("div");
    let bannNode = document.createTextNode ("The sale ends in 10 min")
    bann.appendChild(bannNode);
    document.body.appendChild(bannNode);
    bann.style.border = "1px solid black"
}

setTimeout(bannerApp,5000);

let timeleft = 10;
        let downloadTimer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Finished";
            } else {
                document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
            }
            timeleft -= 1;
            //timeleft --;
        }, 1000);