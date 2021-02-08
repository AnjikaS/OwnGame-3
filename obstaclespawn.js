function spawnObject() {
    //write code here to spawn the object
    if (frameCount % 220 === 0) {
      var object = createSprite(windowWidth,windowHeight-100,40,10);
      object.y = Math.round(random(windowHeight-80,windowHeight-100));
      //villain1.scale = 0.5;
      object.velocityX = -3;
      
       //assign lifetime to the variable
       object.lifetime = windowWidth/3;
       switch(Level){
        case 1:
          object.addImage("fireball", fireball);
          break;
          case 2:
            object.addAnimation("Beam", Beam);
            break;
            case 3:
          object.addAnimation("Ice", Ice);
          break;  
      }
      //add each cloud to the group
      ObjectGroup.add(object);
    }
  }