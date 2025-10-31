# Grid

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.


Basically it displays randomly (as random as JS gets) generated playing cards. You choose the number of cards and the number of columns to display them in.
It demoes CSS Custom Properties, which when combined with Angular can dynamically change the CSS and therefore the whole UI.

The number of cards is held within RxJS (not that it is really needed here) and the number of columns is held in a CSS dynamic variables (they call them 'custom properties' but I feel 'dynamic variables' explains what they do a lot better). Then through the magic of Angular, the screen refreshes quickly.

Other uses of Custom Properties would be changing the base site-wide font size (great for accessibly) or even the base colour pallette.

Testing is handled by Cypress (e2e) and Jest (unit). Uses CSS Flex and Grid. Uses RxJS for state management.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
