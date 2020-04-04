function removeLinkUnderlineOnClick() {
    let links = document.getElementsByClassName('article-link');
    for (let link of links) {
        link.addEventListener('click', (event) => (event.target.style.textDecoration = 'none'));
    }
}

window.onload = function () {
    removeLinkUnderlineOnClick();
};