import angular from 'angular';
import 'angular-ui-router';

import { config } from './utilities/config';

import { HomeController } from './controllers/home.controller'

import { SearchService } from './services/search.service'

angular
  .module('app.core', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .service('SearchService', SearchService)
;