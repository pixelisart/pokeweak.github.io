var pkw=angular.module("Pokeweak",[]);pkw.filter("zpad",function(){return function(e,s){if(void 0===e&&(e=""),e.length>=s)return e;var o="0".repeat(s);return(o+e).slice(-1*s)}}),pkw.controller("pkCardName",["$scope","$http",function(e,s){function o(){s.get("pokemon.json").success(function(s){e.pkData=s})}function n(s){e.selectedPokemon=s,setTimeout(function(){$(".wrapper-fixed").addClass("display"),$(".content-side").addClass("slideIn"),$(".overlay").addClass("fadeIn")},200),setTimeout(function(){$(".back").addClass("scaleIn")},1e3)}function a(){$(".content-side").addClass("slideOut"),$(".overlay").addClass("fadeOut"),setTimeout(function(){$(".wrapper-fixed").removeClass("display"),$(".content-side").removeClass("slideOut"),$(".content-side").removeClass("slideIn"),$(".overlay").removeClass("fadeOut"),$(".overlay").removeClass("fadeIn"),$(".back").removeClass("scaleIn"),e.selectedPokemon=!1},400)}e.selectedPokemon=!1,e.showPokemon=n,e.closePokemon=a,o()}]);