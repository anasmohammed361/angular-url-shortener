// my-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  template: `
    <section class="p-20 shadow-2xl  rounded-md">
      <div
        class="flex flex-col xl:flex-row gap-2 w-[65vw]"
      >
        <input
          [(ngModel)]="givenUrl"
          placeholder="https://example.com/"
          class="p-4 rounded-md shadow-sm grow"
        />
        <input
          [(ngModel)]="desiredName"
          placeholder="My Short Url Code"
          class="p-4 rounded-md shadow-sm grow"
          type="text"
        />
        <button
          (click)="submitForm()"
          class="py-2 px-8 bg-[#337bf0] rounded-md text-white font-bold"
        >
          Get Short Url
        </button>
      </div>
      <p *ngIf="showElement=='success' " class="outline text-center mt-10 p-2 py-5 font-bold rounded-xl outline-blue-500 text-blue-500">{{ message }}</p>
      <p *ngIf="showElement=='error' " class="outline text-center mt-10 p-2 py-5 font-bold rounded-xl outline-red-500 text-red-500">{{ message }}</p>
    </section>
    
  `,
})
export class MyFormComponent {
  givenUrl: string = '';
  desiredName: string = '';
  showElement:'success'|'error'|undefined;
  message: string = '';
  async submitForm() {
    try {
      const result = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          baseUrl: this.givenUrl,
          shortenedUrl: this.desiredName,
        }),
      });
    
      if (result.ok) {
        this.showElement = 'success'
        this.message = `${location.host}/${this.desiredName}`;
        this.givenUrl = '';
        this.desiredName = '';
      } else {
        this.showElement = 'error'
        const message = await result.text();
        this.message = message;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
