/**
 * Created by sesha on 6/2/17.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
// injecting service into module
@Injectable()

export class UserService{

  constructor(private _http : Http){

  }

  baseUrl = environment.baseUrl;


  findUserById(userId : String){
    return this._http.get(this.baseUrl + '/api/user/'+userId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  register(username: String, password : String){

    var body = {
      username : username,
      password : password
    };

    return this._http.post(this.baseUrl + '/api/register', body)
       .toPromise()
       .then(data => {return data});

  }

  login(username: String, password: String){

    var body = {
      username : username,
      password : password
    };

    return this._http.post(this.baseUrl + '/api/login', body)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
      // .toPromise()
      // .then(data => {
      //   console.log("response after login", data);
      //   return data;
      // });

  }

  updateUser(user : any){
    return this._http.put(this.baseUrl + '/api/user/'+ user._id, user)
      .map(
        (res: Response) => {
          console.log("client service");
          return "Updated";
        }
      );

  }

}
