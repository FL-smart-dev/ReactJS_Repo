class MerchantInfo {
  static _listeners = [];
  static _merchantName = "";
  static _merchantHandle = "";
  static _squareProductionKey = "";
  static _locations = [];

  static subscribe(callback) {
    this._listeners.push(callback);
  }

  static unsubscribe(callback) {
    this._listeners = this._listeners.filter(
      (listener) => listener !== callback
    );
  }

  static notify() {
    console.log("Notifying MerchantInfo listeners...");
    this._listeners.forEach((listener) => listener());
  }

  static get merchantName() {
    return this._merchantName;
  }

  static set merchantName(name) {
    this._merchantName = name;
  }

  static get merchantHandle() {
    return this._merchantHandle;
  }

  static set merchantHandle(handle) {
    this._merchantHandle = handle;
  }

  static get squareProductionKey() {
    return this._squareProductionKey;
  }

  static set squareProductionKey(key) {
    this._squareProductionKey = key;
  }

  static get locations() {
    return this._locations;
  }

  static set locations(locations) {
    this._locations = locations;
    this.notify();
  }
}

export default MerchantInfo;
