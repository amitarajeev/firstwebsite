// Greet the user
console.log("Welcome to My First Website!");

// Add a button interaction
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.addEventListener("click", () => {
        alert("You clicked the header!");
    });
});
