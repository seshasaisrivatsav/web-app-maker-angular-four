/**
 * Created by mayankrd on 7/26/17.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {

    console.log("before split: ", url);
    var parts = url.split("=");
    var id = parts[1];
    url = "https://www.youtube.com/embed/" +id;
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
