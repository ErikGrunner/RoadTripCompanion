
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
export interface Todo {
  id?: string;
  task: string;
  priority: number;
  createdAt: number;
}
 
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
}