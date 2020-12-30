const hideControlsClass = 'hide-controls';

function updatePlayer(title) {
    const player = document.querySelector('.html5-video-player');
    
    chrome.storage.local.get('spoilerTitles', (result) => {
        let spoilerTitles = [];
        if (result.spoilerTitles != null) {
            spoilerTitles = result.spoilerTitles;
        }
        if (spoilerTitles.some(x => title.toLowerCase().includes(x.toLowerCase()))) {
            player.classList.add(hideControlsClass);
        } else {
            player.classList.remove(hideControlsClass);
        }
    });
}

updatePlayer(document.title);
titleNode = document.querySelector('title');
new MutationObserver((mutations, _) => {
    const title = mutations[0].target.textContent;
    if (title != null) {
        updatePlayer(mutations[0].target.textContent);
    }
}).observe(
    titleNode,
    { characterData: true, subtree: true, childList: true }
);