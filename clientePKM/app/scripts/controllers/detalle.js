'use strict';

/**
 * @ngdoc function
 * @name pokemonApp.controller:DetalleCtrl
 * @description
 * # DetalleCtrl
 * Controller of the pokemonApp
 */
angular.module('pokemonApp')
  .controller('DetalleCtrl', 
  	function ($scope, PokemonService, $routeParams) {

  		var idpokemon = $routeParams.id;
  		console.log('id',idpokemon);

  		PokemonService.detalle(idpokemon)
	  		.then(function(response){
	    		console.log(response);
	    		if (response.status == 200){
	    			$scope.pokemon = response.data;
	    		}else{
	    			console.log('Error');
	    		}
	    	})
  });
