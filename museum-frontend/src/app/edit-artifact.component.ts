import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Artifact } from './artifact';

@Component({
    selector: 'app-edit-artifact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="modal-backdrop" (click)="close()"></div>
    <div class="modal">
      <h2>Edit Artifact</h2>
      <form (ngSubmit)="save()">
        <label>
          Name:
          <input [(ngModel)]="artifact.name" name="Nimetus" />
        </label>
        <label>
          Code:
          <input [(ngModel)]="artifact.code" name="Kood" />
        </label>
        <label>
          Category:
          <input [(ngModel)]="artifact.category" name="Kategooria" />
        </label>
        <label>
          Material:
          <input [(ngModel)]="artifact.material" name="Materjal" />
        </label>
        <label>
          Period:
          <input [(ngModel)]="artifact.period" name="Periood" />
        </label>
        <!-- Add more fields as needed -->

        <button type="submit">Salvesta</button>
        <button type="button" (click)="close()">Tühista</button>
      </form>
    </div>
  `,
    styleUrls: ['./edit-artifact.component.css']
})
export class EditArtifactComponent {
    @Input() artifact!: Artifact;
    @Output() updated = new EventEmitter<Artifact>();
    @Output() closed = new EventEmitter<void>();

    save() {
        this.updated.emit(this.artifact);
        this.close();
    }

    close() {
        this.closed.emit();
    }
}
