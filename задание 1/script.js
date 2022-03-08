onscroll = function() {
    let scroll = this.document.body.getBoundingClientRect();
    let button = this.document.body.getElementsByClassName("back-to-top")[0];
    if (scroll.y < -240) {
        button.className = "back-to-top display"
    } else {
        button.className = "back-to-top" 
    }
}
