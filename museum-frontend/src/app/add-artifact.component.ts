import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Artifact } from './artifact';

@Component({
    selector: 'app-add-artifact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
        <div class="modal-backdrop" (click)="close()"></div>
        <div class="modal">
            <h2>Add Artifact</h2>
            <form (ngSubmit)="save()">
                <label>
                    Nimetus:
                    <input [(ngModel)]="artifact.name" name="name" required />
                </label>
                <label>
                    Kood:
                    <input [(ngModel)]="artifact.code" name="code" required />
                </label>
                <label>
                    Kategooria:
                    <input [(ngModel)]="artifact.category" name="category" required />
                </label>
                <label>
                    Materjal:
                    <input [(ngModel)]="artifact.material" name="material" required />
                </label>
                <label>
                    Periood:
                    <input [(ngModel)]="artifact.period" name="period" required />
                </label>
                <button type="submit">Salvesta</button>
                <button type="button" (click)="close()">Tühista</button>
            </form>
        </div>
    `,
    styleUrls: ['./edit-artifact.component.css']
})
export class AddArtifactComponent {
    artifact: Artifact = {} as Artifact;
    @Output() saved = new EventEmitter<Artifact>();
    @Output() closed = new EventEmitter<void>();

    save() {
        this.saved.emit(this.artifact);
        this.close();
    }

    close() {
        this.closed.emit();
    }
}