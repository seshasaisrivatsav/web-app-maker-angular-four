/**
 * Created by mayankrd on 7/15/17.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable();

export class PageService {

  constructor(private _http: Http) {
  }


  createPage(websiteId, page) {
    var url = '/api/website/' + websiteId + '/page';
    return this._http.post(url, page)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findPageByWebsiteId(websiteId, page){
    var url = '/api/website/'+websiteId+'/page';
    return this._http.get(url, page)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findPageById(pageId) {
    var url = '/api/page/'+pageId;
    return this._http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updatePage(pageId, page){
    var url = '/api/page/' +pageId;
    return this._http.put(url,page)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deletePage(pageId){
    var url = '/api/page/' +pageId;
    return this._http.delete(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

}

