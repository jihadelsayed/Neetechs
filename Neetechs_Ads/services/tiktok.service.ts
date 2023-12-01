import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TikTokService {
  private apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.tiktok.com';
  private yourAccessToken = 'tdq9dya6EYhPqdL7EZgPt2Kb8XATFt0C';
  private appId = '7274358158867384325';
  private clientId = 'awonjn0wg8k314tm';
  private clientSecret = 'tdq9dya6EYhPqdL7EZgPt2Kb8XATFt0C';
  private redirectUri = 'http://localhost:8100';
  constructor(private http: HttpClient) {}

  // Replace 'YOUR_ACCESS_TOKEN' with your actual access token
  private headers = new HttpHeaders({
    Authorization: 'tdq9dya6EYhPqdL7EZgPt2Kb8XATFt0C',
  });
  initiateOAuth(): void {
    const authorizationUrl = `https://open-api.tiktok.com/oauth/authorize?client_key=${this.clientId}&redirect_uri=${this.redirectUri}&scope=user.info.basic&response_type=code`;
    window.location.href = authorizationUrl;
  }
  exchangeCodeForToken(code: string): Observable<any> {
    const tokenUrl = 'https://open-api.tiktok.com/oauth/access_token';
    const data = {
      client_key: this.clientId,
      client_secret: this.clientSecret,
      code: code,
      redirect_uri: this.redirectUri,
      grant_type: 'authorization_code',
    };

    return this.http.post(tokenUrl, data);
  }
  // Example: Fetch TikTok videos by a specific user
  getTikTokVideosByUser(username: string) {
    const url = `${this.apiUrl}/v2/user/${username}/video/list`;
    return this.http.get(url, { headers: this.headers });
  }
  fetchTikTokVideos(userId: string, count: number): Observable<any> {
    // Make the HTTP request and return the Observable
    userId = 'jihad.sayed';
    return this.http.get<any>(
      `${
        this.apiUrl
      }/v2/videos?user_id=${userId}&count=${count}&access_token=${localStorage.getItem(
        'accessToken'
      )}`
    );
  }
  // Add more methods for different TikTok API endpoints as needed.
}
