# Lancer le projet
- Dans un terminal tapez : npm start
# Le projet
Réalisation d'un site web avec React et Redux sur le thème des pokemons avec l'utilisation de la PokéApi (https://pokeapi.co/) 
- Page d'acceuil : A chaque rechargement de la page, propose le détail d'un pokemon choisi aléatoirement
- Page Pokédex : affiche une liste paginée de tout les pokemons avec possibilité de les rechercher par types. Quand on clique sur un pokemon, son détail s'affiche sur l'autre moitié de l'écran. Possibilité d'ajouter un pokemon aux favoris
- page Favoris : affiche une liste paginée des pokemons favoris. Quand on clique sur un pokemon, son détail s'affiche sur l'autre moitié de l'écran.
# Logique d'organisation des composants : 
- Dans le dossier document se trouvent les composants parents de l'arborescence, ce sont eux qui font les appels à l'api ou à redux pour ensuite passer les informations dans les composants enfants qui eux sont réutilisables.
  -  DocumentHome : c'est la page d'affichage du pokemon random, y est fait l'appel à un extra reducer redux pour récupérer un pokemon de l'api avec un nombre aléatoire passé.
  -  DocumentPokedex : composant d'affichage, il affiche d'un coté DocumentListPokemon et DocumentDetail pour avoir d'un côté de la page la liste de pokemon et de l'autre le détail d'un pokemon choisi
  -  DocumentListPokemon : ce composant va à la fois gérer l'affichage de la liste des pokemons et la recherche par type. Tout d'abord la liste des pokemons est chargé depuis l'api et passer dans le composant PokemonList. Si l'on choisi un type, la liste des pokemons par type va être passer dans un autre tableau et afficher toujours grâce au composant PokemonList en passant des valeurs différents dans ses props. Pour revenir à la liste des pokemons, cliquer sur le flèche de retour. Les deux liste sont accompagnées de leurs composants de paginations : PaginationPreviousNext pour la liste normal et PaginationNumber pour la liste des types.Ce composant permet aussi de visualiser la l'historique des recherchers par types.
  -  DocumentDetail : affiche le détail d'un pokemon, récupère l'url du pokemon dans redux et fait l'appel à l'api grâce à celle-ci, affiche ensuite les informations grâce au composant        DetailCard
  -  DocumentFavoris : composant d'affichage, il affiche d'un coté DocumentListFavoris et DocumentFavoriteDetail pour avoir d'un côté la liste des pokemons favoris et de l'autre le détail d'un pokemon choisi
  -  DocumentListFavoris : récupère la liste des pokemons favoris dans redux puis la passe dans le composant PokemonList pour l'afficher à l'écran. Ici le composant PaginationNumber est réutiliser pour faire la pagination de cette liste.
  -  DocumentFavoriteDetail : récupération de l'url du pokemon a affiché dans redux puis appel à l'api, réutilisation du composant DetailCard pour afficher le détail.

- Dans le dossier component se trouvent tous les composants réutilisables grâce au différents valeurs que l'on peut passer dans les props. Le but premier des composants est de ne pas avoir de code dupliquer, dès que le code se repette alors il faut faire un composant.
  - DetailCard : ce composant permet d'afficher le detail d'un pokemon, il possède deux props : pokemon et pokemonSpecies qui correspondent aux infos d'un pokemon. Grâce à ces props, n'importe où dans le code tant que je lui passe un pokemon et un pokemonSpecies, il va affichera les informations comme définis dans le composant. 
  - PokemonList : 
    - PokemonList va être utiliser dans les composants parents en passant les liste de pokemons récupérés de l'api et de redux dans la props pokemonList. 
    - On va aussi indiquer de quel type de liste il s'agit : 
      - "type" si c'est la liste des types
      - "all" si c'est la liste des pokemons 
      - "favorite" si c'est la liste des pokemons favoris 
     - cela va servir à savoir quel composant appelés entre ListCard et FavoriteCard. 
     - Mais pourquoi avoir besoin d'un type : le json que renvoie l'api pour la liste des pokemons et celle des types n'ont pas les même clés pour récupérer les valeurs ainsi à l'aide d'une condition if, je vais passer les bonnes clés dans la props pokemon de ListCard en fonction du type reconnu. 
     - Le type "favorite" va servir pour afficher la FavoriteCard car si c'est la liste des favoris il faut rajouter un bouton et le composant ListCard n'est donc pas adapté.
  - ListCard et FavoriteCard : ces composants gèrent l'affichage d'un pokemon pour la liste. ListCard est utilisé dans un map pour affiché chaque éléments du tableau grâce à sa props pokemon qui correspond à chaque pokemon de la liste. ListCard est utilisé pour la liste de pokemons et la liste des pokemons par type, FavoriteCard sert pour la card des pokemons favoris car il y a un bouton en plus pour le retirer des favoris.
  - Les deux composants de pagination : PaginationPreviousNext et PaginationNumber qui créent des paginations différents en fonction des besoins.
  - HistoricDialog : le dialog qui affiche l'historique de la recherche par type et qui a deux props : open -> si open true le dialog s'ouvre et si false il se ferme; onClose -> une fonction qui permet de faire passer open à false et fermet le dialog.
  - Les autres composants servent juste à séparer encore plus le code pour qu'il soit un maximum réutilisable dans le cas d'une extenssion du projet.
