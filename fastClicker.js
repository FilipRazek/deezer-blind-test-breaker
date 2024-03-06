browser.runtime.onMessage.addListener(function(message) {
    const divs = [...document.querySelectorAll("div.chakra-stack div div")];
    if (divs.length < 4) return;
    const filteredDivs = divs.filter(item => item.textContent.includes(message.match));
    if (filteredDivs.length === 0) {
        console.log("Not Found:", message.match, "in", divs.map(item => item.textContent.trim()));
        return;
    }
    divs.forEach(div => {
        div.style.backgroundColor = "lightgrey";
    })
    chosenDiv = filteredDivs[0];
    chosenDiv.style.backgroundColor = "lightgreen";
    const id = setInterval(() => {
        chosenDiv.click();
    }, 1);
    return () => clearInterval(id);
});

