let imgArr = ["cat1.jpg","cat2.jpg","cat3.jpg","cat4.jpg","cat5.jpg","cat6.jpg","cat7.jpg","cat8.jpg","cat9.jpg"]
function displayImg(){
    let num = Math.floor(Math.random() * (imgArr.length));
    document.canvas.src = "images/" +imgArr[num];
    
}
displayImg()