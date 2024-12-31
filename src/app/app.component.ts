import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Paroisse_Lyon_Front';

  constructor(private http: HttpClient) {}
  // Get on the server
  get() {
    this.http.get('http://localhost:8080/api/hello', { responseType: 'text' }).subscribe((res: string) => {
      // convert the response to a string
      console.log(res);
    });
  }
}
