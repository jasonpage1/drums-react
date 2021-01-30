import tom1 from '../sounds/tom-1.mp3';
import tom2 from '../sounds/tom-2.mp3';
import tom3 from '../sounds/tom-3.mp3';
import tom4 from '../sounds/tom-4.mp3';
import snare from '../sounds/snare.mp3';
import kickBase from '../sounds/kick-bass.mp3';
import crash from '../sounds/crash.mp3';

export const makeSound=(key) => {

    switch (key) {
      case "w":
        return new Audio(tom1).play();
        
        
  
      case "a":
        return new Audio(tom2).play();
       
  
      case "s":
        return new Audio(tom3).play();
        
      case "d":
        return new Audio(tom4).play();
        break;
  
      case "j":
        return new Audio(snare).play();
      

      case "k":
        return new Audio(kickBase).play();
       
      case "l":
        return new Audio(crash).play();
       
  
  
      default: console.log(key);
  
    }}