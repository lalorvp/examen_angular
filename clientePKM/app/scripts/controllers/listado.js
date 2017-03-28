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

                  var listaPokemons = response.data.pokemon;

                  listaPokemons.forEach(function(pokemon){
                    $scope.pokemons.push({
                      url: pokemon.pokemon.url,
                      name: pokemon.pokemon.name
                    });

                  });

                  console.log('lista x tipo de pokemon: ',$scope.pokemons);
                  //console.log('lista de pokemon: ',listapokemon[0].pokemon.name);
                         
                }else{
                  console.log('Error pokemons por tipos');
                }

              });

    };

  });
