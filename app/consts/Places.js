const PLACES = [
  {
    societe: "Ouest-France",
    adresse: "31 rue Larcher",
    codepostal: "14400",
    ville: "Bayeux",
    coordonnees: [-0.701957,49.2757],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BALLARD",
    dirigeantPrenom: "Guillaume",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "14 place Pierre Bouchard",
    codepostal: "14000",
    ville: "Caen",
    coordonnees: [-0.36422, 49.1835],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BALLARD",
    dirigeantPrenom: "Guillaume",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "3, rue de la Trinité",
    codepostal: "14700",
    ville: "Falaise",
    coordonnees: [-0.2119, 48.9182],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BALLARD",
    dirigeantPrenom: "Guillaume",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "27 rue Pont Mortain",
    codepostal: "14100",
    ville: "Lisieux",
    coordonnees: [0.2266404, 49.1439556],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BALLARD",
    dirigeantPrenom: "Guillaume",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "16 Bd Fernand Moureaux",
    codepostal: "14360",
    ville: "Trouville",
    coordonnees: [0.0831731, 49.3640512],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BALLARD",
    dirigeantPrenom: "Guillaume",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "24 rue Chaussée",
    codepostal: "14500",
    ville: "Vire",
    coordonnees: [-0.8903022, 48.8377716],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BALLARD",
    dirigeantPrenom: "Guillaume",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "9, place Duclos",
    codepostal: "22100",
    ville: "Dinan",
    coordonnees: [-2.047911, 48.453731],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BIGORGNE",
    dirigeantPrenom: "Joël",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "4 rue de la Pompe",
    codepostal: "22200",
    ville: "Guingamp",
    coordonnees: [-3.1518538, 48.5634349],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BIGORGNE",
    dirigeantPrenom: "Joël",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "19 rue du Val",
    codepostal: "22400",
    ville: "Lamballe",
    coordonnees: [-2.5139728, 48.4693025],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BIGORGNE",
    dirigeantPrenom: "Joël",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "1 rue de Viarmes",
    codepostal: "22300",
    ville: "Lannion",
    coordonnees: [-3.463987, 48.734702],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BIGORGNE",
    dirigeantPrenom: "Joël",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "6 rue Saint-Joseph",
    codepostal: "22600",
    ville: "Loudéac",
    coordonnees: [-2.754989, 48.177916],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BIGORGNE",
    dirigeantPrenom: "Joël",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "1 rue de l'Yser",
    codepostal: "22500",
    ville: "Paimpol",
    coordonnees: [-3.042711, 48.779867],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BIGORGNE",
    dirigeantPrenom: "Joël",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "23 rue Jouallan",
    codepostal: "22000",
    ville: "Saint Brieuc",
    coordonnees: [-2.760881, 48.513268],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BIGORGNE",
    dirigeantPrenom: "Joël",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "24 rue Algésiras",
    codepostal: "29275",
    ville: "Brest",
    coordonnees: [-4.489603, 48.390146],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "GOUÉROU",
    dirigeantPrenom: "Christian",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "11 place de la Mairie",
    codepostal: "29270",
    ville: "Carhaix",
    coordonnees: [-3.573684, 48.276000],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "GOUÉROU",
    dirigeantPrenom: "Christian",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "10 av. du Dr Nicolas",
    codepostal: "29900",
    ville: "Concarneau",
    coordonnees: [-3.917293, 47.870129],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "GOUÉROU",
    dirigeantPrenom: "Christian",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "45 rue Camille Réaud",
    codepostal: "29100",
    ville: "Douarnenez",
    coordonnees: [-4.334907, 48.095167],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "GOUÉROU",
    dirigeantPrenom: "Christian",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "26 rue d'Aiguillon",
    codepostal: "29600",
    ville: "Morlaix",
    coordonnees: [-3.825213, 48.576557],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "GOUÉROU",
    dirigeantPrenom: "Christian",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "24 Bd Dupleix",
    codepostal: "29101",
    ville: "Quimper",
    coordonnees: [-4.100569, 47.994757],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "GOUÉROU",
    dirigeantPrenom: "Christian",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "12 rue Génot",
    codepostal: "29300",
    ville: "Quimperlé",
    coordonnees: [-3.548521, 47.872129],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "GOUÉROU",
    dirigeantPrenom: "Christian",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "10 rue du Breil",
    codepostal: "35051",
    ville: "Rennes",
    coordonnees: [-1.6293, 48.0951],
    type: "Siège social - Rédaction -Imprimerie",    
    groupe: "Ouest-France",
    dirigeant: "ECHELARD",
    dirigeantPrenom: "Louis",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "16 rue de la Forêt",
    codepostal: "35305",
    ville: "Fougères",
    coordonnees: [-1.200501, 48.355636],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "JARNIGON",
    dirigeantPrenom: "Vincent",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "14 C rue de la Gare",
    codepostal: "35600",
    ville: "Redon",
    coordonnees: [-2.086772, 47.652244],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "JARNIGON",
    dirigeantPrenom: "Vincent",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "38 rue du Pré-Botté",
    codepostal: "35051",
    ville: "Rennes",
    coordonnees: [-1.677048, 48.109316],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "JARNIGON",
    dirigeantPrenom: "Vincent",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "15 rue Jean Jaurès",
    codepostal: "35409",
    ville: "Saint Malo",
    coordonnees: [-2.007195, 48.648545],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "JARNIGON",
    dirigeantPrenom: "Vincent",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "36 Bd de Châteaubriant",
    codepostal: "35500",
    ville: "Vitré",
    coordonnees: [-1.210328, 48.118539],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "JARNIGON",
    dirigeantPrenom: "Vincent",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "66 place Foch",
    codepostal: "44151",
    ville: "Ancenis",
    coordonnees: [-1.176898, 47.365768],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "WAJDZIK",
    dirigeantPrenom: "Arnaud",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "9 rue Michel Grimaud",
    codepostal: "44110",
    ville: "Chateaubriant",
    coordonnees: [-1.376247, 47.717335],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "WAJDZIK",
    dirigeantPrenom: "Arnaud",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "4 Bd Hennecart",
    codepostal: "44500",
    ville: "La Baule",
    coordonnees: [-2.393672, 47.281968],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "WAJDZIK",
    dirigeantPrenom: "Arnaud",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "2 quai François Mitterand",
    codepostal: "44203",
    ville: "Nantes",
    coordonnees: [-1.555592, 47.207107],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "WAJDZIK",
    dirigeantPrenom: "Arnaud",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "2 place Pierre Semard",
    codepostal: "44600",
    ville: "St Nazaire",
    coordonnees: [-2.210790, 47.285402],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "WAJDZIK",
    dirigeantPrenom: "Arnaud",    
    description: ""
  },
  {
    societe: "SIGL",
    adresse: "38  rue de la Guillauderie",
    codepostal: "44118",
    ville: "La Chevrolière",
    coordonnees: [-1.557485, 47.088760],
    type: "Imprimerie",    
    groupe: "Ouest-France",
    dirigeant: "MARTINAT",
    dirigeantPrenom: "Renaud",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "5 bis, rue Thiers",
    codepostal: "49051",
    ville: "Angers",
    coordonnees: [-0.551948, 47.476179],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "GUERIN",
    dirigeantPrenom: "Benoit",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "15 rue du Bourg Baudry",
    codepostal: "49300",
    ville: "Cholet",
    coordonnees: [-0.879535, 47.060960],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "GUERIN",
    dirigeantPrenom: "Benoit",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "32 rue de la Constitution",
    codepostal: "50305",
    ville: "Avranches",
    coordonnees: [-1.360118, 48.684835],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "DENOYELLE",
    dirigeantPrenom: "Nicolas",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "8 rue de l'ancien quai",
    codepostal: "50100",
    ville: "Cherbourg",
    coordonnees: [-1.624267, 49.637738],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "DENOYELLE",
    dirigeantPrenom: "Nicolas",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "17 rue du Lycée",
    codepostal: "50206",
    ville: "Coutances",
    coordonnees: [-1.444208, 49.046299],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "DENOYELLE",
    dirigeantPrenom: "Nicolas",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "92 rue Couraye",
    codepostal: "50400",
    ville: "Granville",
    coordonnees: [-1.592572, 48.837320],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "DENOYELLE",
    dirigeantPrenom: "Nicolas",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "10 rue de la barque",
    codepostal: "50003",
    ville: "Saint-Lô",
    coordonnees: [-1.087461, 49.115246],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "DENOYELLE",
    dirigeantPrenom: "Nicolas",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "42 Bis av Carnot",
    codepostal: "53210",
    ville: "Château-Gontier",
    coordonnees: [-0.708249, 47.827558],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "LE BLOA",
    dirigeantPrenom: "Alan",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "92 av. Robert Buron",
    codepostal: "53000",
    ville: "Laval",
    coordonnees: [-0.761500, 48.075117],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "LE BLOA",
    dirigeantPrenom: "Alan",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "Parvis Notre Dame",
    codepostal: "53100",
    ville: "Mayenne",
    coordonnees: [-0.618105, 48.304459],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "LE BLOA",
    dirigeantPrenom: "Alan",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "20 rue des Quatre Vents",
    codepostal: "56400",
    ville: "Auray",
    coordonnees: [-2.985318, 47.666473],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "MARTEEL",
    dirigeantPrenom: "Christel",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "55 rue du Port",
    codepostal: "56100",
    ville: "Lorient",
    coordonnees: [-3.360025, 47.747036],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "MARTEEL",
    dirigeantPrenom: "Christel",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "1 Bis Bd des Carmes",
    codepostal: "56800",
    ville: "Ploërmel",
    coordonnees: [-2.401206, 47.932761],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "MARTEEL",
    dirigeantPrenom: "Christel",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "21 rue Nationale",
    codepostal: "56300",
    ville: "Pontivy",
    coordonnees: [-2.965240, 48.067094],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "MARTEEL",
    dirigeantPrenom: "Christel",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "15 rue de Closmadeuc",
    codepostal: "56000",
    ville: "Vannes",
    coordonnees: [-2.759666, 47.657554],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "MARTEEL",
    dirigeantPrenom: "Christel",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "11, rue Saint Blaise",
    codepostal: "61000",
    ville: "Alençon",
    coordonnees: [0.089942, 48.431447],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BRIONNE",
    dirigeantPrenom: "Patrick",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "13, place Henri IV",
    codepostal: "61200",
    ville: "Argentan",
    coordonnees: [-0.020972, 48.744359],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BRIONNE",
    dirigeantPrenom: "Patrick",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "2 Rue Des rivières",
    codepostal: "61100",
    ville: "Flers",
    coordonnees: [-0.567517, 48.750170],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BRIONNE",
    dirigeantPrenom: "Patrick",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "13, rue du Marché au Blé",
    codepostal: "72200",
    ville: "La Flèche",
    coordonnees: [-0.073425, 47.700019],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "ROBIN",
    dirigeantPrenom: "Claire",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "35, rue Gambetta",
    codepostal: "72000",
    ville: "Le Mans",
    coordonnees: [0.192975, 48.005298],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "ROBIN",
    dirigeantPrenom: "Claire",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "11, rue Carnot",
    codepostal: "72300",
    ville: "Sablé sur Sarthe",
    coordonnees: [-0.334134, 47.841029],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "ROBIN",
    dirigeantPrenom: "Claire",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "91, rue du Faubourg St Honoré",
    codepostal: "75008",
    ville: "Paris",
    coordonnees: [2.313111, 48.871875],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "VERNAY",
    dirigeantPrenom: "Stéphane",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "26 place Kastler",
    codepostal: "85300",
    ville: "Challans",
    coordonnees: [-1.882886, 46.835170],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BARDY",
    dirigeantPrenom: "Céline",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "21 bis rue de la République",
    codepostal: "85200",
    ville: "Fontenay-Le-Comte",
    coordonnees: [-0.804319, 46.465678],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BARDY",
    dirigeantPrenom: "Céline",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "4 rue Raymond Poincaré",
    codepostal: "85000",
    ville: "La Roche-sur-Yon",
    coordonnees: [-1.433112, 46.669245],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BARDY",
    dirigeantPrenom: "Céline",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "7 place du Poilu de France",
    codepostal: "85100",
    ville: "Les Sables d'Olonne",
    coordonnees: [-1.783481, 46.496523],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BARDY",
    dirigeantPrenom: "Céline",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "17 Grande rue",
    codepostal: "85500",
    ville: "Les Herbiers",
    coordonnees: [-1.015613, 46.871553],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BARDY",
    dirigeantPrenom: "Céline",    
    description: ""
  },
  {
    societe: "Ouest-France",
    adresse: "8, avenue Jean Cristau",
    codepostal: "85800",
    ville: "St Gilles Croix-de-vie",
    coordonnees: [-1.948253, 46.697946],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "BARDY",
    dirigeantPrenom: "Céline",    
    description: ""
  },
  {
    societe: "Precom",
    adresse: "10, rue du Breil zone industrielle de Chantepie",
    codepostal: "35200",
    ville: "RENNES",
    coordonnees: [-1.6293, 48.0951],
    type: "Siège",    
    groupe: "Additi",
    dirigeant: "Lelièvre/Phillibert",
    dirigeantPrenom: "Patrick/Christian",    
    description: ""
  },
  {
    societe: "Régie Radio Régions",
    adresse: "10, rue du Breil zone industrielle de Chantepie",
    codepostal: "35200",
    ville: "RENNES",
    coordonnees: [-1.6293, 48.0951],
    type: "Siège",    
    groupe: "Additi",
    dirigeant: "Porcher",
    dirigeantPrenom: "Laurent",    
    description: ""
  },
  {
    societe: "Medialex",
    adresse: "10, rue du Breil zone industrielle de Chantepie",
    codepostal: "35200",
    ville: "RENNES",
    coordonnees: [-1.6293, 48.0951],
    type: "Siège",    
    groupe: "Additi",
    dirigeant: "Colin",
    dirigeantPrenom: "Olivier",    
    description: ""
  },
  {
    societe: "Happy Prod",
    adresse: "10, rue du Breil zone industrielle de Chantepie",
    codepostal: "35200",
    ville: "RENNES",
    coordonnees: [-1.6293, 48.0951],
    type: "Siège",    
    groupe: "Additi",
    dirigeant: "Connehaye",
    dirigeantPrenom: "Romain",    
    description: ""
  },
  {
    societe: "Affiouest",
    adresse: "10, rue du Breil zone industrielle de Chantepie",
    codepostal: "35200",
    ville: "RENNES",
    coordonnees: [-1.6293, 48.0951],
    type: "Siège",    
    groupe: "Additi",
    dirigeant: "Le Bail",
    dirigeantPrenom: "Remy",    
    description: ""
  },
  {
    societe: "Precontact",
    adresse: "10, rue du Breil zone industrielle de Chantepie",
    codepostal: "35200",
    ville: "RENNES",
    coordonnees: [-1.6293, 48.0951],
    type: "Siège",    
    groupe: "Additi",
    dirigeant: "Duru",
    dirigeantPrenom: "Joël",    
    description: ""
  },
  {
    societe: "Ouest-FranceM",
    adresse: "10, rue du Breil zone industrielle de Chantepie",
    codepostal: "35200",
    ville: "RENNES",
    coordonnees: [-1.6293, 48.0951],
    type: "Siège",    
    groupe: "Additi",
    dirigeant: "Philibert",
    dirigeantPrenom: "Christian",    
    description: ""
  },
  {
    societe: "Nantes Media",
    adresse: "10, rue du Breil zone industrielle de Chantepie",
    codepostal: "35200",
    ville: "RENNES",
    coordonnees: [-1.6293, 48.0951],
    type: "Siège",    
    groupe: "Additi",
    dirigeant: "Oger",
    dirigeantPrenom: "Yann",    
    description: ""
  },
  {
    societe: "Dans nos coeurs",
    adresse: "10, rue du Breil zone industrielle de Chantepie",
    codepostal: "35200",
    ville: "RENNES",
    coordonnees: [-1.6293, 48.0951],
    type: "Siège",    
    groupe: "Additi",
    dirigeant: "Tricart",
    dirigeantPrenom: "Anne-Sophie",    
    description: ""
  },
  {
    societe: "Infomer",
    adresse: "13, rue du Breil",
    codepostal: "35063",
    ville: "Rennes",
    coordonnees: [-1.6269600000000537, 48.0956],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "Boucher",
    dirigeantPrenom: "Jean-Paul",    
    description: "Infomer est une filiale du groupe SIPA - Ouest-France, créée le 1er janvier 1990, spécialisée dans la presse maritime en France."
  },
  {
    societe: "Le Marin",
    adresse: "13, rue du Breil",
    codepostal: "35063",
    ville: "Rennes",
    coordonnees: [-1.6269600000000537, 48.0956],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "Boucher",
    dirigeantPrenom: "Jean-Paul",    
    description: "Le Marin est un journal hebdomadaire, spécialisé dans les informations maritimes, dont le siège est à Rennes. Il appartient au Groupe Ouest-France."
  },
  {
    societe: "Produits de la Mer",
    adresse: "13, rue du Breil",
    codepostal: "35063",
    ville: "Rennes",
    coordonnees: [-1.6269600000000537, 48.0956],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "Boucher",
    dirigeantPrenom: "Jean-Paul",    
    description: "Les produits de la mer désignent les animaux ou plantes qui sont consommés par les êtres humains. Ils comprennent les animaux marins, comme les poissons, mammifères, fruits de mer, ainsi que les algues et plantes marines."
  },
  {
    societe: "Chasse Marée",
    adresse: "45 Boulevard Camille Reaud",
    codepostal: "29100",
    ville: "Douarnenez",
    coordonnees: [-4.334730000000036, 48.0948],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "Boucher",
    dirigeantPrenom: "Jean-Paul",    
    description: "Chasse-Marée est un magazine français qui paraît neuf fois par an, et une maison d'édition, cré en 1981 par la société coopérative ouvrière de production Le Chasse-Marée à Douarnenez."
  },
  {
    societe: "Voiles et Voiliers",
    adresse: "13, rue du Breil",
    codepostal: "35063",
    ville: "Rennes",
    coordonnees: [-1.6269600000000537, 48.0956],
    type: "Rédaction",    
    groupe: "Ouest-France",
    dirigeant: "Boucher",
    dirigeantPrenom: "Jean-Paul",    
    description: "Créé en 1971, Voiles et Voiliers est un magazine mensuel français consacré à la voile sportive et de plaisance. Le magazine édite également des numéros hors-série et une collection d'ouvrages consacrés à la voile."
  },
  {
    societe: "Edilarge",
    adresse: "13, rue du Breil",
    codepostal: "35063",
    ville: "Rennes",
    coordonnees: [-1.6269600000000537, 48.0956],
    type: "Edition de livres",    
    groupe: "Ouest-France",
    dirigeant: "Boucher",
    dirigeantPrenom: "Jean-Paul",    
    description: "Edition de livres. Depuis plus de quarante ans, les éditions Ouest-France s’imposent comme l’éditeur des régions. Loin de se limiter au grand ouest, elles participent activement à la mise en valeur du patrimoine culturel, local, régional et national. Du tourisme à l’histoire en passant par les arts, la peinture mais aussi les thématiques pratiques, 150 nouveautés sont publiées par an. Presque une trentaine de beaux-livres viennent enrichir chaque année un catalogue de 1800 titres et de 2000 auteurs tous spécialistes dans leurs domaines .Rigueur de l’information et qualité de l’iconographie."
  }
]

export default PLACES;