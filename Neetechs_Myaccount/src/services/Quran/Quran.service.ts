import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class QuranService {

  constructor(private httpClient: HttpClient) { }

  getAllsura() {
    return this.httpClient.get('https://neetechss3.s3.eu-north-1.amazonaws.com/quran.json');
  }

}
