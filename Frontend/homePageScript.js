const searchInput = document.getElementsByClassName("form-control me-2");
const searchBtn = document.getElementById("searchbtn");
const entryDate = document.getElementById("entryDate");
const entryText = document.getElementById("entryText");
const SaveBtn = document.getElementById("SaveBtn");
const clearBtn = document.getElementById("clearBtn");

searchBtn.addEventListener("click", () => {
    alert(`You searched for ${searchInput[0].value}`);
});

SaveBtn.addEventListener("click", () => {
    alert("Entry saved successfully");
});

clearBtn.addEventListener("click", () => {
    entryText.value = "";
    entryDate.value = null;
});