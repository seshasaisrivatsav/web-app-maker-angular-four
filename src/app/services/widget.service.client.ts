/**
 * Created by mayankrd on 7/20/17.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WidgetService{

  baseUrl = 'http://localhost:9000';

  constructor(private _http : Http){}

  createWidget(pageId, widget){
    var url = this.baseUrl+"/api/page/"+pageId+"/widget";
    return this._http.post(url, widget)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        });
  }

  findWidgetsByPageId(pageId) {
    var url = this.baseUrl+"/api/page/"+pageId+"/widget";
    return this._http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWidgetById(widgetId) {
    var url = this.baseUrl+"/api/widget/"+widgetId;
    return this._http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateWidget(widgetId, widget) {
    var url = this.baseUrl+"/api/widget/"+widgetId;
    return this._http.put(url, widget)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteWidget(widgetId,pageId, position) {
    var url = this.baseUrl+"/api/widget/"+widgetId+"?pageId="+pageId+"&postobedeleted="+position;
    return this._http.delete(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

}
