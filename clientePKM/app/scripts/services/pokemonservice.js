'use strict';

/**
 * @ngdoc service
 * @name pokemonApp.PokemonService
 * @description
 * # PokemonService
 * Service in the pokemonApp.
 */
angular.module('pokemonApp')
  .service('PokemonService', function (Config, $q, $http, $cookies) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function listado(){
    	var deferred = $q.defer();

    	$http.get(Config.BASE + Config.POKEMON)
    		.then(function(response){
    			deferred.resolve(response);
    		})
    	return deferred.promise;	
    }

    function detalle(id){
    	var deferred = $q.defer();

    	$http.get(Config.BASE + Config.DETALLE + id)
    		.then(function(response){
    			deferred.resolve(response);
    		})
    	return deferred.promise;	
    }

    function tipos(){
    	var deferred = $q.defer();

    	$http.get(Config.BASE + Config.TIPOS)
    		.then(function(response){
    			deferred.resolve(response);
    		})
    	return deferred.promise;	
    }

    function listadoportipo(id){
    	var deferred = $q.defer();
    	console.log('llega');

    	$http.get(Config.BASE + Config.TIPOS + id)
    		.then(function(response){
    			deferred.resolve(response);
    		})
    	return deferred.promise;	
    }


    return{
    	listado: listado,
    	detalle: detalle,
    	tipos: tipos,
    	listadoportipo : listadoportipo,
    }

  });
