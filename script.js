const floatAnimation = () => {
         const tlCan = new TimelineMax({repeat:-1});
         /*Can Animation*/
        tlCan
            //move top left
        .to('.can > img', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
        
            //move down right
        .to('.can > img', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})
        
        
        .to('.can > img', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
        
        .to('.can > img', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
        
        
        .to('.can > imgn', 3, { y:'-=50', ease:Power1.easeInOut})
           
        .to('.can > img', 3, { y:'+=50', ease:Power1.easeInOut})
        
        
        .to('.can > img', 3, { y:'-=30', ease:Power1.easeInOut})
           
        .to('.can > img', 3, { y:'+=30', ease:Power1.easeInOut})
        
        
        .to('.can > img', 2, { y:'-=30', ease:Power1.easeInOut})
           
        .to('.can > img', 2, { y:'+=30', ease:Power1.easeInOut})
  
      TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})

    }
    floatAnimation();
