export const revealContents = (event) => {
    // console.log(event.currentTarget)
    if(event.currentTarget.classList.contains(`dd-inner-container`)) {
    
      let children = event.currentTarget.parentNode.children;
      for(var i = 1; i < children.length; i++) {
          if(children.item(i).classList.contains('newName')) {
              children.item(i).classList.remove('newName');
          } else {
            children.item(i).className += ' newName';
          }
          console.log(children.item(i))
      }
  }

}