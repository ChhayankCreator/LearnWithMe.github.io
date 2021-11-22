createStickyNote = (text) => {
    let note = document.createElement("div");
    let details = document.createElement("div");
    let noteText = document.createElement("h1");

    note.className = "note";
    details.className = "details";
    noteText.textContent = text;


    details.appendChild(noteText);
    note.appendChild(details);

    if (index > random_colors.length - 1)
        index = 0;

    note.setAttribute("style", `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; background-color:${random_colors[index++]}; transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`);

    note.addEventListener("dblclick", () => {
        note.remove();
    })

    document.querySelector("#all_notes").appendChild(note);
}