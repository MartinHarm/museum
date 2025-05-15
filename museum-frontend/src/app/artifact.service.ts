import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artifact } from './artifact';
import { environment } from '../environments/environment';

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ArtifactService {
  private apiUrl = `${environment.API_URL}/artifacts`;

  constructor(private http: HttpClient) {}

  getArtifacts(search: string = '', page: number = 0, size: number = 10): Observable<Page<Artifact>> {
    const params = new HttpParams()
      .set('search', search)
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Page<Artifact>>(this.apiUrl, { params });
  }

  updateArtifact(artifact: Artifact): Observable<Artifact> {
    return this.http.put<Artifact>(`${this.apiUrl}/${artifact.id}`, artifact);
  }

  createArtifact(artifact: Artifact): Observable<Artifact> {
    return this.http.post<Artifact>(this.apiUrl, artifact);
  }

  deleteArtifact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
