import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-line',
  standalone: true,
  imports: [],
  templateUrl: './button-line.component.html',
  styleUrl: './button-line.component.css'
})
export class ButtonLineComponent {
  @Output() onNextPrev = new EventEmitter<number>();

  nextReview() {
    this.onNextPrev.emit(1);
  }

  prevReview() {
    this.onNextPrev.emit(-1);
  } 
}
