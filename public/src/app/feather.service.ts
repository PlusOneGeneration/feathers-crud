import { Injectable } from '@angular/core';

import * as feathers from 'feathers/client';
// import * as feathersRx from 'feathers-reactive';
// import * as io from 'socket.io-client';
import * as hooks from 'feathers-hooks';
import * as socketio from 'feathers-socketio/client';
import * as authentication from 'feathers-authentication-client';
// import * as localstorage from 'feathers-localstorage';
const superagent = require('superagent');
import * as rest from 'feathers-rest/client';

import * as Rx from 'rxjs';

const HOST = 'http://localhost:3030';

@Injectable()
export class FeatherService {
  // There are no proper typings available for feathers, due to its plugin-heavy nature
  private _feathers: any;
  private _socket: any;

  constructor() {
    // this._socket = io('http://localhost:3030');       // init socket.io

    this._feathers = feathers();
    this._feathers.configure(rest(HOST).superagent(superagent));// init Feathers
    this._feathers.configure(hooks());
               // add hooks plugin
    // this._feathers.configure(feathersRx(Rx));         // add feathers-reactive plugin
    // this._feathers.configure(socketio(this._socket)); // add socket.io plugin
    this._feathers.configure(authentication({         // add authentication plugin
      storage: window.localStorage
    }));

  }

  // expose services
  public service(name: string) {
    return this._feathers.service(name);
  }
  //
  public app() {
    return this._feathers;
  }

  // expose authentication
  public authenticate(credentials?): Promise<any> {
    // console.log('aa', this._feathers);
    return this._feathers.authenticate(credentials);

  }

  // expose logout
  public logout() {
    return this._feathers.logout();
  }

}
