/**
 * Created by sesha on 6/2/17.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

// injecting service into module
@Injectable()

export class UserService{

  constructor(private _http : Http){

  }

  findUserById(userId : String){
    return this._http.get('http://localhost:9000/api/user/'+userId)
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

    return this._http.post('http://localhost:9000/api/register', body)
       .toPromise()
       .then(data => {return data});

  }

  login(username: String, password: String){

    var body = {
      username : username,
      password : password
    };

    return this._http.post('http://localhost:9000/api/login', body)
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
    return this._http.put('http://localhost:9000/api/user/'+ user._id, user)
      .map(
        (res: Response) => {
          console.log("client service");
          return "Updated";
        }
      );

  }

}
