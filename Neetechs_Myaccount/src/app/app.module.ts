import { UserNotificationsMenuComponent } from './header/user-notifications-menu/user-notifications-menu.component';
import { SearchMenuComponent } from './header/search-menu/search-menu.component';
import { MenuComponent } from './header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './spinner/spinner.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { LoginMenuComponent } from './header/login-menu/login-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Profile/about/about.component';
import { CompetenciesComponent } from './Profile/competencies/competencies.component';
import { CompleteExperienceComponent } from './Profile/complete/complete-experience/complete-experience.component';
import { CompleteStudyComponent } from './Profile/complete/complete-study/complete-study.component';
import { CompleteComponent } from './Profile/complete/complete.component';
import { DeleteAccountComponent } from './Profile/delete-account/delete-account.component';
import { EditErfarenhetComponent } from './Profile/edit-erfarenhet/edit-erfarenhet.component';
import { EditIntressenComponent } from './Profile/edit-intressen/edit-intressen.component';
import { EditKompetenserComponent } from './Profile/edit-kompetenser/edit-kompetenser.component';
import { EditOMComponent } from './Profile/edit-om/edit-om.component';
import { EditPersronUppgifterComponent } from './Profile/edit-persron-uppgifter/edit-persron-uppgifter.component';
import { EditStudierComponent } from './Profile/edit-studier/edit-studier.component';
import { ExperienceComponent } from './Profile/experience/experience.component';
import { ImageEditComponent } from './Profile/image-edit/image-edit.component';
import { InterestsComponent } from './Profile/interests/interests.component';
import { PersonalInfoComponent } from './Profile/personal-info/personal-info.component';
import { ProfileHeaderComponent } from './Profile/profile-header/profile-header.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { StudyComponent } from './Profile/study/study.component';

// profile



@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
    LoginMenuComponent,
    MenuComponent,
    SearchMenuComponent,
    UserMenuComponent,
    UserNotificationsMenuComponent,
    // profile
    //CompleteComponent,
    //EditOMComponent,
    //EditPersronUppgifterComponent,
    EditErfarenhetComponent,
    EditStudierComponent,
    EditKompetenserComponent,
    EditIntressenComponent,
    DeleteAccountComponent,
    PersonalInfoComponent,
    CompetenciesComponent,
    //StudyComponent,
    InterestsComponent,
    ExperienceComponent,
    ProfileComponent,
    AboutComponent,
    ProfileHeaderComponent,
    //ProfileServicesComponent,
    //ImageEditComponent,
    CompleteStudyComponent,
    CompleteExperienceComponent

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
