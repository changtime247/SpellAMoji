const allEmojis = [
  { unicode: 'U+1F921', name: 'clown' },
  { unicode: 'U+1F479', name: 'ogre' },
  { unicode: 'U+1F47A', name: 'goblin' },
  { unicode: 'U+1F47B', name: 'ghost' },
  { unicode: 'U+1F47D', name: 'alien' },
  { unicode: 'U+1F47E', name: 'alien' },
  { unicode: 'U+1F916', name: 'robot' },
  { unicode: 'U+1F91D', name: 'handshake' },
  { unicode: 'U+270D', name: 'writing' },
  { unicode: 'U+1F933', name: 'selfie' },
  { unicode: 'U+1F4AA', name: 'biceps' },
  { unicode: 'U+1F9BE', name: 'arm' },
  { unicode: 'U+1F9BF', name: 'leg' },
  { unicode: 'U+1F9B5', name: 'leg' },
  { unicode: 'U+1F9B6', name: 'foot' },
  { unicode: 'U+1F442', name: 'ear' },
  { unicode: 'U+1F443', name: 'nose' },
  { unicode: 'U+1F9E0', name: 'brain' },
  { unicode: 'U+1F9B7', name: 'tooth' },
  { unicode: 'U+1F9B4', name: 'bone' },
  { unicode: 'U+1F440', name: 'eyes' },
  { unicode: 'U+1F441', name: 'eye' },
  { unicode: 'U+1F445', name: 'tongue' },
  { unicode: 'U+1F444', name: 'mouth' },
  { unicode: 'U+1F476', name: 'baby' },
  { unicode: 'U+1F435', name: 'monkey' },
  { unicode: 'U+1F412', name: 'monkey' },
  { unicode: 'U+1F98D', name: 'gorilla' },
  { unicode: 'U+1F9A7', name: 'orangutan' },
  { unicode: 'U+1F436', name: 'dog' },
  { unicode: 'U+1F415', name: 'dog' },
  { unicode: 'U+1F98A', name: 'fox' },
  { unicode: 'U+1F99D', name: 'raccoon' },
  { unicode: 'U+1F431', name: 'cat' },
  { unicode: 'U+1F408', name: 'cat' },
  { unicode: 'U+1F42F', name: 'tiger' },
  { unicode: 'U+1F405', name: 'tiger' },
  { unicode: 'U+1F406', name: 'leopard' },
  { unicode: 'U+1F434', name: 'horse' },
  { unicode: 'U+1F40E', name: 'horse' },
  { unicode: 'U+1F984', name: 'unicorn' },
  { unicode: 'U+1F993', name: 'zebra' },
  { unicode: 'U+1F98C', name: 'deer' },
  { unicode: 'U+1F42E', name: 'cow' },
  { unicode: 'U+1F402', name: 'ox' },
  { unicode: 'U+1F404', name: 'cow' },
  { unicode: 'U+1F437', name: 'pig' },
  { unicode: 'U+1F416', name: 'pig' },
  { unicode: 'U+1F417', name: 'boar' },
  { unicode: 'U+1F40F', name: 'ram' },
  { unicode: 'U+1F411', name: 'ewe' },
  { unicode: 'U+1F410', name: 'goat' },
  { unicode: 'U+1F42A', name: 'camel' },
  { unicode: 'U+1F42B', name: 'camel' },
  { unicode: 'U+1F999', name: 'llama' },
  { unicode: 'U+1F992', name: 'giraffe' },
  { unicode: 'U+1F418', name: 'elephant' },
  { unicode: 'U+1F98F', name: 'rhinoceros' },
  { unicode: 'U+1F99B', name: 'hippopotamus' },
  { unicode: 'U+1F42D', name: 'mouse' },
  { unicode: 'U+1F401', name: 'mouse' },
  { unicode: 'U+1F400', name: 'rat' },
  { unicode: 'U+1F439', name: 'hamster' },
  { unicode: 'U+1F430', name: 'rabbit' },
  { unicode: 'U+1F407', name: 'rabbit' },
  { unicode: 'U+1F43F', name: 'chipmunk' },
  { unicode: 'U+1F994', name: 'hedgehog' },
  { unicode: 'U+1F987', name: 'bat' },
  { unicode: 'U+1F43B', name: 'bear' },
  { unicode: 'U+1F428', name: 'koala' },
  { unicode: 'U+1F43C', name: 'panda' },
  { unicode: 'U+1F9A5', name: 'sloth' },
  { unicode: 'U+1F9A6', name: 'otter' },
  { unicode: 'U+1F9A8', name: 'skunk' },
  { unicode: 'U+1F998', name: 'kangaroo' },
  { unicode: 'U+1F9A1', name: 'badger' },
  { unicode: 'U+1F983', name: 'turkey' },
  { unicode: 'U+1F414', name: 'chicken' },
  { unicode: 'U+1F413', name: 'rooster' },
  { unicode: 'U+1F423', name: 'chick' },
  { unicode: 'U+1F424', name: 'chick' },
  { unicode: 'U+1F425', name: 'chick' },
  { unicode: 'U+1F426', name: 'bird' },
  { unicode: 'U+1F427', name: 'penguin' },
  { unicode: 'U+1F54A', name: 'dove' },
  { unicode: 'U+1F985', name: 'eagle' },
  { unicode: 'U+1F986', name: 'duck' },
  { unicode: 'U+1F9A2', name: 'swan' },
  { unicode: 'U+1F989', name: 'owl' },
  { unicode: 'U+1F9A9', name: 'flamingo' },
  { unicode: 'U+1F99A', name: 'peacock' },
  { unicode: 'U+1F99C', name: 'parrot' },
  { unicode: 'U+1F438', name: 'frog' },
  { unicode: 'U+1F40A', name: 'crocodile' },
  { unicode: 'U+1F422', name: 'turtle' },
  { unicode: 'U+1F98E', name: 'lizard' },
  { unicode: 'U+1F40D', name: 'snake' },
  { unicode: 'U+1F432', name: 'dragon' },
  { unicode: 'U+1F409', name: 'dragon' },
  { unicode: 'U+1F996', name: 'T-Rex' },
  { unicode: 'U+1F995', name: 'sauropod' },
  { unicode: 'U+1F433', name: 'whale' },
  { unicode: 'U+1F40B', name: 'whale' },
  { unicode: 'U+1F42C', name: 'dolphin' },
  { unicode: 'U+1F41F', name: 'fish' },
  { unicode: 'U+1F420', name: 'fish' },
  { unicode: 'U+1F421', name: 'blowfish' },
  { unicode: 'U+1F988', name: 'shark' },
  { unicode: 'U+1F419', name: 'octopus' },
  { unicode: 'U+1F41A', name: 'shell' },
  { unicode: 'U+1F40C', name: 'snail' },
  { unicode: 'U+1F98B', name: 'butterfly' },
  { unicode: 'U+1F41B', name: 'bug' },
  { unicode: 'U+1F41C', name: 'ant' },
  { unicode: 'U+1F41D', name: 'honeybee' },
  { unicode: 'U+1F997', name: 'cricket' },
  { unicode: 'U+1F577', name: 'spider' },
  { unicode: 'U+1F578', name: 'web' },
  { unicode: 'U+1F982', name: 'scorpion' },
  { unicode: 'U+1F99F', name: 'mosquito' },
  { unicode: 'U+1F490', name: 'bouquet' },
  { unicode: 'U+1F339', name: 'rose' },
  { unicode: 'U+1F33A', name: 'hibiscus' },
  { unicode: 'U+1F33B', name: 'sunflower' },
  { unicode: 'U+1F33C', name: 'blossom' },
  { unicode: 'U+1F337', name: 'tulip' },
  { unicode: 'U+1F331', name: 'seedling' },
  { unicode: 'U+1F335', name: 'cactus' },
  { unicode: 'U+1F33F', name: 'herb' },
  { unicode: 'U+2618', name: 'shamrock' },
  { unicode: 'U+1F344', name: 'mushroom' },
  { unicode: 'U+1F347', name: 'grapes' },
  { unicode: 'U+1F348', name: 'melon' },
  { unicode: 'U+1F349', name: 'watermelon' },
  { unicode: 'U+1F34A', name: 'tangerine' },
  { unicode: 'U+1F34B', name: 'lemon' },
  { unicode: 'U+1F34C', name: 'banana' },
  { unicode: 'U+1F34D', name: 'pineapple' },
  { unicode: 'U+1F96D', name: 'mango' },
  { unicode: 'U+1F34E', name: 'apple' },
  { unicode: 'U+1F34F', name: 'apple' },
  { unicode: 'U+1F350', name: 'pear' },
  { unicode: 'U+1F351', name: 'peach' },
  { unicode: 'U+1F352', name: 'cherries' },
  { unicode: 'U+1F353', name: 'strawberry' },
  { unicode: 'U+1F95D', name: 'kiwi' },
  { unicode: 'U+1F345', name: 'tomato' },
  { unicode: 'U+1F965', name: 'coconut' },
  { unicode: 'U+1F951', name: 'avocado' },
  { unicode: 'U+1F346', name: 'eggplant' },
  { unicode: 'U+1F954', name: 'potato' },
  { unicode: 'U+1F955', name: 'carrot' },
  { unicode: 'U+1F952', name: 'cucumber' },
  { unicode: 'U+1F96C', name: 'greens' },
  { unicode: 'U+1F966', name: 'broccoli' },
  { unicode: 'U+1F9C4', name: 'garlic' },
  { unicode: 'U+1F9C5', name: 'onion' },
  { unicode: 'U+1F95C', name: 'peanuts' },
  { unicode: 'U+1F330', name: 'chestnut' },
  { unicode: 'U+1F35E', name: 'bread' },
  { unicode: 'U+1F950', name: 'croissant' },
  { unicode: 'U+1F968', name: 'pretzel' },
  { unicode: 'U+1F96F', name: 'bagel' },
  { unicode: 'U+1F95E', name: 'pancakes' },
  { unicode: 'U+1F9C7', name: 'waffle' },
  { unicode: 'U+1F9C0', name: 'cheese' },
  { unicode: 'U+1F953', name: 'bacon' },
  { unicode: 'U+1F354', name: 'hamburger' },
  { unicode: 'U+1F35F', name: 'fries' },
  { unicode: 'U+1F355', name: 'pizza' },
  { unicode: 'U+1F32D', name: 'hotdog' },
  { unicode: 'U+1F96A', name: 'sandwich' },
  { unicode: 'U+1F32E', name: 'taco' },
  { unicode: 'U+1F957', name: 'salad' },
  { unicode: 'U+1F37F', name: 'popcorn' },
  { unicode: 'U+1F9C8', name: 'butter' },
  { unicode: 'U+1F9C2', name: 'salt' },
  { unicode: 'U+1F35A', name: 'rice' },
  { unicode: 'U+1F35D', name: 'spaghetti' },
  { unicode: 'U+1F362', name: 'oden' },
  { unicode: 'U+1F363', name: 'sushi' },
  { unicode: 'U+1F361', name: 'dango' },
  { unicode: 'U+1F95F', name: 'dumpling' },
  { unicode: 'U+1F980', name: 'crab' },
  { unicode: 'U+1F99E', name: 'lobster' },
  { unicode: 'U+1F990', name: 'shrimp' },
  { unicode: 'U+1F991', name: 'squid' },
  { unicode: 'U+1F9AA', name: 'oyster' },
  { unicode: 'U+1F369', name: 'doughnut' },
  { unicode: 'U+1F36A', name: 'cookie' },
  { unicode: 'U+1F382', name: 'cake' },
  { unicode: 'U+1F370', name: 'shortcake' },
  { unicode: 'U+1F9C1', name: 'cupcake' },
  { unicode: 'U+1F967', name: 'pie' },
  { unicode: 'U+1F36B', name: 'chocolate' },
  { unicode: 'U+1F36C', name: 'candy' },
  { unicode: 'U+1F36D', name: 'lollipop' },
  { unicode: 'U+1F36E', name: 'custard' },
  { unicode: 'U+1F36F', name: 'honeypot' },
  { unicode: 'U+1F9C9', name: 'mate' },
  { unicode: 'U+1F9CA', name: 'ice' },
  { unicode: 'U+1F962', name: 'chopsticks' },
  { unicode: 'U+1F944', name: 'spoon' },
  { unicode: 'U+1F30D', name: 'globe' },
  { unicode: 'U+1F30E', name: 'globe' },
  { unicode: 'U+1F30F', name: 'globe' },
  { unicode: 'U+1F3E0', name: 'house' },
  { unicode: 'U+1F3E2', name: 'office' },
  { unicode: 'U+1F3E5', name: 'hospital' },
  { unicode: 'U+1F3E6', name: 'bank' },
  { unicode: 'U+1F3E8', name: 'hotel' },
  { unicode: 'U+1F3EB', name: 'school' },
  { unicode: 'U+1F3ED', name: 'factory' },
  { unicode: 'U+1F3F0', name: 'castle' },
  { unicode: 'U+1F492', name: 'wedding' },
  { unicode: 'U+26EA', name: 'church' },
  { unicode: 'U+1F54C', name: 'mosque' },
  { unicode: 'U+1F6D5', name: 'hindutemple' },
  { unicode: 'U+1F54D', name: 'synagogue' },
  { unicode: 'U+26F2', name: 'fountain' },
  { unicode: 'U+26FA', name: 'tent' },
  { unicode: 'U+1F301', name: 'foggy' },
  { unicode: 'U+1F3D9', name: 'cityscape' },
  { unicode: 'U+1F305', name: 'sunrise' },
  { unicode: 'U+1F306', name: 'dusk' },
  { unicode: 'U+1F307', name: 'sunset' },
  { unicode: 'U+1F309', name: 'night' },
  { unicode: 'U+1F686', name: 'train' },
  { unicode: 'U+1F687', name: 'metro' },
  { unicode: 'U+1F689', name: 'station' },
  { unicode: 'U+1F68A', name: 'tram' },
  { unicode: 'U+1F68C', name: 'bus' },
  { unicode: 'U+1F690', name: 'minibus' },
  { unicode: 'U+1F691', name: 'ambulance' },
  { unicode: 'U+1F695', name: 'taxi' },
  { unicode: 'U+1F69C', name: 'tractor' },
  { unicode: 'U+1F3CE', name: 'racecar' },
  { unicode: 'U+1F3CD', name: 'motorcycle' },
  { unicode: 'U+1F6B2', name: 'bicycle' },
  { unicode: 'U+1F6F4', name: 'scooter' },
  { unicode: 'U+1F6F9', name: 'skateboard' },
  { unicode: 'U+1F6E3', name: 'motorway' },
  { unicode: 'U+1F6DE', name: 'wheel' },
  { unicode: 'U+2693', name: 'anchor' },
  { unicode: 'U+26F5', name: 'sailboat' },
  { unicode: 'U+1F6F6', name: 'canoe' },
  { unicode: 'U+1F6A4', name: 'speedboat' },
  { unicode: 'U+26F4', name: 'ferry' },
  { unicode: 'U+1F6A2', name: 'ship' },
  { unicode: 'U+2708', name: 'airplane' },
  { unicode: 'U+1F6E9', name: 'airplane' },
  { unicode: 'U+1FA82', name: 'parachute' },
  { unicode: 'U+1F4BA', name: 'seat' },
  { unicode: 'U+1F681', name: 'helicopter' },
  { unicode: 'U+1F6F0', name: 'satellite' },
  { unicode: 'U+1F680', name: 'rocket' },
  { unicode: 'U+1F9F3', name: 'luggage' },
  { unicode: 'U+231A', name: 'watch' },
  { unicode: 'U+23F1', name: 'stopwatch' },
  { unicode: 'U+23F2', name: 'timer' },
  { unicode: 'U+1F311', name: 'newmoon' },
  { unicode: 'U+1F315', name: 'fullmoon' },
  { unicode: 'U+1F321', name: 'thermometer' },
  { unicode: 'U+2600', name: 'sun' },
  { unicode: 'U+2B50', name: 'star' },
  { unicode: 'U+2601', name: 'cloud' },
  { unicode: 'U+1F32A', name: 'tornado' },
  { unicode: 'U+1F32B', name: 'fog' },
  { unicode: 'U+1F300', name: 'cyclone' },
  { unicode: 'U+1F308', name: 'rainbow' },
  { unicode: 'U+2602', name: 'umbrella' },
  { unicode: 'U+2614', name: 'raindrops' },
  { unicode: 'U+2744', name: 'snowflake' },
  { unicode: 'U+2603', name: 'snowman' },
  { unicode: 'U+1F525', name: 'fire' },
  { unicode: 'U+1F4A7', name: 'droplet' },
  { unicode: 'U+1F386', name: 'fireworks' },
  { unicode: 'U+1F387', name: 'sparkler' },
  { unicode: 'U+1F9E8', name: 'firecracker' },
  { unicode: 'U+2728', name: 'sparkles' },
  { unicode: 'U+1F388', name: 'balloon' },
  { unicode: 'U+1F380', name: 'ribbon' },
  { unicode: 'U+1F3AB', name: 'ticket' },
  { unicode: 'U+1F3C6', name: 'trophy' },
  { unicode: 'U+26BD', name: 'soccerball' },
  { unicode: 'U+26BE', name: 'baseball' },
  { unicode: 'U+1F94E', name: 'softball' },
  { unicode: 'U+1F3C0', name: 'basketball' },
  { unicode: 'U+1F3D0', name: 'volleyball' },
  { unicode: 'U+1F3BE', name: 'tennis' },
  { unicode: 'U+1F3B3', name: 'bowling' },
  { unicode: 'U+1F94D', name: 'lacrosse' },
  { unicode: 'U+1F3D3', name: 'pingpong' },
  { unicode: 'U+1F3F8', name: 'badminton' },
  { unicode: 'U+1F3BF', name: 'skis' },
  { unicode: 'U+1F6F7', name: 'sled' },
  { unicode: 'U+1F3AF', name: 'bullseye' },
  { unicode: 'U+1FA80', name: 'yoyo' },
  { unicode: 'U+1FA81', name: 'kite' },
  { unicode: 'U+1F0CF', name: 'joker' },
  { unicode: 'U+1F9F5', name: 'thread' },
  { unicode: 'U+1F9F6', name: 'yarn' },
  { unicode: 'U+1F453', name: 'glasses' },
  { unicode: 'U+1F576', name: 'sunglasses' },
  { unicode: 'U+1F97D', name: 'goggles' },
  { unicode: 'U+1F454', name: 'necktie' },
  { unicode: 'U+1F455', name: 'tshirt' },
  { unicode: 'U+1F456', name: 'jeans' },
  { unicode: 'U+1F9E3', name: 'scarf' },
  { unicode: 'U+1F9E4', name: 'gloves' },
  { unicode: 'U+1F9E5', name: 'coat' },
  { unicode: 'U+1F9E6', name: 'socks' },
  { unicode: 'U+1F457', name: 'dress' },
  { unicode: 'U+1F458', name: 'kimono' },
  { unicode: 'U+1F97B', name: 'sari' },
  { unicode: 'U+1FA72', name: 'briefs' },
  { unicode: 'U+1FA73', name: 'shorts' },
  { unicode: 'U+1F459', name: 'bikini' },
  { unicode: 'U+1F45B', name: 'purse' },
  { unicode: 'U+1F45C', name: 'handbag' },
  { unicode: 'U+1F392', name: 'backpack' },
  { unicode: 'U+1F45F', name: 'shoe' },
  { unicode: 'U+1F97E', name: 'boot' },
  { unicode: 'U+1F97F', name: 'shoe' },
  { unicode: 'U+1F451', name: 'crown' },
  { unicode: 'U+1F3A9', name: 'tophat' },
  { unicode: 'U+1F484', name: 'lipstick' },
  { unicode: 'U+1F48D', name: 'ring' },
  { unicode: 'U+1F4E2', name: 'loudspeaker' },
  { unicode: 'U+1F4E3', name: 'megaphone' },
  { unicode: 'U+1F514', name: 'bell' },
  { unicode: 'U+1F399', name: 'microphone' },
  { unicode: 'U+1F3A4', name: 'microphone' },
  { unicode: 'U+1F3A7', name: 'headphone' },
  { unicode: 'U+1F4FB', name: 'radio' },
  { unicode: 'U+1F3B7', name: 'saxophone' },
  { unicode: 'U+1F3B8', name: 'guitar' },
  { unicode: 'U+1F3B9', name: 'keyboard' },
  { unicode: 'U+1F3BA', name: 'trumpet' },
  { unicode: 'U+1F3BB', name: 'violin' },
  { unicode: 'U+1FA95', name: 'banjo' },
  { unicode: 'U+1F941', name: 'drum' },
  { unicode: 'U+1F4F1', name: 'phone' },
  { unicode: 'U+260E', name: 'phone' },
  { unicode: 'U+1F4DF', name: 'pager' },
  { unicode: 'U+1F50B', name: 'battery' },
  { unicode: 'U+1F4BB', name: 'laptop' },
  { unicode: 'U+1F5A5', name: 'desktop' },
  { unicode: 'U+1F5A8', name: 'printer' },
  { unicode: 'U+2328', name: 'keyboard' },
  { unicode: 'U+1F5B1', name: 'mouse' },
  { unicode: 'U+1F5B2', name: 'trackball' },
  { unicode: 'U+1F4C0', name: 'dvd' },
  { unicode: 'U+1F9EE', name: 'abacus' },
  { unicode: 'U+1F39E', name: 'film frames' },
  { unicode: 'U+1F4FA', name: 'television' },
  { unicode: 'U+1F4F7', name: 'camera' },
  { unicode: 'U+1F4F9', name: 'videocamera' },
  { unicode: 'U+1F4FC', name: 'videocassette' },
  { unicode: 'U+1F56F', name: 'candle' },
  { unicode: 'U+1F526', name: 'flashlight' },
  { unicode: 'U+1F4D5', name: 'book' },
  { unicode: 'U+1F4D6', name: 'book' },
  { unicode: 'U+1F4DA', name: 'books' },
  { unicode: 'U+1F4D3', name: 'notebook' },
  { unicode: 'U+1F4DC', name: 'scroll' },
  { unicode: 'U+1F4E7', name: 'email' },
  { unicode: 'U+1F4E6', name: 'package' },
  { unicode: 'U+270F', name: 'pencil' },
  { unicode: 'U+1F58A', name: 'pen' },
  { unicode: 'U+1F58D', name: 'crayon' },
  { unicode: 'U+1F4DD', name: 'memo' },
  { unicode: 'U+1F4BC', name: 'briefcase' },
  { unicode: 'U+1F4CB', name: 'clipboard' },
  { unicode: 'U+1F4CC', name: 'pushpin' },
  { unicode: 'U+1F4CE', name: 'paperclip' },
  { unicode: 'U+1F4CF', name: 'ruler' },
  { unicode: 'U+2702', name: 'scissors' },
  { unicode: 'U+1F5D1', name: 'wastebasket' },
  { unicode: 'U+1F512', name: 'locked' },
  { unicode: 'U+1F513', name: 'unlocked' },
  { unicode: 'U+1F511', name: 'key' },
  { unicode: 'U+1F528', name: 'hammer' },
  { unicode: 'U+1FA93', name: 'axe' },
  { unicode: 'U+26CF', name: 'pick' },
  { unicode: 'U+1F5E1', name: 'dagger' },
  { unicode: 'U+2694', name: 'swords' },
  { unicode: 'U+1F4A3', name: 'bomb' },
  { unicode: 'U+1F6E1', name: 'shield' },
  { unicode: 'U+1F527', name: 'wrench' },
  { unicode: 'U+2699', name: 'gear' },
  { unicode: 'U+1F5DC', name: 'clamp' },
  { unicode: 'U+1F517', name: 'link' },
  { unicode: 'U+26D3', name: 'chains' },
  { unicode: 'U+1F9F0', name: 'toolbox' },
  { unicode: 'U+1F9F2', name: 'magnet' },
  { unicode: 'U+2697', name: 'alembic' },
  { unicode: 'U+1F9EC', name: 'dna' },
  { unicode: 'U+1F52C', name: 'microscope' },
  { unicode: 'U+1F52D', name: 'telescope' },
  { unicode: 'U+1F489', name: 'syringe' },
  { unicode: 'U+1F48A', name: 'pill' },
  { unicode: 'U+1FA79', name: 'bandage' },
  { unicode: 'U+1FA7A', name: 'stethoscope' },
  { unicode: 'U+1F6AA', name: 'door' },
  { unicode: 'U+1F6CF', name: 'bed' },
  { unicode: 'U+1FA91', name: 'chair' },
  { unicode: 'U+1F6BD', name: 'toilet' },
  { unicode: 'U+1F6BF', name: 'shower' },
  { unicode: 'U+1F6C1', name: 'bathtub' },
  { unicode: 'U+1FA92', name: 'razor' },
  { unicode: 'U+1F9F9', name: 'broom' },
  { unicode: 'U+1F9FA', name: 'basket' },
  { unicode: 'U+1F9FC', name: 'soap' },
  { unicode: 'U+1F9FD', name: 'sponge' },
  { unicode: 'U+2B06', name: 'up' },
  { unicode: 'U+27A1', name: 'right' },
  { unicode: 'U+2B07', name: 'down' },
  { unicode: 'U+2B05', name: 'left' },
  { unicode: 'U+2649', name: 'Aries', difficulty: 'hard' },
  { unicode: 'U+2649', name: 'Taurus', difficulty: 'hard' },
  { unicode: 'U+264A', name: 'Gemini', difficulty: 'hard' },
  { unicode: 'U+264B', name: 'Cancer', difficulty: 'hard' },
  { unicode: 'U+264C', name: 'Leo', difficulty: 'hard' },
  { unicode: 'U+264D', name: 'Virgo', difficulty: 'hard' },
  { unicode: 'U+264E', name: 'Libra', difficulty: 'hard' },
  { unicode: 'U+264F', name: 'Scorpio', difficulty: 'hard' },
  { unicode: 'U+2650', name: 'Sagittarius', difficulty: 'hard' },
  { unicode: 'U+2651', name: 'Capricorn', difficulty: 'hard' },
  { unicode: 'U+2652', name: 'Aquarius', difficulty: 'hard' },
  { unicode: 'U+2653', name: 'Pisces', difficulty: 'hard' },
  { unicode: 'U+26CE', name: 'Ophiuchus', difficulty: 'hard' },
]

export default allEmojis