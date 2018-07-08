import {Component, OnInit} from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  abc: any;

  constructor(private testService: TestService) {
    this.abc = this.testService.testCmd().subscribe(
      (data: any) => this.abc = data.text);
  }

  ngOnInit() {
  }

}
