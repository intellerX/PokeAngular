import { Component, Input } from '@angular/core';
import { ButtonRole } from '../../../../core/enums/buttonRole.enum';

@Component({
  selector: 'app-actions-header',
  templateUrl: './actions-header.component.html',
  styleUrls: ['./actions-header.component.scss'],
})
export class ActionsHeaderComponent {
  // eslint-disable-next-line @typescript-eslint/ban-types
  @Input() formCompomentRef: any | undefined;

  buttonRole = ButtonRole;

  onNew(): void {
    if (this.formCompomentRef) this.formCompomentRef.onCancel();
  }
}
