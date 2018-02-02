import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'test-vew-ctrl',
  templateUrl: 'test-view-ctrl.component.html'
})
export class TestViewCtrlPage implements OnInit {

  constructor(public viewCtrl: ViewController) {
  }

  ngOnInit(): void {
    console.log('on init');
  }
}
