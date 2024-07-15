import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'am-button-date',
  standalone: true,
  imports: [],
  templateUrl: './button-date.component.html',
  styleUrl: './button-date.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDateComponent {}
