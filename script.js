let slider = document.querySelector("#pixelSize");
let output = document.querySelector("#sliderOutput");
let reset= document.querySelector("#reset")
let canvas = document.querySelector(".canvas");
let canvasSize


let setSize =() => canvasSize = slider.value
let update = () => output.innerHTML= `${canvasSize} x ${canvasSize}`

function buildCanvas(){
    // Delete canvas first
    document.querySelectorAll(".column").forEach(e=>e.remove());
    //build collumns first
for (let i = 1; i <=canvasSize; i ++){
    let tile = document.createElement("div");
    tile.className= "column";
    canvas.appendChild(tile)
    };
    // Fill collumns with tiles
let vertical = document.querySelectorAll(".column");
vertical.forEach((column) => {
 for (let i = 1; i <=canvasSize; i ++){
    let tile = document.createElement("div");
    tile.className= "tile";
    column.appendChild(tile)} 
 })
 // add mouseover to change color
 allTiles = document.querySelectorAll(".tile");
 allTiles.forEach((square) => {
    square.addEventListener("mouseover", () => square.classList.add("active"))})
}
 

// reset button
reset.addEventListener("click", ()=> {
    allTiles.forEach((square) => { 
        square.classList.remove("active")})})


// slider event listeners
slider.addEventListener("input", update)
slider.addEventListener("input", setSize)
slider.addEventListener("input", buildCanvas)

//primary loading of canvas
 setSize()
 update()
 buildCanvas()
 


