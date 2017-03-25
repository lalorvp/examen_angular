'use strict';

/**
 * @ngdoc service
 * @name pokemonApp.Config
 * @description
 * # Config
 * Service in the pokemonApp.
 */
angular.module('pokemonApp')
  .constant('Config', {
    
    BASE: 'https://pokeapi.co/api/v2/',
    POKEMON: 'pokemon/?limit=1000',
    DETALLE: 'pokemon/',
    TIPOS: 'type/',

  });
