const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var maxDrop= 100;
var drops=[];

function preload(){
    
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(400,600);
   for(var i = 0; i<maxDrop; i++){
       drops.push(new Drop());
   }
    
}

function draw(){
    background(0);
    for(var i = 0; i<maxDrop; i++){
        drops[i].display();
    }
}   

