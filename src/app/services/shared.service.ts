/**
 * Created by mayankrd on 8/10/17.
 */

import {Injectable} from "@angular/core";
@Injectable()

export class SharedService {
  user = '';
  widgetPos = {initialIndex: '', finalIndex: ''};

  updateData() {
    console.log(this.widgetPos);
  }
}
