import { Component } from '@angular/core';
import { ImagesService } from './images.service';
import { Images } from './Images';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private ImagesService: ImagesService) {}
  name = 'Angular';
  pointSize = 7;
  element: Element;
  root: Element;
  ctx;
  canvas;

  ngOnInit() {
    // this.getPosition(235, 270, 70);
    //  this.getPosition(285, 270, 170);
  }
  images: Images[] = [];
  getPosition(event) {
    this.element = <Element>this.root;
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    let curleft = 0,
      curtop = 0;
    var color = '#ff2626';
    // var x = event.clientX - this.canvas.getBoundingClientRect.clientLeft;
    //var y = event.clientY - this.canvas.getBoundingClientRect.clientTop;
    var x = event.clientX - this.canvas.getBoundingClientRect().left;
    var y = event.clientY - this.canvas.getBoundingClientRect().top;

    this.drawCoordinates(x, y, color);
    this.getAddDataPoint(x, y);
  }

  drawCoordinates(x, y, color) {
    // alert(x + '   ' + y);
    // const grd = this.ctx.createLinearGradient(0, 0, color, 0);
    // grd.addColorStop(0, 'red');
    // grd.addColorStop(1, "red");
    this.ctx.fillStyle = color; // Red color

    this.ctx.beginPath();
    this.ctx.arc(Number(x), Number(y), this.pointSize, 0, Math.PI * 2, true);
    this.ctx.fill();

    //const coord = "x=" + x + ", y=" + y;
    //const p = this.ctx.getImageData(x, y, 1, 1).data;
    //const hex = "#" + ("000000" + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
    //console.log(hex);
  }
  public getAddDataPoint(x, y) {
    let img = new Images();
    img.X = x;
    img.Y = y;
    this.ImagesService.addImages(img as Images).subscribe((img) => {
      this.images.push(img);
    });
    //console.log(event);
  }
  rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255) throw 'Invalid color component';
    return ((r << 16) | (g << 8) | b).toString(16);
  }
}
