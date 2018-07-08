import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pre',
  templateUrl: './pre.component.html',
  styleUrls: ['./pre.component.css']
})
export class PreComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      $('#full-page-preloader').fadeOut(500);
    }, 1000);
  }

}
