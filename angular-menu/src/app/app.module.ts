import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home-component.component';
import { AllTutorialsComponent } from './all-tutorials/all-tutorials.component';
import { TutorialService } from './tutorial.service';
import { AngDrComponent } from './ang-dr/ang-dr.component';
import { PasingDataIntoAComponentComponent } from './pasing-data-into-a-component/pasing-data-into-a-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RespondingToComponentEventsComponent } from './responding-to-component-events/responding-to-component-events.component';
import { UsingTwoWayDataBindingComponent } from './using-two-way-data-binding/using-two-way-data-binding.component';
import { AccessChildComponentsFromTemplateComponent } from './access-child-components-from-template/access-child-components-from-template.component';
import { ProjectionComponent } from './projection/projection.component';
import { StructuringApplicationWithComponentsComponent } from './structuring-application-with-components/structuring-application-with-components.component';
import { UsingOtherComponentsComponent } from './using-other-components/using-other-components.component';
import { DirectivesComponent } from './directives/directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllTutorialsComponent,
    AngDrComponent,
    PasingDataIntoAComponentComponent,
    PageNotFoundComponent,
    RespondingToComponentEventsComponent,
    UsingTwoWayDataBindingComponent,
    AccessChildComponentsFromTemplateComponent,
    ProjectionComponent,
    StructuringApplicationWithComponentsComponent,
    UsingOtherComponentsComponent,
    DirectivesComponent,
    AttributeDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TutorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
