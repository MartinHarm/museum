import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Needed for [(ngModel)]
import { ArtifactService, Page } from './artifact.service';
import { Artifact } from './artifact';
import { EditArtifactComponent } from './edit-artifact.component';
import { AddArtifactComponent } from './add-artifact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, EditArtifactComponent, AddArtifactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ristema talu muuseum';
  artifacts: Artifact[] = [];
  selectedArtifact: Artifact | null = null;
  isAddModalOpen = false;

  // Pagination + search
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;
  searchTerm = '';

  constructor(private artifactService: ArtifactService) {}

  ngOnInit(): void {
    this.loadArtifacts();
  }

  loadArtifacts(): void {
    this.artifactService.getArtifacts(this.searchTerm, this.currentPage, this.pageSize)
      .subscribe({
        next: (page: Page<Artifact>) => {
          this.artifacts = page.content;
          this.totalPages = page.totalPages;
        },
        error: err => {
          console.error('Failed to load artifacts:', err);
        }
      });
  }

  onSearch(searchTerm: string): void {
    this.currentPage = 0;
    this.loadArtifacts();
  }

  goToPage(page: number): void {
      console.log(page);
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadArtifacts();
    }
  }

  onArtifactClick(artifact: Artifact): void {
    this.selectedArtifact = { ...artifact };
  }

  onArtifactUpdated(updated: Artifact): void {
    this.artifactService.updateArtifact(updated).subscribe({
      next: saved => {
        const index = this.artifacts.findIndex(a => a.id === saved.id);
        if (index > -1) this.artifacts[index] = saved;
        this.selectedArtifact = null;
      },
      error: err => {
        console.error('Error saving artifact:', err);
        alert('Failed to save artifact.');
      }
    });
  }

  openAddModal(): void {
    this.isAddModalOpen = true;
  }

  closeAddModal(): void {
    this.isAddModalOpen = false;
  }

  onArtifactAdded(newArtifact: Artifact): void {
    this.artifactService.createArtifact(newArtifact).subscribe({
      next: () => this.loadArtifacts(),
      error: err => {
        console.error('Error adding artifact:', err);
        alert('Failed to add artifact.');
      }
    });
  }

  closeModal(): void {
    this.selectedArtifact = null;
  }

  deleteArtifact(event: MouseEvent, artifactId: number): void {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete this artifact?')) {
      this.artifactService.deleteArtifact(artifactId).subscribe({
        next: () => this.loadArtifacts(),
        error: err => {
          console.error('Error deleting artifact:', err);
          alert('Failed to delete artifact.');
        }
      });
    }
  }
}
