import angular from 'angular';
import 'angular-ui-router';

import { config } from './utilities/config';

import { HomeController } from './controllers/home.controller'

import { SearchService } from './services/search.service'
import { TemplateService } from './services/template.service'

angular
  .module('app.core', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .service('SearchService', SearchService)
  .service('TemplateService', TemplateService)
;