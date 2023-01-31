import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KitsuService {
  constructor(private httpClient: HttpClient) {}
}
