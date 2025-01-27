const inventory = [
    {
      id: 1,
      name: 'Amazing Cowboys Western Belt',
      price: 19.13,
      links: 'https://images-na.ssl-images-amazon.com/images/I/61cPluo9VbL._UX679_.jpg',
      sku: '6-001',
      model: 5195,
      stock: 22
    },
    {
      id: 2,
      name: 'Silver Rhinestone Westernized Belt',
      price: 26.79,
      links: 'https://www.southtexastack.com/prodimages/9645-DEFAULT-l.jpg',
      sku: '6-002',
      model: 9171,
      stock: 2
    },
    {
      id: 3,
      name: 'Authentic Cowboy Boots',
      price: 86.43,
      links:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5bzUA_RMKl4lIHJh2-2UwUWQ2NJGSobwHWNzRqltwC1vYWieVRXygF8mS3VQzdb7HjyWWTWqDrmdTJn_ZunlcAfb11eFRqAWOgtW-i0Ak9GGm8wEaypHA8w&usqp=CAc',
      sku: '6-003',
      model: 12567,
      stock: 4
    },
    {
      id: 4,
      name: 'Brown Boots For True Cowboys',
      price: 65.65,
      links: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFxoa4W1RAPsUf1CcA27vYegPJxWYgC5tu559LZoAA6TwjsMx&s',
      sku: '6-004',
      model: 10488,
      stock: 6
    },
    {
      id: 5,
      name: '10% Cotton Blue Real Cowboy Shirt',
      price: 29.99,
      links: 'https://images-na.ssl-images-amazon.com/images/I/61LL6TdlRmL._UY445_.jpg',
      sku: '6-005',
      model: 19152,
      stock: 13
    },
    {
      id: 6,
      name: '23% Cotton Black Real Cowboy Shirt',
      price: 29.98,
      links: 'http://www.spurwesternwear.com/images/Product/large/1354.jpg',
      sku: '6-006',
      model: 12291,
      stock: 17
    },
    {
      id: 7,
      name: '100% Cotton Baby Blue Cowgirl Shirt',
      price: 24.97,
      links:
        'https://cdn11.bigcommerce.com/s-suohc1v4iw/images/stencil/1280x1280/products/17646/22872/pl-637-tur-preview__16739.1541686173.jpg?c=2&imbypass=on',
      sku: '6-007',
      model: 15740,
      stock: 3
    },
    {
      id: 8,
      name: 'Cowgirl Hat Rose Gold',
      price: 19,
      links: 'https://www.dhresource.com/0x0/f2/albu/g9/M00/E6/53/rBVaVVzecNGAO583AARrHsCp8XY835.jpg',
      sku: '6-008',
      model: 15567,
      stock: 20
    },
    {
      id: 9,
      name: 'Mens Longhorn Cowboy Hat',
      price: 23.45,
      links: 'https://ae01.alicdn.com/kf/HTB1q2YOovuSBuNkHFqDq6xfhVXaR.jpg',
      sku: '6-009',
      model: 13164,
      stock: 25
    },
    {
      id: 10,
      name: 'Boys Cowboy Outfit',
      price: 10.15,
      links: 'https://images.halloweencostumes.com/products/15649/1-1/toddler-cowboy-costume-update1.jpg',
      sku: '6-010',
      model: 6685,
      stock: 12
    },
    {
      id: 11,
      name: 'Girls Cowgirl Outfit',
      price: 12.69,
      links: 'https://images.halloweencostumes.com/products/60476/1-2/toy-story-womens-jessie-classic-costume.jpg',
      sku: '6-011',
      model: 13594,
      stock: 2
    },
    {
      id: 12,
      name: 'Imaginary Unisex Western Outfit',
      price: 299.99,
      links: 'https://images-na.ssl-images-amazon.com/images/I/51UW1849rJL._SY355_.jpg',
      sku: '6-012',
      model: 15906,
      stock: 17
    },
    {
      id: 13,
      name: 'Brown Super Comfortable Poncho',
      price: 33.33,
      links: 'https://images.halloweencostumes.com/media/13/cowboys/western-gunman-costume.jpg',
      sku: '6-013',
      model: 16584,
      stock: 8
    },
    {
      id: 14,
      name: 'Western Tuxedo with Glasses',
      price: 125,
      links: 'https://medias.spotern.com/spots/w640/8/8642-1532336916.jpg',
      sku: '6-014',
      model: 8679,
      stock: 1
    },
    {
      id: 15,
      name: 'Maroon Suit with Hat',
      price: 66.66,
      links:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/american-hip-hop-artist-will-smith-performs-the-song-wild-news-photo-2031246-1554660737.jpg?crop=0.852xw:0.569xh;0.0731xw,0.0647xh&resize=480:*',
      sku: '6-015',
      model: 13057,
      stock: 10
    },
    {
      id: 16,
      name: 'Taurus Necklace',
      price: 75.57,
      links: 'http://i800.photobucket.com/albums/yy289/ebmonson86/Clothes/AurelieBiderman.jpg',
      sku: '6-016',
      model: 8780,
      stock: 19
    },
    {
      id: 17,
      name: 'Hold Your Horses T-Shirt 1000% Cotton',
      price: 20,
      links: 'https://i.etsystatic.com/19781246/r/il/92a48b/1984486609/il_1588xN.1984486609_eydl.jpg',
      sku: '6-017',
      model: 9781,
      stock: 5
    },
    {
      id: 18,
      name: 'Full Punchy Cowgirl Attire',
      price: 29.99,
      links: 'https://i.etsystatic.com/14886394/r/il/418ea3/1534959777/il_1588xN.1534959777_kskm.jpg',
      sku: '6-018',
      model: 10727,
      stock: 0
    },
    {
      id: 19,
      name: 'Donkey T-Shirt 57% Cotton',
      price: 22.11,
      links: 'https://i.etsystatic.com/10157633/r/il/de11d8/1402502495/il_1588xN.1402502495_3mo3.jpg',
      sku: '6-019',
      model: 9035,
      stock: 13
    },
    {
      id: 20,
      name: 'Cowboy Take Me Away',
      price: 14.41,
      links: 'https://i.etsystatic.com/13535695/r/il/1e5a7e/1785749318/il_1588xN.1785749318_cy9j.jpg',
      sku: '6-020',
      model: 16474,
      stock: 25
    },
    {
      id: 21,
      name: 'Yee Haw Cabin',
      price: 100000,
      links: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHT4BZXwqC498hcEQ0XJf2MW2Q1b9pZdWY5dCc9_5JGDk8yObX&s',
      sku: '7-001',
      model: 8407,
      stock: 16
    },
    {
      id: 22,
      name: 'Super Log Cabin',
      price: 1,
      links: 'https://images-na.ssl-images-amazon.com/images/I/716g6nwz79L._SX466_.jpg',
      sku: '7-002',
      model: 19150,
      stock: 25
    },
    {
      id: 23,
      name: 'Smelly Cabin',
      price: 0.01,
      links: 'https://qph.fs.quoracdn.net/main-qimg-0fbf1c07e7746a7ac71d5d4326eae5e5',
      sku: '7-003',
      model: 6378,
      stock: 4
    },
    {
      id: 24,
      name: 'Boxy Cabin',
      price: 10,
      links: 'https://i5.walmartimages.com/asr/04f525bf-dc66-40fc-b969-6bb18d72f0ee_1.23d30755bba9df28e4d3ac3f63618a02.jpeg',
      sku: '7-004',
      model: 13510,
      stock: 15
    },
    {
      id: 25,
      name: 'Small Cabin',
      price: 1000,
      links: 'https://i.pinimg.com/originals/c0/b1/3a/c0b13a1708806561a231aaa4dadf48a1.jpg',
      sku: '7-005',
      model: 9859,
      stock: 4
    },
    {
      id: 26,
      name: 'Hot Cabin',
      price: 0.01,
      links: 'https://tribkcpq.files.wordpress.com/2013/07/fire14.png',
      sku: '7-006',
      model: 19448,
      stock: 0
    },
    {
      id: 27,
      name: 'Imaginary Cabin',
      price: 10000000,
      links: 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2019/04/lawn-pH.jpg',
      sku: '7-007',
      model: 10081,
      stock: 15
    },
    {
      id: 28,
      name: 'Oops Cabin',
      price: 10,
      links: 'https://xliulucas.files.wordpress.com/2012/12/1-2.jpg',
      sku: '7-008',
      model: 14260,
      stock: 16
    },
    {
      id: 29,
      name: 'Swimming Cabin',
      price: 100000,
      links: 'https://i.pinimg.com/originals/ce/be/f9/cebef99c236b31d3ef2eb6460ccc61b2.jpg',
      sku: '7-009',
      model: 12026,
      stock: 24
    },
    {
      id: 30,
      name: 'Adaptable Cabin',
      price: 10000,
      links: 'https://www.designboom.com/wp-content/uploads/2018/10/jacob-witzling-truck-cabin-designboom-600.jpg',
      sku: '7-010',
      model: 9120,
      stock: 19
    },
    {
      id: 31,
      name: 'The Shining Cabin',
      price: 1000000,
      links:
        'https://images.ladbible.com/thumbnail?type=jpeg&url=http://beta.ems.ladbiblegroup.com/s3/content/2b9b9d395d3d0b254d1f211c805e8ab7.png&quality=70&width=720',
      sku: '7-011',
      model: 5010,
      stock: 7
    },
    {
      id: 32,
      name: 'Gates Cabin',
      price: 127000000,
      links: 'https://image.cnbcfm.com/api/v1/image/105841065-1554818009865gettyimages-626759612.jpg?v=1561392118&w=1400&h=950',
      sku: '7-012',
      model: 11968,
      stock: 16
    },
    {
      id: 33,
      name: 'Cabin in the woods',
      price: 100,
      links: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2018/10/Cabin-in-the-Woods-Movie-Poster.jpg',
      sku: '7-013',
      model: 16378,
      stock: 16
    },
    {
      id: 34,
      name: 'Ewok Cabins',
      price: 100000,
      links: 'https://vignette.wikia.nocookie.net/starwars/images/d/dd/ST-ewokvillage.jpg/revision/latest?cb=20070811234556',
      sku: '7-014',
      model: 9290,
      stock: 5
    },
    {
      id: 35,
      name: 'Artsy Cabin',
      price: 10,
      links: 'https://cdn0.rubylane.com/_pod/item/1356998/833/Log-Cabin-Ranch-House-Original-Acrylic-full-1A-700%3A10.10-55-r-ffffff-99abbc.png',
      sku: '7-015',
      model: 11383,
      stock: 25
    },
    {
      id: 36,
      name: 'Scary Cabin',
      price: 10000,
      links: 'https://st.hzcdn.com/fimgs/ece24ad20f97a0f0_7200-w500-h400-b0-p0--.jpg',
      sku: '7-016',
      model: 11818,
      stock: 0
    },
    {
      id: 37,
      name: 'Log Cabin',
      price: 100,
      links: 'https://freerangestock.com/sample/17815/old-western-house.jpg',
      sku: '7-017',
      model: 12859,
      stock: 24
    },
    {
      id: 38,
      name: 'Tree Cabin',
      price: 10000,
      links:
        'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/4/17/0/HUHH2019-Escape_Fall-City-WA_19.jpg.rend.hgtvcom.966.725.suffix/1555507098172.jpeg',
      sku: '7-018',
      model: 18788,
      stock: 22
    },
    {
      id: 39,
      name: 'Wet Cabin',
      price: 1,
      links: 'http://images.ourontario.ca/Partners/WHMPL/WHMPL078144.jpg',
      sku: '7-019',
      model: 17902,
      stock: 12
    },
    {
      id: 40,
      name: 'Remote Cabin',
      price: 10000,
      links: 'https://live.staticflickr.com/4480/37457964781_01962f8bc8_b.jpg',
      sku: '7-020',
      model: 19408,
      stock: 22
    },
    {
      id: 41,
      name: 'Leather Saddle',
      price: 299.99,
      links: 'https://img.smartpak.com/images/product/highres/24975_trail-a.jpg',
      sku: '8-001',
      model: 17481,
      stock: 14
    },
    {
      id: 42,
      name: 'Fancy Saddle',
      price: 599.99,
      links: 'https://i.pinimg.com/originals/23/c1/07/23c1078ac9a4863c1b624f95281e974b.jpg',
      sku: '8-002',
      model: 12246,
      stock: 0
    },
    {
      id: 43,
      name: 'Daddy Saddle - Princess Pink',
      price: 19.99,
      links: 'https://images-na.ssl-images-amazon.com/images/I/81PkJiEPmvL._SL1500_.jpg',
      sku: '8-003',
      model: 17527,
      stock: 11
    },
    {
      id: 44,
      name: 'Nerd Saddles (TM) - Batman Saddle',
      price: 199.99,
      links: 'http://3.bp.blogspot.com/_2kjisMm3M9Y/TKjBP3xxaGI/AAAAAAAANlQ/s4XK3XCNVS4/s1600/batman-horse-saddle-3.jpg',
      sku: '8-004',
      model: 19785,
      stock: 16
    },
    {
      id: 45,
      name: 'XXL Lasso',
      price: 50,
      links:
        'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_608/fl_lossy,q_auto/v1492112924/cheats/2016/06/11/cowboy-lassos-thief-in-wal-mart-parking-lot/160611-walmart-cowboy-thief-cheat_hraogc',
      sku: '8-005',
      model: 9063,
      stock: 16
    },
    {
      id: 46,
      name: 'Star Spangled Patriotic Onesie for the Equine in your life',
      price: 60,
      links: 'https://pbs.twimg.com/media/BLLYXE_CYAA3SXr.jpg',
      sku: '8-006',
      model: 16499,
      stock: 23
    },
    {
      id: 47,
      name: 'Pool Horsies, 9-Pack',
      price: 10,
      links: 'https://i.pinimg.com/originals/f4/79/a1/f479a18e10541f13220e4a1371a46783.jpg',
      sku: '8-007',
      model: 8928,
      stock: 7
    },
    {
      id: 48,
      name: 'Imaginary Horse',
      price: 11999.99,
      links: 'http://www.freakingnews.com/pictures/22000/Man-in-a-Rodeo-Riding-an-Invisible-Horse--22229.jpg',
      sku: '8-008',
      model: 5008,
      stock: 22
    },
    {
      id: 49,
      name: 'Horseshoes, 2-Pack - Rose Gold',
      price: 99.99,
      links: 'https://americanequus.com/wp-content/uploads/2017/08/AE_08-18-17_IQ150_0050-Edit-Edit.jpg',
      sku: '8-009',
      model: 9684,
      stock: 20
    },
    {
      id: 50,
      name: 'Horseshoes, 2-Pack - Thoroughbred Red',
      price: 99.99,
      links: 'https://americanequus.com/wp-content/uploads/2017/08/AE_SHOES_7-13-17_8424-Edit.jpg',
      sku: '8-010',
      model: 19171,
      stock: 7
    },
    {
      id: 51,
      name: 'Horseshoes, 2-Pack - Victory Violet',
      price: 99.99,
      links: 'https://americanequus.com/wp-content/uploads/2017/07/AE_6-29-17_8418-Edit.jpg',
      sku: '8-011',
      model: 6107,
      stock: 14
    },
    {
      id: 52,
      name: 'White Mare, 3-Pack',
      price: 9999.99,
      links: 'https://s1.1zoom.me/b5050/870/Horses_White_Three_3_Run_527672_3840x2400.jpg',
      sku: '8-012',
      model: 16680,
      stock: 9
    },
    {
      id: 53,
      name: 'Fly Mask With Ears - Grumpy Horse',
      price: 19.99,
      links: 'https://www.chicksaddlery.com/Merchant2/graphics/00000001/SM2004.jpg',
      sku: '8-013',
      model: 12465,
      stock: 10
    },
    {
      id: 54,
      name: 'My Little Ponies FurReal! - Pretty Pretty Pink (3-Pack)',
      price: 7999.99,
      links: 'https://www.horsebreedspictures.com/wp-content/uploads/2016/11/Baguio-Ponies.jpg',
      sku: '8-014',
      model: 19344,
      stock: 0
    },
    {
      id: 55,
      name: 'Coachella Flowers for Indie Foals',
      price: 24.99,
      links: 'https://i.etsystatic.com/7232254/r/il/5fd452/1847629269/il_1588xN.1847629269_cvqm.jpg',
      sku: '8-015',
      model: 17155,
      stock: 24
    },
    {
      id: 56,
      name: 'Brown Horse (Refurbished)',
      price: 99.99,
      links: 'https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fderp-horse-595badb887dea.jpeg',
      sku: '8-016',
      model: 11440,
      stock: 3
    },
    {
      id: 57,
      name: 'ShadowQuack (Meaning of Haste included)',
      price: 3999.99,
      links: 'https://i.pinimg.com/originals/ec/fa/97/ecfa979190fec01faf5d96d30865ddd1.jpg',
      sku: '8-017',
      model: 18938,
      stock: 24
    },
    {
      id: 58,
      name: 'Gentleman Horse',
      price: 4999.99,
      links: 'https://pbs.twimg.com/media/DeHwi3KWkAEl0eF.jpg',
      sku: '8-018',
      model: 12913,
      stock: 13
    },
    {
      id: 59,
      name: 'Swole Horse',
      price: 3499.99,
      links: 'https://i.ytimg.com/vi/y1U1Eqfdg7w/maxresdefault.jpg',
      sku: '8-019',
      model: 12201,
      stock: 3
    },
    {
      id: 60,
      name: 'SmartHorse (parkable anywhere)',
      price: 2999.99,
      links: 'https://i.ytimg.com/vi/uFOq8-gNoQo/hqdefault.jpg',
      sku: '8-020',
      model: 14646,
      stock: 4
    },
    {
      id: 61,
      name: 'Gold Rush Nugget Bucket Gold Panning Kit',
      price: 109.95,
      links: 'https://images-na.ssl-images-amazon.com/images/I/81WtG6m6p%2BL._SL1500_.jpg',
      sku: '9-001',
      model: 15165,
      stock: 8
    },
    {
      id: 62,
      name: 'SnakeArmor Snake Gaiters',
      price: 153.98,
      links: 'https://images-na.ssl-images-amazon.com/images/I/81w9Jk9rSIL._SL1500_.jpg',
      sku: '9-002',
      model: 19437,
      stock: 2
    },
    {
      id: 63,
      name: 'SluiceFox Gold Panning Kit',
      price: 49,
      links: 'https://images-na.ssl-images-amazon.com/images/I/81TL6qK7duL._SL1500_.jpg',
      sku: '9-003',
      model: 7888,
      stock: 21
    },
    {
      id: 64,
      name: 'Pickaxe',
      price: 15.99,
      links: 'https://images-na.ssl-images-amazon.com/images/I/61-jbDlG4PL._SL1500_.jpg',
      sku: '9-004',
      model: 11790,
      stock: 8
    },
    {
      id: 65,
      name: 'Gold Mining Ornament',
      price: 11.99,
      links: 'https://i.etsystatic.com/8081128/r/il/3ab614/1893446075/il_fullxfull.1893446075_i1h7.jpg',
      sku: '9-005',
      model: 13811,
      stock: 1
    },
    {
      id: 66,
      name: 'Dynamite',
      price: 895,
      links: 'https://www.straight.com/files/v3/styles/gs_standard/public/images/19/04/gettyimages-545639598.jpg?itok=IOoitVm2',
      sku: '9-006',
      model: 16812,
      stock: 6
    },
    {
      id: 67,
      name: 'Mud/Sifting Round Point Shovel',
      price: 84,
      links:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_Je7LqD2zZUrfXzyKFoOR-WiJpVebP38EXNQYQqUL_C0Op3vUteMAHfuuY_lptXy_ZHgEeN8uiv_F8EKRRR0unT7OZxfiJMInPZTmklMaewrGHlOGY_82&usqp=CAc',
      sku: '9-007',
      model: 8241,
      stock: 23
    },
    {
      id: 68,
      name: 'Wheelbarrow',
      price: 199.99,
      links:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTuqFmSwOOzXtGL7iRNLivFhjbbOUPRecCTIdj-jUqwuwVJL7r4cqyYtrLGwZJl_4YyPg125eK2A8ixg4tvXiv8VNqWCStFhbPKZZLjPSyoOFNOmZCjkhG5&usqp=CAc',
      sku: '9-008',
      model: 6286,
      stock: 2
    },
    {
      id: 69,
      name: 'Alaskan Yukon Gold Nuggets--1 Gram',
      price: 61.35,
      links: 'https://images-na.ssl-images-amazon.com/images/I/710%2BpBbAWIL._SL1500_.jpg',
      sku: '9-009',
      model: 15673,
      stock: 19
    },
    {
      id: 70,
      name: 'Copper Lantern',
      price: 10.75,
      links: 'https://images-na.ssl-images-amazon.com/images/I/714S0qA81yL._SL1500_.jpg',
      sku: '9-010',
      model: 15780,
      stock: 23
    },
    {
      id: 71,
      name: 'Old Style Western Signs',
      price: 25.68,
      links: 'https://images-na.ssl-images-amazon.com/images/I/81I-YEX6qYL._SL1500_.jpg',
      sku: '9-011',
      model: 13133,
      stock: 15
    },
    {
      id: 72,
      name: 'Cowhide Area Rug',
      price: 18.99,
      links: 'https://images-na.ssl-images-amazon.com/images/I/61-XsUt7FJL._SL1000_.jpg',
      sku: '9-012',
      model: 7941,
      stock: 17
    },
    {
      id: 73,
      name: 'Cowboy Boot Toilet Brush Holder',
      price: 34.95,
      links:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjTNHJpiMmJjZBxiGoTSzGHyZmWkBizkVQIwnIYbPF1LzoXi3PmJALPklVGWowIGClN_gdLmKL9Y_gr-88UCOg-Jm2Z93i0eL3HN5rmzvc690jf1JUUjBo&usqp=CAc',
      sku: '9-013',
      model: 16831,
      stock: 19
    },
    {
      id: 74,
      name: 'Southwestern Steer Skull Wall Sculpture',
      price: 19.95,
      links: 'https://images-na.ssl-images-amazon.com/images/I/61HAD%2Bf6z1L._SL1100_.jpg',
      sku: '9-014',
      model: 9961,
      stock: 0
    },
    {
      id: 75,
      name: 'Diamondback Rattlesnake Outdoor Statue',
      price: 21.66,
      links: 'https://images-na.ssl-images-amazon.com/images/I/71sw16YY-qL._SL1185_.jpg',
      sku: '9-015',
      model: 16791,
      stock: 15
    },
    {
      id: 76,
      name: 'Mule Deer Antler Single Tier Chandelier',
      price: 1398,
      links: 'https://images-na.ssl-images-amazon.com/images/I/818nCivnEXL._SL1500_.jpg',
      sku: '9-016',
      model: 6158,
      stock: 7
    },
    {
      id: 77,
      name: 'Jesse James Wanted Poster',
      price: 12.99,
      links: 'https://images-na.ssl-images-amazon.com/images/I/711V5a1GpvL._SL1244_.jpg',
      sku: '9-017',
      model: 15527,
      stock: 23
    },
    {
      id: 78,
      name: 'Western Shower Curtain',
      price: 19.99,
      links: 'https://images-na.ssl-images-amazon.com/images/I/91KyDFHbzRL._SL1500_.jpg',
      sku: '9-018',
      model: 12321,
      stock: 1
    },
    {
      id: 79,
      name: 'Drinking Chestnut Stallion Wine Bottle Holder',
      price: 24.95,
      links: 'https://images-na.ssl-images-amazon.com/images/I/61kiyq6k16L._SL1000_.jpg',
      sku: '9-019',
      model: 16833,
      stock: 24
    },
    {
      id: 80,
      name: 'Prairie Rose Western Bronze Hand-Cast Wedding Cake Topper',
      price: 44.95,
      links: 'https://images-na.ssl-images-amazon.com/images/I/81RUd%2BRM1WL._SL1500_.jpg',
      sku: '9-020',
      model: 13604,
      stock: 25
    },
    {
      id: 81,
      name: 'Remington Rolling Block Rifle',
      price: 399.99,
      links:
        'https://www.outdoorlife.com/g00/3_c-5eee.wcblwwztqnm.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2feee.wcblwwztqnm.kwux2fzmaqhmzx2fP0rc-z9oHSIBv0_7yNmFvgF5Xkax3dx2f0846f368x2fnqtbmzax3anwkit(9888f069x3a9889f060)x2fizk-ivotmznqap-izk0-x78zwl-jwvvqmz.a1.iuihwviea.kwux2fx78cjtqkx2f35S0DCPASAMDVYKGICRDBKCJEY.rx78ox3fq98k.uizsx3dquiom_$/$/$/$/$/$/$/$',
      sku: '12-001',
      model: 14421,
      stock: 24
    },
    {
      id: 82,
      name: 'Winchester Model 1873 Rifle',
      price: 449.99,
      links:
        'https://www.outdoorlife.com/g00/3_c-5eee.wcblwwztqnm.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2feee.wcblwwztqnm.kwux2fzmaqhmzx2fEpTuGfYj_KIUAXomYWdOdqZsqkMx3dx2f0846f574x2fnqtbmzax3anwkit(9888f163x3a9889f164)x2fizk-ivotmznqap-izk0-x78zwl-jwvvqmz.a1.iuihwviea.kwux2fx78cjtqkx2fZW2OTPANQXX1V0MFDY2QGO3BSG.rx78ox3fq98k.uizsx3dquiom_$/$/$/$/$/$/$/$',
      sku: '12-002',
      model: 10979,
      stock: 24
    },
    {
      id: 83,
      name: 'Remington Army Revolver',
      price: 499.99,
      links:
        'https://www.outdoorlife.com/g00/3_c-5eee.wcblwwztqnm.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2feee.wcblwwztqnm.kwux2fzmaqhmzx2fS9yaBbDlkFahZGn97TWiQKV9sFex3dx2f0846f682x2fnqtbmzax3anwkit(448f035x3a449f036)x2fizk-ivotmznqap-izk0-x78zwl-jwvvqmz.a1.iuihwviea.kwux2fx78cjtqkx2fRB2CFLNY0FYJTYBQWO5FDIRFXY.rx78ox3fq98k.uizsx3dquiom_$/$/$/$/$/$/$/$',
      sku: '12-003',
      model: 13298,
      stock: 7
    },
    {
      id: 84,
      name: 'Colt Model 1851 Navy Revolver',
      price: 349.99,
      links:
        'https://www.outdoorlife.com/g00/3_c-5eee.wcblwwztqnm.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2feee.wcblwwztqnm.kwux2fzmaqhmzx2fftV6H_PeQJRyRT8muoQZGgKNG8Cx3dx2f0846f9942x2fnqtbmzax3anwkit(9888f341x3a9889f342)x2fizk-ivotmznqap-izk0-x78zwl-jwvvqmz.a1.iuihwviea.kwux2fx78cjtqkx2fZEKM1IVXP1ALNJL0KNYJQSIQBU.rx78ox3fq98k.uizsx3dquiom_$/$/$/$/$/$/$/$',
      sku: '12-004',
      model: 10473,
      stock: 4
    },
    {
      id: 85,
      name: 'Winchester Model 1895 Rifle',
      price: 349.99,
      links:
        'https://www.outdoorlife.com/g00/3_c-5eee.wcblwwztqnm.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2feee.wcblwwztqnm.kwux2fzmaqhmzx2fFwthwk3Q7_RiLlTXqtY9FF-qrlGx3dx2f0846f408x2fnqtbmzax3anwkit(9888f188x3a9889f189)x2fizk-ivotmznqap-izk0-x78zwl-jwvvqmz.a1.iuihwviea.kwux2fx78cjtqkx2f1I3GZE3YAODZO2AKNMJYG52HMC.rx78ox3fq98k.uizsx3dquiom_$/$/$/$/$/$/$/$',
      sku: '12-005',
      model: 11632,
      stock: 18
    },
    {
      id: 86,
      name: 'Half-stock Hawken Rifle',
      price: 399.99,
      links:
        'https://www.outdoorlife.com/g00/3_c-5eee.wcblwwztqnm.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2feee.wcblwwztqnm.kwux2fzmaqhmzx2f51naWyyLOWMqo1bYsf7XhguIS1Cx3dx2f0846f746x2fnqtbmzax3anwkit(9888f246x3a9889f247)x2fizk-ivotmznqap-izk0-x78zwl-jwvvqmz.a1.iuihwviea.kwux2fx78cjtqkx2fOIXHHV0SN3RHG2BGXHEJ1BPJCQ.rx78ox3fq98k.uizsx3dquiom_$/$/$/$/$/$/$/$',
      sku: '12-006',
      model: 8232,
      stock: 10
    },
    {
      id: 87,
      name: 'Sharps Model 1853 Sporting Rifle',
      price: 299.99,
      links:
        'https://www.outdoorlife.com/g00/3_c-5eee.wcblwwztqnm.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2feee.wcblwwztqnm.kwux2fzmaqhmzx2fyZBwjkofV1zP-9lOwHOp_-SNTp2x3dx2f0846f366x2fnqtbmzax3anwkit(9888f062x3a9889f063)x2fizk-ivotmznqap-izk0-x78zwl-jwvvqmz.a1.iuihwviea.kwux2fx78cjtqkx2fI5WJ240IRWXYMDP2ST3LTZ1YCU.rx78ox3fq98k.uizsx3dquiom_$/$/$/$/$/$/$/$',
      sku: '12-007',
      model: 13690,
      stock: 20
    },
    {
      id: 88,
      name: 'Heavy Silver Chain Watch',
      price: 89.99,
      links: 'https://www.riverjunction.com/Heavy-Silver-watch-chain-_p_4469.html',
      sku: '12-008',
      model: 8044,
      stock: 18
    },
    {
      id: 89,
      name: 'Clark Stanleys Snake Oil',
      price: 4.99,
      links:
        'https://www.zazzle.com/vintage_1905_clark_stanleys_snake_oil_liniment_liquor_bottle_label-256618523060475171?rf=238840279726397180&tc=Cj0KCQiAt_PuBRDcARIsAMNlBdqCVmf0oPKkOAsDrvVsdGmsvwWt_Ks6FUpJvkKoUw506nKO5vf0Hj0aAmB9EALw_wcB&utm_source=google&utm_medium=cpc&utm_campaign=us_shopping&utm_term=z256618523060475171&ca_chid=2001810&ca_source=gaw&ca_ace=&ca_nw=g&ca_dev=c&ca_pl=&ca_pos=1o5&ca_cid=303811433406&ca_agid=59506863014&ca_caid=1600127754&ca_adid=303811433406&ca_kwt=&ca_mt=&ca_fid=&ca_tid=aud-486312179911:pla-541616255956&ca_lp=9060225&ca_li=&ca_devm=&ca_plt=&gclsrc=aw.ds&gclid=Cj0KCQiAt_PuBRDcARIsAMNlBdqCVmf0oPKkOAsDrvVsdGmsvwWt_Ks6FUpJvkKoUw506nKO5vf0Hj0aAmB9EALw_wcB',
      sku: '12-009',
      model: 12415,
      stock: 22
    },
    {
      id: 90,
      name: 'Cowboy Snuff Box',
      price: 7.99,
      links: 'https://www.riverjunction.com/5188',
      sku: '12-010',
      model: 8501,
      stock: 22
    },
    {
      id: 91,
      name: 'Billy Club',
      price: 24.99,
      links: 'https://www.riverjunction.com/5300',
      sku: '12-011',
      model: 9224,
      stock: 7
    },
    {
      id: 92,
      name: 'American Flask and Cap',
      price: 19.99,
      links: 'https://www.riverjunction.com/5227',
      sku: '12-012',
      model: 7143,
      stock: 4
    },
    {
      id: 93,
      name: 'German Silver Mounted Western Headstall',
      price: 24.99,
      links: 'https://www.riverjunction.com/BL-5129',
      sku: '12-013',
      model: 15779,
      stock: 8
    },
    {
      id: 94,
      name: 'Tomahawk',
      price: 49.99,
      links: 'https://www.riverjunction.com/1180',
      sku: '12-014',
      model: 12556,
      stock: 22
    },
    {
      id: 95,
      name: 'Buffalo Ride',
      price: 28.99,
      links: 'https://images.fineartamerica.com/images-medium-large-5/american-western-buffalo-randall-nyhof.jpg',
      sku: '12-015',
      model: 9080,
      stock: 23
    },
    {
      id: 96,
      name: 'Hornady Custom Ammunition 405 Winchester',
      price: 12.99,
      links: 'https://www.midwayusa.com/product/1001707083',
      sku: '12-016',
      model: 10454,
      stock: 20
    },
    {
      id: 97,
      name: 'Hornady LEVERevolution .35 Remington Ammunition 20 Rounds',
      price: 11.99,
      links: 'https://www.cheaperthandirt.com/hornady-leverevolution-.35-remington-ammunition-20-rounds-ftx--200-grains-82735/FC-090255827354.html',
      sku: '12-017',
      model: 17375,
      stock: 2
    },
    {
      id: 98,
      name: '54 Caliber Ammunition',
      price: 14.99,
      links: 'https://www.midsouthshooterssupply.com/item/00002ac1597at/54-caliber-348-grain-aero-tip-copper-mag-power-belt-(15-per-pack)',
      sku: '12-018',
      model: 6409,
      stock: 21
    },
    {
      id: 99,
      name: 'Tipi for one',
      price: 84.99,
      links:
        'https://www.hearthsong.com/p/731229?aff=10051&CAWELAID=530007750000016352&CAGPSPN=pla&CAAGID=80900530520&CATCI=pla-300711978879&gclid=Cj0KCQiA2vjuBRCqARIsAJL5a-L2oeACQKe1Pattd205wIrxwy3eN25fC4Jl4b-9rmNSm-XAWyx447kaAjJoEALw_wcB',
      sku: '12-019',
      model: 7933,
      stock: 24
    },
    {
      id: 100,
      name: 'Finger Pistol',
      price: 0,
      links: 'https://media.istockphoto.com/photos/human-hand-gesture-picture-id615992002',
      sku: '12-020',
      model: 15930,
      stock: 19
    }
  ];
  
  module.exports = inventory;
  