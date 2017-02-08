var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.

function createFirstScene() {
        var cheese = Math.random()
if(cheese < 1) {  makeImage("https://www.walldevil.com/wallpapers/a18/thumb/abstract-backgrounds-desktop-background-cool-wallpaper-pattern-contour-tocool-back-lines.jpg", 0, 0, 300, 200, 1); 
  makeCircle(100, 50, 40, "blue", 1.0);
makeCircle(90, 40, 30, "magenta", 1.0);
makeCircle(80, 40, 10, "black");
makeCircle(120, 60, 10, "yellow");
makeCircle(80, 40, 5, "yellow");
makeCircle(120, 60, 5, "black");
makeRect(50, 80, 130, 6, "green");
makeText ("i have seen hell", 30, 10, 5);
makeText ("please send me a cheeseburger", 130, 20, 5);
    

} else if (cheese < 2) {
}
}

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeImage("http://www.pixelstalk.net/wp-content/uploads/2016/10/Download-Aesthetic-Images-HD.jpg", 0, 0, 300, 170, 1);
makeRect(40, 50, 18, 30, "red");
makeCircle(40, 50, 10, "hotpink");
makeCircle(40, 50, 7, "orange");
makeCircle(40, 50, 3, "lime");
makeRect(45, 59, 12, 4, "darkblue");
makeText ("what is the meaning of life", 20, 36, 3);
makeText ("im george washing machine", 0, 65, 3);
    
}

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    makeImage(" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReY37TATLto85OzFon6T2wQnbDVn5BnjH5ZvJ49rN7rm0_9khO", 0, 0, 300, 200, 1);
    makeEllipse (170, 70, 20, 10, "cyan");
makeCircle(170, 70, 6, "pink");
makeCircle(170, 70, 3, "red");
makeCircle(170, 70, 2, "blue");
makeCircle(170, 70, 1, "green");
makeText ("i am an egg what are you", 150, 56, 4);

makeCircle(10, 130, 40, "white");
makeCircle(10, 131, 40, "black", 0.25);
makeRect (10, 99, 4, 2, "red");
makeText ("help me im trapped in sadness", 36, 98, 4);
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var elephantus = Math.random()
    if (elephantus < 0.33){
        createFirstScene()
    // If the number is less than 0.33, call the function to create your first scene.
        } else if (elephantus < 0.67){
createSecondScene()
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
        } else {
createThirdScene()
    
    
    // Else, call the function to create your third scene.
    
    
        }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}