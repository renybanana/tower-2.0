class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.visibility = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed < 2){
        World.add(world, this.body);
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 10;
        tint(255,this.visibility);
        rect(this.body.position.x,this.body.position.y,30,40)
        pop();
      }
    
    }
  }
       
       
        
        

