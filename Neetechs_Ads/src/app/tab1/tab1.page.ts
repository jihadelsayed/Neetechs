import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TikTokService } from 'services/tiktok.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  tiktokVideos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private tiktokService: TikTokService
  ) {}

  startOAuthFlow(): void {
    this.tiktokService.initiateOAuth();
  }
  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      const code = queryParams['code'];
      if (code) {
        // Exchange code for access token
        this.tiktokService.exchangeCodeForToken(code).subscribe((response) => {
          const accessToken = response.access_token;
          console.log(accessToken);
          localStorage.setItem('accessToken', accessToken);
          // Handle access token (store it, use it for API requests, etc.)
        });
      }
    });
    // Fetch TikTok videos and populate tiktokVideos array
    if (localStorage.getItem('accessToken')) {
      this.tiktokService
        .fetchTikTokVideos('userId', 10)
        .subscribe((videos: any[]) => {
          this.tiktokVideos = videos;
        });
    } else {
      this.tiktokService.initiateOAuth();
    }
  }
}
