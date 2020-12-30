chrome.storage.local.get('spoilerTitles', (result) => {
    if (result.spoilerTitles != null) {
        document.getElementById('spoiler-titles').value = result.spoilerTitles.join('\n');
    }
});

document.getElementById('antispoiler-form').addEventListener('submit', () => {
    const textarea = document.getElementById('spoiler-titles');
    const values = textarea.value.split('\n').filter(value => value.length > 0);
    chrome.storage.local.set({'spoilerTitles': values});
    window.close();
});