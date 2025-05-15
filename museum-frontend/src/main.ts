import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideProtractorTestingSupport(),
        provideHttpClient()
    ]
}).catch(err => console.error(err));
