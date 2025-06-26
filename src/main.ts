import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HomePageComponent } from './app/pages/home-page.component';

bootstrapApplication(HomePageComponent, {
  providers: [provideRouter(routes)],
});
