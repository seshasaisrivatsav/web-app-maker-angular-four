/**
 * Created by sesha on 6/2/17.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';

// injecting service into module
@Injectable()

export class UserService{

  constructor(private _http : Http){

  }




  register(username: String, password : String){

    var body = {
      username : username,
      password : password
    };

    return this._http.post('http://localhost:9000/api/register', body)
      .toPromise()
      .then(data => data );

  }

  login(username: String, password: String){

    var body = {
      username : username,
      password : password
    };

    return this._http.post('http://localhost:9000/api/login', body)
      .toPromise()
      .then(data => { console.log(data); });

  }

}
