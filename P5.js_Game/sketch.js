// Variasveis Globais
//Jogador(player)
var p1_sizeX = 30;
var p1_sizeY = 30;
var p1_X = (400/2)-p1_sizeX;
var p1_y = (400/2)-p1_sizeY;

//Caixas(plataformas)
var p_X = 400/2;
var p_y = 400/2;
var p_sizeX = 0;
var p_sizeY = 0;


function setup() {
    createCanvas(400, 400);
}
  
function draw() {
    background('blue');
    rect(p1_X, p1_y, p1_sizeX, p1_sizeY);
    // rect(p_X, p_y, p_sizeX, p_sizeY);
}