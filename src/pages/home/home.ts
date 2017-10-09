import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import * as io from "socket.io-client";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  messages: string[] = ['something'];
  chatBox: any = "";
  httpHost: string = "http://192.168.0.131:3000";
  socketHost: string = "http://192.168.0.131:3000";
  socket: any = null;
  constructor(public navCtrl: NavController, public http: Http) {
    this.messages = [];

    this.http.get(this.httpHost + "/fetch").subscribe((success) => {
      var data = success.json();
      for(var i = 0; i < data.length; i++) {
          this.messages.push(data[i].message);
      }
     }, (error) => {
      console.log(JSON.stringify(error));
     });
    this.chatBox = "";

    this.socket = io(this.socketHost);  

    this.socket.on("chat_message", (id, msg) => {
      this.messages.push(msg);
    });    
  }

  send(message) {
    if(message && message != "") {
        //this.messages.push(message);
        this.socket.emit("chat_message", 'myself', message);
    }
    this.chatBox = "";
}
}
