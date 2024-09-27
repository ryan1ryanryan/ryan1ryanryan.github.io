const floatAnimation = () => {
         const tlCan = new TimelineMax({repeat:-1});
         /*Can Animation*/
        tlCan
            //move top left
        .to('.Jarrel > img', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
        
            //move down right
        .to('.Jarrel > img', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})
        
        
        .to('.Jarrel > img', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
        
        .to('.Jarrel > img', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
        
        
        .to('.Jarrel > imgn', 3, { y:'-=50', ease:Power1.easeInOut})
           
        .to('.Jarrel > img', 3, { y:'+=50', ease:Power1.easeInOut})
        
        
        .to('.Jarrel > img', 3, { y:'-=30', ease:Power1.easeInOut})
           
        .to('.Jarrel > img', 3, { y:'+=30', ease:Power1.easeInOut})
        
        
        .to('.Jarrel > img', 2, { y:'-=30', ease:Power1.easeInOut})
           
        .to('.Jarrel > img', 2, { y:'+=30', ease:Power1.easeInOut})
  
      TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})

    }
    floatAnimation();
