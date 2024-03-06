browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    async function listenToResponse(requestDetails) {
        const pattern = /stream\/(.*).mp3/;
        const match = requestDetails.url.match(pattern)[1];
        if (match in knownSongs) {
            browser.tabs.sendMessage(tabs[0].id, { match: knownSongs[match] });
        } else {
            console.log("Not Found:", match, ". Please add it to knownSongs");
            console.log("Copied id to clipboard");
            navigator.clipboard.writeText(match);
        }
    }

    browser.webRequest.onBeforeRequest.addListener(listenToResponse, {
        urls: ["*://*/*.mp3"],
    });
});

const knownSongs = {
    // c-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-y: "Music title",
}

