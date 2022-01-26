function newImage(source, leftVal, botVal) {
    let newImage = document.createElement('img');
    newImage.src = source;
    newImage.style.position = 'fixed';
    newImage.style.left = leftVal;
    newImage.style.bottom = botVal;
    document.body.append(newImage);
}

function newItem(source, leftVal, botVal){
    let newItem = document.createElement('img')
    newItem.src = source
    newItem.style.position = 'fixed'
    newItem.style.left = leftVal
    newItem.style.bottom = botVal
    document.body.append(newItem)
    
    newItem.addEventListener('dblclick', function(){
        newItem.remove()
    })
}


newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/red-character.gif', '300px', '400px');

newItem('assets/shield.png', '100px', '200px');
newItem('assets/sword.png', '400px', '400px');