# GHPLibraryWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## Commit Instructions

- Please follow below instructions to take advantage of automated versioning and publish of package.

- While creating pull requests to `main` branch please be mindful to include below `tags` so the pipeline picks it up to bump version type accordingly

  > `[MAJOR]` - The major version should increase when we’ve introduced new functionality which breaks our API, i.e., increase this value when we’ve added a backward-incompatible change to our project.
  
  > `[MINOR]` - We should increase our minor version when we’ve introduced new functionality which changes our API but is backward compatible, i.e., a non-breaking change.
  
  > `[PATCH]` - Under the SemVer specs, we reserve patch changes for backward-compatible bug fixes.
  
  <sub>Kindly refer to [semver's](https://semver.org/) official docs for more detailed explanation regarding type of versioning that holds good for your changes</sub>

- An example pull request commit message for Patch versioning could be:
  > `[PATCH] Added some css changes to app-xyz component`
  
- At this point in time, we are not considering any pre-release versioning handled by github pipeline.
  
- **NOTE:** A pull request without any above mentioned `tags` will fail the deploy pipeline
