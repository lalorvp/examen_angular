'use strict';

/**
 * @ngdoc function
 * @name pokemonApp.controller:ListadoCtrl
 * @description
 * # ListadoCtrl
 * Controller of the pokemonApp
 */
angular.module('pokemonApp')
  .controller('ListadoCtrl', 
  	function ($scope, PokemonService) {

    PokemonService.listado()
    	.then(function(response){
    		console.log(response);
    		if (response.status == 200){
    			$scope.pokemons = response.data.results;
    		}else{
    			console.log('Error listado');
    		}
    	});

    PokemonService.tipos()  
      .then(function(response){
        console.log(response);
        if (response.status == 200){
          $scope.tipos = response.data.results;          
        }else{
          console.log('Error tipos');
        }
      });

    $scope.listadoportipo = function(id){

        PokemonService.listadoportipo(id)  
              .then(function(response){
                console.log(response);
                if (response.status == 200){
                  $scope.pokemons = [];  

                  var listapokemon = response.data.pokemon;

                  listapokemon.foreach(function(pokemon)){
                    $scope.pokemons.push({
                      url: pokemon.pokemon.url,
                      name: pokemon.pokemon.name
                    });

                  };

                  console.log('lista de pokemon: ',listapokemon);
                  //console.log('lista de pokemon: ',listapokemon[0].pokemon.name);
                          
                }else{
                  console.log('Error pokemos por tipos');
                }
              });

    };

  });
