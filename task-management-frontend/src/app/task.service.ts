import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8080/api/v1/tasks';

  constructor(private http: HttpClient) {}

  getTasks(filters?: { dueBefore?: string; priority?: string }): Observable<Task[]> {
    let params = new HttpParams();
    if (filters?.dueBefore) params = params.set('dueBefore', filters.dueBefore);
    if (filters?.priority) params = params.set('priority', filters.priority);

    console.log('Request Params:', params.toString()); // 🪵 log to console

    return this.http.get<Task[]>(this.baseUrl, { params });
  }

}
