import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simpledemo2112';
  x = _.cloneDeep({a: { b: { c: 1 }}});

  constructor() {
    console.log('x', this.x);
  }

}
