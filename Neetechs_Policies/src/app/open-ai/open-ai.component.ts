import { Component, OnInit } from '@angular/core';
import OpenAIAPI from '@openai/api-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-open-ai',
  templateUrl: './open-ai.component.html',
  styleUrls: ['./open-ai.component.scss']
})
export class OpenAiComponent implements OnInit {
  generatedText: string;
  
  constructor() {
    const api = new OpenAIAPI({
      apiKey: environment.OpenAIAPIKey
    });

    api.text({
      prompt: 'Write a short story about a clever fox.',
      model: 'text-davinci-002'
    }).then((response) => {
      this.generatedText = response.data.text;
    });
  }
}
