import Gifs from '../values/Gifs';
import Icons from '../values/Icons';
import Images from '../values/Images';

class ProjectData {
  static DATA = [
    {
      id: 'pokedex',
      title: 'Pokedex',
      snippet: 'A simple pokedex to look up pokemon data',
      description:
        "This personal project gives me enjoyable time to play with something I love since my childhood. The website was constructed using React and PokeAPI, while the design is inspired by Saepul Nahwan's work on dribbble [dribbble.com/shots/6540871-Pokedex-App].",
      demo: [
        Images.pokedexGeneration,
        Images.pokedexGrid,
        Images.pokedexDetail,
        Images.pokedexDetailEvolution,
        Images.pokedexDetailList,
        Images.pokedexSearch,
        Images.pokedexMbGeneration,
        Images.pokedexMbGrid,
        Images.pokedexMbDetail,
        Images.pokedexMbDetail2,
      ],
      techStack: [Icons.javascript, Icons.reactJS, Icons.sass, Icons.pokeapi],
      source: 'https://github.com/nickon437/pokedex',
      site: 'https://nickon437.github.io/pokedex/',
    },
    { 
      id: 'shopee',
      title: 'Shopee',
      snippet: 'An eCommerce Platform',
      description: "This project is based on Brad's MERN eCommerce course.",
      keyFeatures: [
        'Full featured shopping cart',
        'Product reviews and ratings',
        'Product search feature',
        'User profile with orders',
        'Admin product management',
        'Admin user management',
        'Admin order details page',
        'Mark orders as delivered option',
        'Checkout process (shipping, payment method, etc)',
        'PayPal / credit card integration',
        'Database seeder (products & users)',
      ],
      demo: [
        Images.shopee1,
        Images.shopee2,
        Images.shopee3,
        Images.shopee4,
        Images.shopee5,
        Images.shopee6,
        Images.shopee7,
        Images.shopee8,
      ],
      techStack: [Icons.javascript, Icons.reactJS, Icons.express, Icons.mongodb, Icons.nodeJS, Icons.reactBootstrap, Icons.jwt, Icons.paypal],
      source: 'https://github.com/nickon437/shopee',
      site: 'https://proshopapp.herokuapp.com/',
    },
    {
      id: 'pathalgo',
      title: 'Pathalgo',
      snippet: 'A path-finding visualizer',
      keyFeatures: [
        'Finding shortest path from starting point to target',
        'Building/removing wall as obstacle',
        'Creating maze',
        'Moving starting point and target',
        'Re-calculating shortest path as board changes',
        'Using arrow keys to manually navigate through the board',
        "Creating board based on initial window's size",
      ],
      demo: [
        Images.pathalgo1,
        Images.pathalgo2,
        Images.pathalgo3,
        Images.pathalgo4,
      ],
      techStack: [Icons.javascript, Icons.jQuery],
      source: 'https://github.com/nickon437/pathalgo/',
      site: 'https://nickon437.github.io/pathalgo/',
    },
    {
      id: 'rome',
      title: 'Rome',
      snippet:
        'A simple and realistic IDE platform that teaches young children the fundamentals of computer science',
      description:
        "This is a collaborative capstone project between RMIT University, L'Enfant Corporation and Montessori Education that our team worked on in our final year of Master Degree." +
        'The aim of project is creating a simple yet realistic IDE platform to provide children from 6 to 9 years old a basic understanding of computer science.',
      keyFeatures: [
        'executable programming logic',
        'command line interface',
        'memory section illustrating how data is distributed',
        'debug mode',
      ],
      demo: [Gifs.datatypes, Gifs.debug, Gifs.importIO, Gifs.sidebar],
      techStack: [
        Icons.javascript,
        Icons.reactJS,
        Icons.antlr,
        Icons.nodeJS,
        Icons.seleniumWebDriver,
        Icons.jest,
        Icons.appEngine,
      ],
      site: 'https://rome.juliabrownschools.com/',
    },
    {
      id: 'skyvssea',
      title: 'Sky Vs. Sea',
      snippet:
        'A board game in which two teams with multiple sets of different skills fight against each other to protect their offspring',
      description:
        'This project is for Object-oriented softare design. In Sky vs. Sea, 2 players will play against each other taking the role of Eagle or Shark. ' +
        'The goal of this game is to terminate the offspring (Baby piece) of the enemy’s team and whoever can achieve it first will be the winner of the game. ' +
        'The objective a project is creating an application with a large emphasis on design patterns. A number of patterns that we use in this project includes ' +
        'Abstract Factory Pattern, Prototype Pattern, Command Pattern, Observer Pattern, Proxy Pattern.',
      demo: [
        Images.skyvsseaLandingPage,
        Images.skyvsseaCustomizationPage,
        Gifs.skyvsseaOverview,
        Gifs.skyvsseaUndo,
      ],
      techStack: [Icons.java],
      source: 'https://github.com/nickon437/SkyvsSea/',
    },
    {
      id: 'beesvswasps',
      title: 'Bees Vs. Wasps',
      snippet:
        'A game in which player will take the role of a swarm of defender bee to protect the hive and the worker bees from the enemies , and to collect the nectar for the survival of the hive',
      description:
        'This is a project for Games and Artificial Intelligent. ' +
        'In this game, player will take the role of a swarm of defender bees to protect the nest and other workers from the wasps. ' +
        'Our team also implement AI with reinforcement learning to the workers so that it can navigate its ways to the flowers while avoiding the enemies at the same time.',
      demo: [Gifs.wasp, Gifs.flocking],
      techStack: [Icons.unity, Icons.csharp, Icons.anaconda],
    },
  ];
}

export default ProjectData;
