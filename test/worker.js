/*global importScripts:true*/
importScripts('../bower_components/comlink/dist/comlink.global.min.js');

class App {
  constructor() {
    this._counter = 0;
  }

  async count() {
    return this._counter;
  }

  inc() {
    this._counter++;
  }
}
Comlink.expose({App}, self);
