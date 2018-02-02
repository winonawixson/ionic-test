import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit, OnDestroy {
  messages = new Array<string>();

  constructor() {
    this.messages.push('constructor');
  }

  ngOnInit(): void {
    this.messages.push('ng on init')
  }

  ngOnDestroy(): void {
    this.messages.push('on destroy');
    console.log('messages: ', this.messages);
  }
  ionViewDidLoad(): void {
    this.messages.push('ion view did load');
  }

  ionViewWillEnter(): void {
    this.messages.push('ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    this.messages.push('ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    this.messages.push('ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    this.messages.push('ionViewDidLeave');
  }

  ionViewWillUnload(): void {
    this.messages.push('ionViewWillUnload');
  }

  ionViewCanEnter(): boolean {
    this.messages.push('ionViewCanEnter');
    return true;
  }

  ionViewCanLeave(): boolean {
    this.messages.push('ionViewCanLeave');
    return true;
  }
}
