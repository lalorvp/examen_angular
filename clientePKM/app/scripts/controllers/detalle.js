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

  		var idPokemon = $routeParams.id;
  		console.log("idPokemon: " + idPokemon);

  		PokemonService.detalle(idPokemon)
	  		.then(function(response){
	    		console.log(response);
	    		if (response.status == 200){
	    			$scope.pokemon = response.data;

	    			//obtenemos el id de especie
	    			console.log("llamando a especies");
	    			PokemonService.especies(idPokemon)
				  		.then(function(response){
				    		console.log(response);
				    		if (response.status == 200){
				    			$scope.especie = response.data;
				    			var idEvolucion = $scope.especie.evolution_chain.url.split('/')[6];
				    			console.log("idEvolución: "+idEvolucion);

				    			//obtenemos las evoluciones
				    			console.log("llamando a las evoluciones");
				    			PokemonService.evoluciones(idEvolucion)
							  		.then(function(response){
							    		console.log(response);
							    		if (response.status == 200){
							    			$scope.evoluciones = [];
							    			var arregloEvo = response.data.chain.evolves_to;
							    			
							    			function iterar(arregloEvo){
									            angular.forEach(arregloEvo, function(nodo){
									                $scope.evoluciones.push({
									                    'id': nodo.species.url.split('/')[6],
									                    'name': nodo.species.name
									                });
									                if (angular.isArray(nodo.evolves_to) && nodo.evolves_to.length > 0){
									                    iterar(nodo.evolves_to);
									                }
									            });
									        };
							    			
							    			iterar(arregloEvo);
									        console.log($scope.evoluciones);

							    		}else{
							    			console.log('Error al obtener las evoluciones');
							    		}
							    	});

				    		}else{
				    			console.log('Error al obtener especies');
				    		}
				    	});	

	    		}else{
	    			console.log('Error detalle pokemon');
	    		}
	    	});


	  
  });