import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  value = '';
  handleInput() {
    const jobDescription = document.getElementById(
      'jobdescription'
    ) as HTMLTextAreaElement;
    this.value = jobDescription.value;
  }
  value1 = '';
  handleInput1() {
    const jobDescription = document.getElementById(
      'jobtype'
    ) as HTMLTextAreaElement;
    this.value1 = jobDescription.value;
  }

  value2 = '';
  handleInput2() {
    const jobDescription = document.getElementById(
      'stipend'
    ) as HTMLTextAreaElement;
    this.value2 = jobDescription.value;
  }
}
