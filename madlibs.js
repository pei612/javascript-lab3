
function updateWord(srcId, destSelector) {
    var value = document.getElementById(srcId).value;
    var destEls = document.querySelectorAll(destSelector);
    for (e of destEls) {
        e.innerHTML = value;
    }
}

function updateStory() {
    updateWord("name-input", ".name");
    updateWord("character-input", ".character");
    updateWord("adverb-input", ".adverb");
    updateWord("adjective-input", ".adjective");
    
    document.getElementById('story-container').style.display = "block";
    document.getElementById('form-container').style.display = "none";
}