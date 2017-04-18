import { Component } from '@angular/core';
import Users from './meetup'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = Users();
  title = 'Ganador del ngBook v4!';
  winner = {name:"Esperando ganardor.."}
  button = 'Obtener Ganador!'
  getWinner(){
    let min = 0;
    let max = this.users.length
    let offset = min;
    let range = (max - min) + 1;
    let randomNumber = Math.floor( Math.random() * range) + offset;
    this.button = 'buscando al ganador...';
    setTimeout(()=>{
       this.button = 'Felicidades :D';
       this.winner = this.users[randomNumber];
    },3000)
    
  }
}
