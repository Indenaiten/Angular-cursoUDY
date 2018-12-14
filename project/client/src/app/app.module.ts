//IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//IMPORTS OF COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

//APP MODULE CLASS
@NgModule({
  //DECLARATIONS
  declarations: [
    AppComponent, //APP COMPONENT
    HeaderComponent, //HEADER COMPONENT
    NavComponent, //NAV COMPONENT
    FooterComponent //FOOTER COMPONENT
  ],

  //IMPORTS
  imports: [
    BrowserModule
  ],

  //PROVIDERS
  providers: [],

  //BOOTSTRAP
  bootstrap: [AppComponent]
})
export class AppModule{

}//END OF APP MODULE CLASS
