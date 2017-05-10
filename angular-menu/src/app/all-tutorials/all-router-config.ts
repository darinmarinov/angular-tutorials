import { allDrRouter } from '../ang-dr/ang-dr-router-config';
import { AllTutorialsComponent } from './all-tutorials.component';
import { passingDataConfig } from '../pasing-data-into-a-component/pasing-data-into-a-component-router-config';
import { RespondinComponentConfig} from '../responding-to-component-events/responding-to-component-events-router-config';
import { UsingDataBindingConfig } from "app/using-two-way-data-binding/using-two-way-data-binding-router-config";
import { accessChildComponentConfig } from '../access-child-components-from-template/access-child-component-router-config';
import { projectionConfig } from '../projection/projection-router-config';
import {StructuringApplicationWithComponentConfig} from '../structuring-application-with-components/structuring-application-with-components-router-config';
import { UsingOtherComponentsConfig } from '../using-other-components/using-other-components-router-config';
import { DirectivesConfig } from '../directives/directives-router-config';
import { AttributeDirectiveConfig } from '../attribute-directives/attribute-directives-router-config';


import { Component } from '@angular/core';
export const allRouter = [
    {
     path:'all-tutorials',
     component:AllTutorialsComponent,
     children:[
       ...allDrRouter,
        ...passingDataConfig,
        ...RespondinComponentConfig,
        ...UsingDataBindingConfig,
        ...accessChildComponentConfig,
        ...projectionConfig,
        ...StructuringApplicationWithComponentConfig,
        ...UsingOtherComponentsConfig,
        ...DirectivesConfig,
        ...AttributeDirectiveConfig
     ]
    }
]