function ShipSeedCtrl($scope) {
	$scope.ports = [
		{
			name:"Shanghai, China"
		},
		{
			name:"Singapore, Singapore"
		},
		{
			name:"Hong Kong, China"
		},
		{
			name:"Shenzhen, China"
		},
		{
			name:"Busan, South Korea"
		},
		{
			name:"Ningbo-Zhoushan, China"
		},
		{
			name:"Guangzhou Harbor, China"
		},
		{
			name:"Qingdao, China"
		},
		{
			name:"Jebel Ali, Dubai"
		},
		{
			name:"Tianjin, China"
		},
		{
			name:"Rotterdam, Netherlands"
		},
		{
			name:"Port Kelang, Malaysia"
		},
		{
			name:"Kaohsiung, Taiwan"
		},
		{
			name:"Hamburg, Germany"
		},
		{
			name:"Antwerp, Belguim"
		},
		{
			name:"Los Angeles, US"
		},
		{
			name:"Dalian, China"
		},
		{
			name:"Keihin ports, Japan"
		},
		{
			name:"Tanjung Pelepas, Malaysia"
		},
		{
			name:"Xiamen, China"
		},
		{
			name:"Bremen, Germany"
		},
		{
			name:"Long Beach, US"
		},
		{
			name:"Laem Chabang, Thailand"
		},
		{
			name:"New York-New Jersey, US"
		},
		{
			name:"Ho Chi Minh, Vietnam"
		},
		{
			name:"Lianyungung, China"
		},
		{
			name:"Yingkou, China"
		},
		{
			name:"Valencia, Spain"
		},
		{
			name:"Columno, Sri Lanka"
		},
		{
			name:"Felixstowe, UK"
		},
		{
			name:"Port Said, Egypt"
		},
		{
			name:"Melbourne, Australia"
		},
		{
			name:"San Pedro, US"
		}
	];

	$scope.brokers = [
		{
			name:"Orange Birch",
			commodity:"food",
			price:1000,
			price40:1055,
			commentNum:"201",
			transitTime:"28"
		}

	];

	$scope.routes = [
		{
			origin:"Shanghai, China",
			destination:"San Pedro, US",
			name:"Orange Birch",
			commodity:"food",
			price:1000,
			commentNum:"201",
			transitTime:"28"
		},
		{
			origin:"Shanghai, China",
			destination:"Singapore, Singapore",
			name:"Blue Oak",
			commodity:"food",
			price:1000,
			commentNum:"198",
			transitTime:"29"
		},
		{
			origin:"Shanghai, China",
			destination:"Laem Chabang, Thailand",
			name:"Green Pine",
			commodity:"food",
			price:1012,
			commentNum:"190",
			transitTime:"27"
		},
		{
			origin:"Shanghai, China",
			destination:"Melbourne, Australia",
			name:"Purple Ficus",
			commodity:"machinery",
			price:1010,
			commentNum:"191",
			transitTime:"30"
		},
		{
			origin:"Laem Chabang, Thailand",
			destination:"Singapore, Singapore",
			name:"Yellow Maple",
			commodity:"cars",
			price:1010,
			commentNum:"191",
			transitTime:"28"
		},
		{
			origin:"Rotterdam, Netherlands",
			destination:"New York-New Jersey, US",
			name:"Indigo Poplar",
			commodity:"electronics",
			price:1010,
			commentNum:"191",
			transitTime:"28"
		},
		{
			origin:"Rotterdam, Netherlands",
			destination:"New York-New Jersey, US",
			name:"Olive Willow",
			commodity:"toys",
			price:1010,
			commentNum:"191",
			transitTime:"28"
		},
		{
			origin:"Singapore, Singapore",
			destination:"Long Beach, US",
			name:"Violet Rosewood",
			commodity:"electronics",
			price:1510,
			commentNum:"191",
			transitTime:"19"
		},
		{
			origin:"Shanghai, China",
			destination:"Long Beach, US",
			name:"White Willow",
			commodity:"machinery",
			price:1030,
			commentNum:"191",
			transitTime:"27"
		},
		{
			origin:"Laem Chabang, Thailand",
			destination:"Long Beach, US",
			name:"Gray Bonsai",
			commodity:"toys",
			price:1030,
			commentNum:"191",
			transitTime:"27"
		},
		{
			origin:"Shanghai, China",
			destination:"Long Beach, US",
			name:"Black Spruce",
			commodity:"animals",
			price:1030,
			commentNum:"191",
			transitTime:"27"
		}

	];

	$scope.myRoutes = [
		{
			name:"Laem Chabang - Los Angeles",
			commodity:"Food",
			price20:1000,
			price40:0,
			price40hc:0,
			price45:0,
			price45hc:0,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0,
			price40volume:0,
			price40hcWeight:0,
			price40hcVolume:0,
			price45weight:0,
			price45volume:0,
			price45hWeightc:0,
			price45hcVolume:0
		},
		{
			name:"Laem Chabang - San Diego",
			commodity:"Electronics",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.2,
			price20volume:1.76,
			price40weight:0,
			price40volume:0,
			price40hcWeight:2.9,
			price40hcVolume:3.1,
			price45weight:0,
			price45volume:0,
			price45hWeightc:0,
			price45hcVolume:0
		},
		{
			name:"Shanghai - San Pedro",
			commodity:"Machinery",
			price20:1000,
			price40:"",
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.15,
			price20volume:1.77,
			price40weight:0,
			price40volume:0,
			price40hcWeight:0,
			price40hcVolume:0,
			price45weight:0,
			price45volume:0,
			price45hWeightc:0,
			price45hcVolume:0
		},
		{
			name:"Shanghai - San Diego",
			commodity:"Toys",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0,
			price40volume:0,
			price40hcWeight:0,
			price40hcVolume:0,
			price45weight:0,
			price45volume:0,
			price45hWeightc:0,
			price45hcVolume:0
		},
		{
			name:"Shanghai - Long Beach",
			commodity:"Auto Parts",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0,
			price40volume:0,
			price40hcWeight:0,
			price40hcVolume:0,
			price45weight:0,
			price45volume:0,
			price45hWeightc:0,
			price45hcVolume:0
		},
		{
			name:"Xiamen - San Pedro",
			commodity:"Cars",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0,
			price40volume:0,
			price40hcWeight:0,
			price40hcVolume:0,
			price45weight:0,
			price45volume:0,
			price45hWeightc:0,
			price45hcVolume:0
		},
		{
			name:"Xiamen - San Diego",
			commodity:"Plastics",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0,
			price40volume:0,
			price40hcWeight:0,
			price40hcVolume:0,
			price45weight:0,
			price45volume:0,
			price45hWeightc:0,
			price45hcVolume:0
		},
		{
			name:"Xiamen - Long Beach",
			commodity:"Animals",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0,
			price40volume:0,
			price40hcWeight:0,
			price40hcVolume:0,
			price45weight:0,
			price45volume:0,
			price45hWeightc:0,
			price45hcVolume:0
		}
	];

	$scope.brokerRoutes = [
		{
			name:"Black Spruce",
			commodity:"Agriculture",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"White Oak",
			commodity:"Apparel & Accessories",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.95,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Blue Fern",
			commodity:"Cars & Motorcycles",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Yellow Evergreen",
			commodity:"Beauty & Personal Care",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Teal Beech",
			commodity:"Chemicals",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Orange Cedar",
			commodity:"Construction Material",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Purple Maple",
			commodity:"Consumer Electronics",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Green Dogwood",
			commodity:"Electronic Equipment",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.9,
			price40volume:0.8,
			price40hcWeight:0.87,
			price40hcVolume:0.99,
			price45weight:0.34,
			price45volume:0.56,
			price45hcWeight:0.78,
			price45hcVolume:0.98
		},
		{
			name:"Red Sequoia",
			commodity:"Electronic Components",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:1,
			price40volume:0.98,
			price40hcWeight:0.77,
			price40hcVolume:0.89,
			price45weight:0.65,
			price45volume:0.90,
			price45hcWeight:0.98,
			price45hcVolume:0.67
		},
		{
			name:"Green Dogwood",
			commodity:"Energy",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.9,
			price40volume:0.8,
			price40hcWeight:0.87,
			price40hcVolume:0.99,
			price45weight:0.34,
			price45volume:0.56,
			price45hcWeight:0.78,
			price45hcVolume:0.98
		},
		{
			name:"Red Sequoia",
			commodity:"Environment",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:1,
			price40volume:0.98,
			price40hcWeight:0.77,
			price40hcVolume:0.89,
			price45weight:0.65,
			price45volume:0.90,
			price45hcWeight:0.98,
			price45hcVolume:0.67
		},
		{
			name:"Green Dogwood",
			commodity:"Food & Beverage",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.9,
			price40volume:0.8,
			price40hcWeight:0.87,
			price40hcVolume:0.99,
			price45weight:0.34,
			price45volume:0.56,
			price45hcWeight:0.78,
			price45hcVolume:0.98
		},
		{
			name:"Red Sequoia",
			commodity:"Furniture",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:1,
			price40volume:0.98,
			price40hcWeight:0.77,
			price40hcVolume:0.89,
			price45weight:0.65,
			price45volume:0.90,
			price45hcWeight:0.98,
			price45hcVolume:0.67
		},
		{
			name:"Blue Fern",
			commodity:"Hardware",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Yellow Evergreen",
			commodity:"Health & Medical",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Teal Beech",
			commodity:"Home & Garden",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Orange Cedar",
			commodity:"Home Appliance",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Blue Fern",
			commodity:"Lighting",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Yellow Evergreen",
			commodity:"Luggage",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Teal Beech",
			commodity:"Machinery",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Orange Cedar",
			commodity:"Mechanical Parts",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Blue Fern",
			commodity:"Minerals & Metal",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Yellow Evergreen",
			commodity:"Office Supplies",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Teal Beech",
			commodity:"Packaging & Printing",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Orange Cedar",
			commodity:"Rubber & Plastic",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Blue Fern",
			commodity:"Sports Equipment",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Yellow Evergreen",
			commodity:"Telecommunication",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Teal Beech",
			commodity:"Textile & Leather",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Orange Cedar",
			commodity:"Tools",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Blue Fern",
			commodity:"Toys",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
		{
			name:"Yellow Evergreen",
			commodity:"Transportation",
			price20:1000,
			price40:1010,
			price40hc:1020,
			price45:1034,
			price45hc:1055,
			price20weight:2.3,
			price20volume:1.8,
			price40weight:0.99,
			price40volume:0.56,
			price40hcWeight:0.78,
			price40hcVolume:0.89,
			price45weight:0.77,
			price45volume:0.94,
			price45hcWeight:0.94,
			price45hcVolume:0.99
		},
	];

	$scope.searching = 'no';

	$scope.shipSpeed = 'normal';

	$scope.noContainer = 'open';

	$scope.containerLoad = 'none';

	$scope.orderStage = 'containerLoad';

	$scope.brokerStage = 'containerLoad';

	$scope.showBroker = true;

	$scope.system = 'us-standard';

	$scope.commodities = [
		{
			name:"Food"
		}
	];

	$scope.FCLtype = "port";

	$scope.loads = [
		{
			name:"Full Container Load"
		},
		{
			name:"Less than Container Load"
		}
	];

	$scope.containerLoadNewRoute = $scope.loads[0];

	$scope.commoditiyModifiers = [];

	$scope.containerAmountModifier = [];

	$scope.containerTypeModifier = [];

	$scope.hazardousMaterialModifiers = [];

	$scope.radiusModifiers = [];

	$scope.newRoutes = [];

	$scope.allCommodities = true;

	$scope.status = "New";

	$scope.showContainerLoadType = "FCL";

	$scope.fastPrice = function(broker) {
		return broker.price + 65.50;
	}

	$scope.originSelected = function(port) {
		$scope.originText = port.name;
		$scope.hasOrigin = true;
	}

	$scope.destinationSelected = function(port) {
		$scope.destinationText = port.name;
		$scope.hasDestination = true;
	}

	$scope.statusSaved = function() {
		$scope.updateStatus = 'statusSaved';
		
	}

	$scope.saveModifiers20 = function(myRoutes){
		$scope.viewModifiers20 = false;
		$scope.modifier20Saved = true;
	}
	
}