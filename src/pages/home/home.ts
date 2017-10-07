import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import { NgZone } from "@angular/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messages: string[] = ['something'];
  chatBox = "";
  constructor(public navCtrl: NavController) {
    this.messages = [];
    this.messages.push("msg 1")
    this.messages.push("msg 2")
    this.chatBox = "type your message here...";
  }
  send(message) {
    if(message && message != "") {
        this.messages.push(message);
        //this.socket.emit("chat_message", message);
    }
    this.chatBox = "";
}
}
