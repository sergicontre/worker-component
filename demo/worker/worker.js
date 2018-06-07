/*global importScripts:true*/
importScripts('../../bower_components/comlink/dist/comlink.global.min.js');

class App {
  constructor() {
    this._counter = 0;
  }

  count() {
    return this._counter;
  }

  inc() {
    this._counter++;
  }
}
/*global Comlink:true*/
Comlink.expose({App}, self);
