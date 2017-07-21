/**
 * Created by mayankrd on 7/11/17.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {environment} from "../../environments/environment";

// injecting service into module
@Injectable()

export class WebsiteService{

  baseUrl = environment.baseUrl;

  constructor(private _http : Http){

  }





  findWebsiteById(websiteId : String){
    return this._http.get(this.baseUrl+ '/api/website/'+websiteId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }


  findWebsitesByUser(userId : String){
    console.log(this.baseUrl+ '/api/user/'+userId+'/website');
    return this._http.get(this.baseUrl+ '/api/user/'+userId+'/website')
      .map(
        (res: Response) => {
          const data = res.json();

          return data;
        }
      );
  }

  createWebsite(userId, website){

    //console.log("create website in client service called", userId, website);

    var body = {
      name : website.name,
      description : website.description,
      developerId : userId
    };

    //http://localhost:9000/api/user/59611de40e8a493006c0cebb/website

    var url = this.baseUrl+ '/api/user/'+userId+'/website';

    console.log("create website in client service called", url, userId, body);

    return this._http.post(url, body)
      .map(
        (res: Response) => {
          const data = res.json();

          return data;
        }
      );

  }

  updateWebsite(websiteId, website){

    var url = this.baseUrl + '/api/website/' + websiteId;
    var body = website;
    return this._http.put(url, body)
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );
  }

  deleteWebsite(websiteId){

    var url = this.baseUrl + '/api/website/' + websiteId;
    return this._http.delete(url)
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );
  }

}
