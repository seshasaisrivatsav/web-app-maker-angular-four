import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
/**
 * Created by sesha on 6/2/17.
 */


// injecting service into module
@Injectable()

export class UserService{

  constructor(private _http : Http){

  }


  register(username: String, password : String){

    return this._http.get('/api')
      .toPromise()
      .then(data => { console.log(data); });

  }

}
