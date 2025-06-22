// Product Database
const products = [
    {
        id: 1,
        name: "Dual Wireless Gaming Headset",
        price: 199.99,
        description: "The Arctis 9 dual wireless headset combines high performance 2.4 GHz wireless for premium gaming audio on PC and PlayStation, with the convenience of simultaneous Bluetooth connectivity for everything else.",
        category: "headsets",
        features: [
            "Lossless 2.4 GHz wireless for lag-free high fidelity gaming audio on PC and PlayStation",
            "Simultaneous Bluetooth for calls, music, and VoIP chat while gaming",
            "Discord-certified microphone provides noise cancellation and natural sounding clarity",
            "Signature Arctis sound with ChatMix control to hear every detail for an audio advantage",
            "20+ hour battery life for nonstop wireless usage"
        ],
        specs: {
            brand: "SteelSeries",
            model: "Artis 9x",
            connectivity: "Wireless (2.4GHz, Bluetooth) and Wired (3.5mm)",
            dimensions: "204 x 210 x 92 mm",
            weight: "544g"
        },
        images:["img/products/arctis9x.png"],
        
        badge: "New"
    },
    {
        id: 2,
        name: "Strix Scope",
        price: 499.99,
        description: "100% RGB Gaming Keyboard, ROG RX Red Optical Mechanical Switches, IP57 Water Resistance, USB Passthrough, Wider Ctrl Key, Stealth Key, Macro Support, EVA-themed",
        category: "keyboards",
        features: [
            "EVA-inspired design: EVA red and orange color scheme with unique transparent keycaps for Esc and F12 keys, plus a dye-sub spacebar",
            "ROG RX optical mechanical switches: ROG RX Red linear optical switches feature central lighting, wobble-free consistent keystrokes and near-zero debounce delay",
            "Built to last: Alloy top cover and IP57 waterproof and dust resistance help ensure long lifespan",
            "USB 2.0 passthrough: Full-function port for device charging and external storage",
            "PS-ready: Extended Ctrl key for ‘Crouch’ and other commands"
        ],
        specs: {
            brand: "Republic of Gamers (ROG)",
            model: "ROG Strix Scope RX EVA Edition",
            connectivity: "Wired (USB)",
            dimensions: "440 x 136 x 40 mm",
            weight: "1,050g"
        },
        images: ["img/products/rogxeva.png"],
        badge: "Sale"
    },
    {
        id: 3,
        name: "Logetic G502 Hero Gaming Mouse",
        price: 69.99,
        description: "High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac.",
        category: "mice",
        features: [
            "Hero 25K sensor through a software update from G HUB, this upgrade is free to all players: this Logitech gaming mouse has 1:1 tracking, 400-plus ips, 100 - 25,600 dpi plus zero smoothing, filtering, or acceleration.",
            "Adjustable weight system: Arrange up to five removable 3.6 grams weights inside the gaming mouse for personalized weight and balance tuning.",
            "Mechanical switch button tensioning: Metal spring tensioning system and pivot hinges are built into left and right gaming mouse buttons for a crisp, clean click feel with rapid click feedback with this black gaming mouse",
            "11 customizable buttons and onboard memory: Assign custom commands to the buttons and save up to five ready to play profiles directly to the wired mouse. Suitable for pc gaming mouse needs.",
            "Programmable RGB Lighting and Lightsync technology: Customize lighting from nearly 16.8 million colors to match your team's colors or sync colors with other Logitech G gear on this wired mouse for gaming"
        ],
        specs: {
            brand: "Logitech",
            model: "G305 Lightspeed",
            connectivity: "Wired (USB)",
            dimensions: "116 x 62 x 38 mm",
            weight: "99g"
        },
        images: ["img/products/g502.png"],
        badge: null
    },
    {
        id: 4,
        name: "27\" Odyssey G50D Series QHD Gaming Monitor",
        price: 349.99,
        description: "Fast IPS G-Sync Compatible Gaming Monitor, 1ms, VESA DisplayHDR 400, 180Hz, AMD FreeSync, Adjustable Stand, Eye Saver Mode, LS27DG500ENXZA, 2024.",
        category: "monitors",
        features: [
            "180Hz Refresh Rate",
            "1ms Response Time",
            "AMD Radeon FreeSync Technology",
            "2K QHD 2560x1440 Resolution",
            "3-Sided Borderless Design"
        ],
        specs: {
            brand: "Samsung",
            model: "Odyssey G50D",
            connectivity: "HDMI, DisplayPort",
            dimensions: "264 x 612 x 551 mm",
            weight: "6.4kg"
        },
        images: ["img/products/odysseyg5.png"],
        badge: "Hot"
    },
    {
        id: 5,
        name: "Clutch GM50  Gaming Mouse",
        price: 74.99,
        description: "aming Mouse, 7200 DPI, 20M Omron Switches, Optical Sensor, Ergonomic Design, RGB Mystic Light.",
        category: "mice",
        features: [
            "Pmw-3330 Optical gaming sensor",
            "Light weight and ergonomics design",
            "Choose from millions of colors with gaming center",
            "Fine-tune detailed settings with gaming center",
            "Special Omron switches rated for 20 million clicks"
        ],
        specs: {
            brand: "MSI",
            model: "Clutch GM50",
            connectivity: "Wired (USB)",
            dimensions: "119 x 66 x 43 mm",
            weight: "136g"
        },
        images: ["img/products/cluthchgm50.png"],
        badge: "New"
    },
    {
        id: 6,
        name: "Logitech G PRO Mechanical Gaming Keyboard",
        price: 119.99,
        description: "Ultra Portable Tenkeyless Design, Detachable Micro USB Cable, 16.8 Million Color LIGHTSYNC RGB Backlit Keys.",
        category: "keyboards",
        features: [
            "Durable GX Blue Click switches deliver an audible and tactile click for a solid, secure keypress.",
            "Ultra-portable compact ten keyless design frees up table space for mouse movement. It’s easy to pack up and transport to tournaments.",
            "Detachable Micro USB cables feature a three-pronged design for an easy, secure connection and safe transport in your travel bag.",
            "3-step angle adjustment for additional levels of comfort, plus rubber feet for excellent stability during intense gaming.",
            "1.8 m detachable cable"
        ],
        specs: {
            brand: "Logitech",
            model: "G Pro ",
            connectivity: "Wired (USB)",
            dimensions: "378 x 165 x 48 mm",
            weight: "1.3kg"
        },
        images: ["img/products/gpro.png"],
        badge: "New"
    },
    {
        id: 7,
        name: "SteelSeries Arctis 9 Wireless",
        price: 188,
        description: "SteelSeries Arctis 9 Dual Wireless Gaming Headset – Lossless 2.4 GHz Wireless + Bluetooth – 20+ Hour Battery Life – For PC, PS5, PS4, Bluetooth,Black. ",
        category: "headsets",
        features: [
            "Lossless 2.4GHz Wireless Connection",
            "Simultaneous Bluetooth for calls, music, and VoIP chat while gaming",
            "20+ Hour Battery Life",
            "Discord-certified microphone provides noise cancellation and natural sounding clarity",
            "Signature Arctis sound to hear every detail for an audio advantage"
        ],
        specs: {
            brand: "SteelSeries",
            model: "Arctis 9",
            connectivity: "Wireless (2.4GHz)",
            dimensions: "210 x 190 x 70 mm",
            weight: "377g"
        },
        images: ["img/products/arctis9.png"],
        badge: "Hot"
    },
    {
        id: 8,
        name: "49\" Asus ROG Strix XG49VQ Curved Gaming FreeSync Monitor",
        price: 779.99,
        description: "ROG Strix XG49VQ Super Ultra-Wide HDR Gaming Monitor — 49-inch 32:9 (3840 x 1080), 144Hz, FreeSync™ 2 HDR, DisplayHDR™ 400, DCI-P3: 90%, Shadow Boost.",
        category: "monitors",
        features: [
            "3840x1080 Resolution",
            "1500R Curved Display",
            "144Hz Refresh Rate",
            "AMD FreeSync Premium",
            "USB-C Connectivity"
        ],
        specs: {
            brand: "ASUS",
            model: "XG49VQ",
            connectivity: "HDMI, DisplayPort, USB-C",
            dimensions: "508 x 1168 x 330mm",
            weight: "9.7kg"
        },
        images: ["img/products/xg49vq.png"],
        badge: "New"
    },
    {
        id: 9,
        name: "Logitech Stereo Speakers Z120, USB Powered",
        price: 19.99,
        description: "an extremely affordable, easy-to-use pair of speakers for playing stereo audio from your computer or music player. These compact, tidy speakers save you space on your desk and feature an integrated power and volume knob. They are powered via your computer's USB port but receive audio by being connected via the built-in 3.5mm audio cable. With that cable, you can connect the speakers to your desktop, laptop, or music player and play audio from any of these devices..",
        category: "speakers",
        features: [
            "Compact USB powered speakers: Simply plug them into your laptop or netbook for great sound no wall outlet required",
            "3.5 mm input: Connect your portable music player or any audio source that uses a standard 3.5 mm plug",
            "Integrated cable management system: Your desk stays tidy with cords neatly stowed in the back of the speakers",
            "Convenient controls: Power and volume are at your fingertips",
            "Easy connections: Works with PC, Mac and iPod/MP3 players"
        ],
        specs: {
            brand: "Logitech",
            model: "Z120",
            connectivity: "USB, 3.5mm",
            dimensions: "178 x 118 x 122 mm",
            weight: "670g"
        },
        images: ["img/products/z120.png"],
        badge: "New"
    },
    {
        id: 10,
        name: "Logitech Z207 2.0 ",
        price: 59.99,
        description: "Let the fun begin. With compact design and rich, room-filling audio, Z207 fits easily into your deskspace and is ideal for watching videos, gaming, or listening to music. Connect up to two devices via Bluetooth—then play, pause, and seamlessly switch between them with Logitech Easy-Switch™..",
        category: "speakers",
        features: [
            "Versatile setup with speakers that connect easily to computers and other devices via Bluetooth wireless or 3.5mm cable",
            "Logitech Easy-Switch technology lets you seamlessly switch between audio devices Just by pausing the Audio on one device and pressing play on the other",
            "Each speaker has one active/powered driver that delivers full range Audio and ONE passive radiator that provides bass extension.",
            "On-speaker headphone jack Plus convenient controls for easy access to Bluetooth wireless pairing, power and Volume adjustments, Bluetooth version: 4.2",
            "Works with Bluetooth enabled devices and any device with a 3.5mm input including a computer, television, smartphone, tablet and music player"
        ],
        specs: {
            brand: "Logitech",
            model: "Z207",
            connectivity: "3.5mm, RCA, Bluetooth",
            dimensions: "241 x 90 x 120 mm",
            weight: "1kg"
        },
        images: ["img/products/z207.png"],
        badge: null
    },
    {
        id: 11,
        name: "ASUS ROG Scabbard II Extended Gaming Mouse Pad",
        price: 49.99,
        description: "Large surface area for both keyboard and mouse. Smooth texture for precise mouse movements and comfortable wrist support during long gaming sessions.",
        category: "mousepads",
        features: [
            "Extra Large Size: 900x400mm",
            "Non-slip Rubber Base",
            "Stitched Edges",
            "Water Resistant",
            "Smooth Surface"
        ],
        specs: {
            brand: "ASUS",
            model: "QcK",
            connectivity: "N/A",
            dimensions: "900 x 400 x 3 mm",
            weight: "500g"
        },
        images: ["img/products/rogmousepad.png"],
        badge: "Hot"
    },
    {
        id: 12,
        name: "Razer Firefly V2 RGB Gaming Mouse Pad",
        price: 49.99,
        description: "Customizable RGB lighting with smooth tracking surface. Perfect for gamers who want to match their setup with synchronized lighting effects.",
        category: "mousepads",
        features: [
            "RGB Edge Lighting",
            "Micro-textured Surface",
            "Waterproof Coating",
            "Non-slip Rubber Base",
            "USB Powered"
        ],
        specs: {
            brand: "Razer",
            model: "Goliathus Chroma",
            connectivity: "USB",
            dimensions: "275 x 355 x 3 mm",
            weight: "740g"
        },
        images: ["img/products/fireflyv2.png"],
        badge: null
    },
    {
    id: 13,
    name: "PlayStation DualSense™ Wireless Controller",
    price: 59.99,
    description: "Brighten your PlayStation®5 gaming space with the DualSense® Starlight Blue wireless controller. Discover a deeper, highly immersive gaming experience* that brings all the action bursting to life in the palms of your hands.",
    category: "controllers",
    features: [
        "Bluetooth Connectivity",
        "Ergonomic Design",
        "Rechargeable Battery",
        "Customizable Buttons",
        "Compatible with PC, Mac, and Mobile"
    ],
    specs: {
            brand: "PlayStation",
            model: "DualShock 4",
            connectivity: "USB",
            dimensions: "275 x 355 x 3 mm",
            weight: "240g"
        },
    images: ["img/products/ps5blue.png"],
    badge: "New"
    
},
 {
        id: 14,
        name: "SteelSeries Arctis Nova 7",
        price: 156.99,
        description: "SteelSeries Arctis Nova 7 Wireless Multi-Platform Gaming Headset — Neodymium Magnetic Drivers — 2.4GHz + Mixable Bluetooth — 38Hr USB-C Battery — ClearCast Gen2 AI Mic — PC, PS5, Switch, VR, Mobile. ",
        category: "headsets",
        features: [
            "Lossless 2.4GHz Wireless Connection",
            "DUAL AUDIO STREAMS — Connect your mobile device directly for on-the-go audio or mix in calls or music with your game audio.when at home.",
            "38-HR BATTERY LIFE — Quickly jump back in with USB-C Fast Charge, giving 6 hours of play after a 15 min charge",
            "MULTI-PLATFORM WIRELESS — Instant, lossless wireless on your PC, PlayStation, Switch or tablet with a portable USB-C dongle (USB-C to USB-A cable also included).",
            "360° SPATIAL AUDIO — Hear everything from every direction for full immersion and situational awareness; compatible with Tempest 3D Audio."
        ],
        specs: {
            brand: "SteelSeries",
            model: "Arctis Nova 7",
            connectivity: "Wireless (2.4GHz)",
            dimensions: "200 x 168 x 87 mm",
            weight: "324g"
        },
        images: ["img/products/arctisnova7.png"],
        badge: "sales"
    },
{
        id: 15,
        name: "SteelSeries Arctis 7P+ Wireless Gaming Headset",
        price: 199.99,
        description: "Lossless 2.4 GHz – 30 Hour Battery Life – USB-C – 3D Audio – For PS5, PS4, PC, Mac, Android and Switch - White. ",
        category: "headsets",
        features: [
            "Headphone Frequency Response 20–20000 Hz. Wireless Range 40 ft, 12 m.Headphones fit type:On-Ear.Microphone Frequency Response 100–6500 Hz. Neodymium Drivers-1.5 inch",
            "Designed for PlayStation with Tempest 3D Audio on PS5 and award-winning Arctis sound to hear every detail for the competitive advantage.",
            "Multi-platform USB-C dongle with low latency 2.4Ghz wireless adds the flexibility to swap between systems quickly and seamlessly. (USB-A adapter included)",
            "Improved 30-hour battery outlasts even your longest gaming sessions plus 15 min quick charge for 3 hours usage..",
            "Upgraded support for the latest USB-C charging standard."
        ],
        specs: {
            brand: "SteelSeries",
            model: "Arctis 7P+",
            connectivity: "Wireless (2.4GHz)",
            dimensions: "207 x 210 x 53 mm",
            weight: "454g"
        },
        images: ["img/products/artis7p.png"],
        badge: "Hot"
    },
{
        id: 16,
        name: "ASUS ROG Fusion II 500 Gaming Headset",
        price: 277.99,
        description: "AI Beamforming Mic, Noise-canceling AI Mic, 7.1 Surround Sound, Hi-Res ESS 9280 Quad DAC, Game Chat, 3.5mm, USB-C. ",
        category: "headsets",
        features: [
            "Ai NOISE CANCELLING MIC - The ROG Fusion II 500 gaming headset offers beamforming Mic with Ai Noise Cancelation and Game Chat volume control provide impeccable in-game communication. The Fusion II 500 uses a concealed Ai Beamforming Mic to provide high-quality voice comms in comfort & style.",
            "HIGH SNR POSITIONAL AUDIO - Designed for RPG and FPS gaming, an unprecedented 130 dB SNR ― a spec unattainable by single DAC headsets",
            "VIRTUAL 7.1 SURROUND SOUND - Advanced virtual 7.1 surround sound optimizes audio in any game for positional audio.",
            "GAME CHAT VOLUME CONTROL - Game Chat volume control lets you prioritize and adjust the volume of in-game audio or voice chats.",
            "3.5mm jack, USB-C and USB-A connectivity ensures full compatibility with PCs, Macs, PlayStation 4 and 5, Nintendo Switch, and Xbox One."
        ],
        specs: {
            brand: "ASUS",
            model: "ROG Fusion II 500",
            connectivity: "Wired (USB-C, 3.5mm)",
            dimensions: "241 x 211 x 114 mm",
            weight: "300g"
        },
        images: ["img/products/fusionII500.png"],
        badge: "Best Seller"
    },

    {
        id: 17,
        name: "Sony Dualshock 4 Wireless Controller ",
        price: 59.99,
        description: "Wireless Controller for PS4, Remote Control Compatible with Playstation 4/PS4 Slim/PS4 Pro/Windows PC. ",
        category: "controllers",
        features: [
            "Sony PlayStation dualshock 4 PS4 wireless Controller (2nd generation) - exclusive Red crystal Edition.",
            "The feel, shape and sensitivity of the dualshock 4's analog sticks and trigger Buttons have been enhanced to offer players absolute control for all games on PlayStation 4.",
            "The addition of the share button makes sharing your greatest gaming moments as Easy as push of a button. Upload gameplay videos and screenshots directly form your system or live-stream.",
           
        ],
        specs: {
            brand: "PlayStation",
            model: "DualShock 4",
            connectivity: " Wireless (Bluetooth)",
            dimensions: "77 x 201 x 177 mm",
            weight: "300g"
        },
        images: ["img/products/ps4red.png"],
        badge: null
    },
    
    {
        id: 18,
        name: "Xbox one Wireless Controller ",
        price: 62.99,
        description: "Experience the enhanced comfort and feel of the new Xbox Wireless Controller, featuring a sleek, streamlined design and textured grip. Enjoy custom button mapping and up to twice the wireless range. ",
        category: "controllers",
        features: [
            "Compatible with Xbox One X, Xbox One S, Xbox One, Windows 10.",
            "Includes Bluetooth technology for gaming on Windows 10 PCs and tablets.",
            "Stay on target with textured grip.",
            "Get up to twice the wireless range compared to previous Xbox One controllers (tested using the Xbox One S console)",
            "Plug in any compatible headset with the 3.5mm stereo headset jack."
           
        ],
        specs: {
            brand: "Xbox",
            model: "Xbox Wireless Controller",
            connectivity: " Wireless (Bluetooth)",
            dimensions: "177 x 74 x 178 mm",
            weight: "280g"
        },
        images: ["img/products/xbox1.png"],
        badge: null
    },

    {
        id: 19,
        name: "Xbox Elite Series 2 Gaming Controller ",
        price: 199.99,
        description: "Experience the enhanced comfort and feel of the new Xbox Elite Series 2 Gaming Wireless Controller, featuring a sleek, streamlined design and textured grip. Enjoy custom button mapping and up to twice the wireless range. ",
        category: "controllers",
        features: [
            "Extended Playtime & Rapid Charging: Equipped with a 40-hour rechargeable battery and energy-efficient design.",
            "dominate marathon sessions without interruption. The USB-C charging dock ensures quick power-ups, keeping you ready for action.",
            "Ultimate Customization Toolkit: Personalize every detail with 6 swappable thumbstick toppers (standard, tall, wide dome), 4 ergonomic paddles, and 2 magnetic D-pads. Fine-tune stick tension with the included tool for precision aiming and movement.",
            "Seamless Multi-Platform Connectivity: Pair effortlessly across Xbox Series X/S, Xbox One, Windows PCs, and mobile devices via Bluetooth or wired USB-C.",
            "On-Device Profile Management: Store 3 personalized control layouts directly on the controller—adjust button mapping, sensitivity, and trigger zones via the companion app. Toggle profiles mid-game with a dedicated switch for adaptive playstyles."
           
        ],
        specs: {
            brand: "Xbox",
            model: "Xbox Wireless Controller",
            connectivity: " Wireless (Bluetooth)",
            dimensions: "190 x 102 x 102 mm",
            weight: "300g"
        },
        images: ["img/products/elites2.png"],
        badge: null       
    },

    {
        id: 20,
        name: "Aerox 5 Wireless Gaming Mouse",
        price: 77.99,
        description: "Ultra Lightweight Super-Fast Mouse with AquaBarrier™ ",
        category: "mice",
        features: [
            "STUNNING RGB — Radiant 3-zone PrismSync RGB shines in 16.8 million configurable colors.",
            "ULTRA LIGHTWEIGHT — Purposefully designed holey shell reduces weight to 74g for effortless, fast gameplay.",
            "QUABARRIER™ — Mouse interiors are shielded from water splashes, dust, and dirt, technology rated IP54.",
            "9 PROGRAMMABLE BUTTONS — Natural comfort with fully customizable buttons which include a side panel and an up/down flick switch.",
            "PERFORMANCE TO OUTLAST YOU — Extensive 180-hour battery life enabled by lag-free Quantum 2.0 Wireless technology with 2.4GHz for gaming and Bluetooth 5.0 connection",
            "NEXT-GEN SWITCHES — Golden Micro IP54 switches last longer than a lifetime for crispy clicks, with added dust and water resistance",
            "PIXEL-PERFECT ACCURACY — Great TrueMove Air optical gaming sensor co-developed with PixArt"
        ],
        specs: {
            brand: "SteelSeries",
            model: "Aerox 5 Wireless",
            connectivity: " Wireless (Bluetooth)",
            dimensions: "145 x 68 x 42 mm",
            weight: "65g"
        },
        images: ["img/products/aerox5.png"],
        badge: null       
    },

    {
        id: 21,
        name: "HyperX Alloy Origins Core Wired Gaming Mechanical Keyboard",
        price: 66.99,
        description: " Compact Tenkeyless HyperX Red Switch with RGB Back Lighting for PC, PS5 PS4 Xbox Series X|S & Xbox One",
        category: "mice",
        features: [
            "HyperX mechanical red switches .",
            "Full aircraft-grade aluminum body.",
            "Double shot PBT keycaps with side-printed secondary functions.",
            "RGB backlit keys with radiant lighting effects.",
            "Advanced customization with HyperX NGENUITY software. ",
            "Three adjustable keyboard angles and detachable USB-C cable.",
            "Game Mode, 100% anti-ghosting, and N-key rollover functionalities. "
        ],
        specs: {
            brand: "HyperX",
            model: "Alloy Origins Core",
            connectivity: " Wired (USB-C)",
            dimensions: "574 x 178 x 71 mm",
            weight: "862g"
        },
        images: ["img/products/alloy.png"],
        badge: null       
    },

    {
        id: 22,
        name: "SteelSeries Apex Pro TKL Mechanical Gaming Keyboard",
        price: 219.99,
        description: "SteelSeries Apex Pro OmniPoint 3.0 HyperMagnetic Switches — Adjustable Actuation — Rapid Trigger — Game-Ready Presets — Protection Mode — Rapid Tap/SOCD — RGB — PBT Keycaps — USB-C",
        category: "keyboards",
        features: [
            "FULLY CUSTOMIZABLE & STUPIDLY FAST with OmniPoint 2.0 Adjustable HyperMagnetic switches.",
            "WORLD’S FASTEST KEYBOARD — 20x faster actuation, 11x faster response than traditional mechanical keyboards.",
            "RAPID TRIGGER — Eradicate latency arising from the physical movement of the switch through dynamic activation and deactivation of keys based on travel distance rather than a fixed point in the key travel.",
            "ULTIMATE CONTROL — 40 levels of per-key actuation (0.1 – 4.0mm) – set WASD for light, ultra-fast movements and set ability keys to deep presses to avoid accidentally triggering specials.",
            "2-IN-1 ACTION KEYS — Program two different actions to the same key, such as walking with a light touch or sprinting with a deep press. ",
            "60% form factor. Full-size functionality. Premium aluminum top plate. Detachable USB-C.",
            
        ],
        specs: {
            brand: "SteelSeries",
            model: "Apex Pro TKL",
            connectivity: " Wired (USB-C)",
            dimensions: "337 x 229 x 57 mm",
            weight: "544g"
        },
        images: ["img/products/apexpro.png"],
        badge: "Best Seller"       
    },

    {
        id: 23,
        name: "SteelSeries Apex 9 TKL TKL Mechanical Gaming Keyboard",
        price: 109.99,
        description: "SteelSeries Apex Pro OmniPoint 3.0 HyperMagnetic Switches — Adjustable Actuation — Rapid Trigger — Game-Ready Presets — Protection Mode — Rapid Tap/SOCD — RGB — PBT Keycaps — USB-C",
        category: "keyboards",
        features: [
            "Custom-built OptiPoint optical switches for faster actuation and zero debounce.",
            "Toggle the keystroke actuation point from gaming-grade 1mm to more deliberate 1.5mm.",
            "Fully swappable switches for customization and longevity.",
            "Tenkeyless form factor for a streamlined gaming setup and more space on your desktop for mice swipes.",
            "Series 5000 aluminum top plate, identical to metal in combat jets, enhances structural stability and durability. ",
           
            
        ],
        specs: {
            brand: "SteelSeries",
            model: "Apex 9 TKL",
            connectivity: " Wired (USB-C)",
            dimensions: "337 x 229 x 57 mm",
            weight: "544g"
        },
        images: ["img/products/apex.png"],
        badge: "On Sale"       
    },

    {
        id: 24,
        name: "Arena 9",
        price: 679.99,
        description: "Immersive 5.1 Gaming Speaker System with Reactive Illumination",
        category: "speakers",
        features: [
            "True 5.1 surround sound including a 6.5\" subwoofer for immersive gaming over a single USB connection.",
            "Two wireless rear speakers for connectivity between front and back of the room without cables.",
            "Robust and precise soundscape with a two-way speaker design, featuring organic fiber woofers and silk dome tweeters.",
            "Illuminated speakers with 16.8 million RGB colors that react to the onscreen action and music.",
            "Easily connect to PC, PlayStation, and Mac and more with USB, Bluetooth, optical, or 3.5mm Aux, and wired headset. ",
            "Informative OLED screen with volume controls, 5.1 Upmix, headset toggle, LED controls, BT pairing, EQ, and system functions",
            "Customize audio with the 10-band Parametric EQ with Acoustical Echo Cancellation from Sonar Software, and more"
           
            
        ],
        specs: {
            brand: "SteelSeries",
            model: "Arena 9",
            connectivity: " Optical",
            dimensions: "126 x 104 x 196 mm",
            weight: "15kg"
        },
        images: ["img/products/arena9.png"],
        badge: "Best Seller"       
    },

    {
        id: 25,
        name: "Logitech PRO",
        price: 144.99,
        description: "Engineered to win. Inspired by the classic, simple G100 and G100s design made famous by top esports pros. Equipped with PMW3366 sensor for professional precision and zero smoothing/filtering/acceleration.",
        category: "mice",
        features: [
            "Advanced PMW3366 optical gaming sensor delivers exceptional tracking accuracy at any hand speed for pixel precise targeting and high speed maneuvers across the entire 200 to 12,000 DPI range.",
            "Metal Spring Button Tensioning System designed for ultra-consistent and reliable click performance at the highest level of competition. 6 Programmable Buttons.",
            "Customizable with up to 16.8 million RGB lighting colors to match your style, team colors and setup plus synchronize with other Logitech G gaming gear.",
            "Six programmable buttons and onboard memory make it easy to setup and store one-trigger custom commands for your favorite games Physical specifications-Height: 116.6 mm Width: 62.15 mm Depth: 38.2 mm.",            
        ],
        specs: {
            brand: "Logitech",
            model: "PRO",
            connectivity: " Wired(USB)",
            dimensions: "116 x 62 x 38 mm",
            weight: "84.7g"
        },
        images: ["img/products/gprom.png"],
        badge: "Best Seller"       
    },

     {
        id: 26,
        name: "Razer Leviathan V2",
        price: 99.99,
        description: "Razer Leviathan V2 X PC Soundbar with Full-Range Drivers - Compact Design - Chroma RGB - USB Type C Power and Audio Delivery - Bluetooth 5.0 - for PC, Laptop, Smartphones, Tablets & Nintendo Switch",
        category: "speakers",
        features: [
            "PC Soundbar with Full-Range Drivers: Armed with two full-range drivers and two passive radiators, the Leviathan V2 X delivers a riveting audio experience across all your entertainment.",
            "Compact Desktop Form Factor: The most compact soundbar in our Leviathan V2 range fits perfectly beneath your monitor for a clutter-free desktop.",
            "USB Type C Power and Audio Delivery: Powered by a single USB Type C cable to deliver dynamic audio with a volume output of up to 90Db and enables for an easy setup.",
            "Bluetooth 5.0: Enjoy smooth, stutter-free sound with a low-latency Bluetooth connection, as you switch seamlessly between your PC and your preferred mobile device that’s conveniently paired via the Razer Audio App.",
            "Powered by Razer Chroma RGB: With 14 lighting zones, countless patterns, dynamic in-game lighting effects—experience full RGB customization and deeper immersion with the world’s largest lighting ecosystem for gaming devices. ",
            "Razer Audio App and Razer Synapse: From customizing RGB lighting to toggling between audio devices, tweak the soundbar to best suit your needs with software designed to give you more control.",           
        ],
        specs: {
            brand: "Razer",
            model: "Leviathan V2",
            connectivity: " USB Type C, Bluetooth",
            dimensions: "126 x 104 x 196 mm",
            weight: "898g"
        },
        images: ["img/products/lv2.png"],
        badge: "Hot"       
    },

    {
        id: 27,
        name: "HyperX Cloud II",
        price: 89.99,
        description: "HyperX Cloud II - Gaming Headset, 7.1 Surround Sound, Memory Foam Ear Pads, Durable Aluminum Frame, Detachable Microphone, Works with PC, PS5, PS4, Xbox Series X|S, Xbox",
        category: "headsets",
        features: [
            "2.4GHz Wireless and up to 30 hour battery.",
            "DTS Headphone:X Spatial Audio.",
            "Signature HyperX Comfort.",
            "Durable, aluminum frame.",
            "Compatibility: PC, PS5™, PS4™. ",
              
        ],
        specs: {
            brand: "HyperX",
            model: "Cloud II",
            connectivity: " Bluetooth",
            dimensions: "99 x 149 x 190 mm",
            weight: "293g"
        },
        images: ["img/products/cloud2.png"],
        badge: null       
    },

     {
        id: 28,
        name: "HyperX Cloud III",
        price: 179.99,
        description: "HyperX Cloud III - Gaming Headset, 7.1 Surround Sound, Memory Foam Ear Pads, Durable Aluminum Frame, Detachable Microphone, Works with PC, PS5, PS4, Xbox Series X|S, Xbox",
        category: "headsets",
        features: [
            "Up to 120 Hours of Battery Life.",
            "2.4GHz Wireless, Bluetooth, or Instant Pair.",
            "Signature HyperX Comfort.",
            "Angled 53 mm Drivers.",
            "Compatibility: PC, PS5™, PS4™, Switch™, Xbox Series X|S, Xbox One, Mobile.",
              
        ],
        specs: {
            brand: "HyperX",
            model: "Cloud III",
            connectivity: " Wireless ,Bluetooth",
            dimensions: "99 x 149 x 190 mm",
            weight: "293g"
        },
        images: ["img/products/cloud2.png"],
        badge: "Best Seller"     
    },

    {
        id: 29,
        name: "MSI DS502 Gaming Headset",
        price: 179.99,
        description: "MSI DS502 Gaming Headset, Enhanced Virtual 7.1 Surround Sound, Ergonimic Design, Omnidirectional Microphone, Intelligent Vibration System, Red LED Lighting",
        category: "headsets",
        features: [
            "Two Enhanced 40mm drivers for quality audio.",
            "Improved noise reduction.",
            "Xear Living technology: enhanced virtual 7.1 surround sound.",
            "7.1 Virtual speaker shifter.",
            "Environment reverb.",
            "Ergonomic design with soft ear cushions.",
              
        ],
        specs: {
            brand: "MSI",
            model: "DS502",
            connectivity: " Wired (USB)",
            dimensions: "260 x 344 x 110 mm",
            weight: "300g"
        },
        images: ["img/products/ds502.png"],
        badge: "Best Seller"     
    },

    {
        id: 30,
        name: "ASUS Optical Gaming Mouse - ROG Gladius II Origin Limited Edition ",
        price: 179.99,
        description: "Ergonomic Right-handed PC Gaming Mouse for FPS Games | 12000 DPI Optical Sensor | Aura Sync RGB, ROG Armoury II | Pink",
        category: "mice",
        features: [
            "Ergonomic wired optical gaming mouse optimized for FPS.",
            "featuring Aura Sync.",
            "Advanced 12000 DPI optical sensor.",
            "fast and precise tracking.",              
        ],
        specs: {
            brand: "ASUS",
            model: "Gladius II Origin",
            connectivity: " Wired (USB)",
            dimensions: "125 x 67 x 45 mm",
            weight: "270g"
        },
        images: ["img/products/gladius2.png"],
        badge: null    
    },

    {
        id: 31,
        name: "MSI - MAG32CQ6PF 32\" Curved ",
        price: 239.99,
        description: "MSI - MAG32CQ6PF 32\" Curved Wild QHD 180Hz 0.5ms Adaptive Sync Gaming Monitor withHDR400(DisplayPort, HDMI, ) - Black",
        category: "monitors",
        features: [
            "Rapid VA Panel  Provides 0.5ms (GtG, Min.) response time, optimizes screen colors and brightness.",
            "180Hz Refresh Rate  Respond faster with smoother frames.",
            "0.5ms (GtG, Min.) Response Time  Eliminate screen tearing and choppy frame rates.",
            "AI Vision  The new AI Vision technology can not only reveal details in dark areas but also enhance overall brightness and saturate colors..",       
            "AMD FreeSync™ Technology - Tear free, stutter free, fluid gaming.",       
            "Less Blue Light  Use a software solution to reduce the light emission in the blue-violet region of the blue light spectrum",
        ],
        specs: {
            brand: "MSI",
            model: "MAG32CQ6PF",
            connectivity: " DisplayPort, HDMI",
            dimensions: "250 x 708 x 507 mm",
            weight: "7kg"
        },
        images: ["img/products/mac32cq6pf.png"],
        badge: "Best Seller"    
    },

    {
        id: 32,
        name: "49\" Odyssey G9 G95C DQHD "  ,    
        price: 1299.99,
        description: "MSI - MAG32CQ6PF 32\" Curved Wild QHD 180Hz 0.5ms Adaptive Sync Gaming Monitor withHDR400(DisplayPort, HDMI, ) - Black",
        category: "monitors",
        features: [
            "49\" 1000R curved screen & Dual QHD resolution for full vision.",
            "240Hz refresh, 1ms(GtG)* & AMD FreeSync™ Premium Pro.",
            "VESA Display HDR 1000 & 1,000,000:1 contrast ratio.",
            "CoreSync & CoreLighting+ improve colors.",              ],
        specs: {
            brand: "Samsung",
            model: "Odyssey G9 G95C",
            connectivity: " DisplayPort, HDMI",
            dimensions: "416 x 1147 x 537 mm",
            weight: "14kg"
        },
        images: ["img/products/odysseyg9.png"],
        badge: "Hot"    
    },

    {
        id: 33,
        name: "HyperX Cloud Stinger 2 - Gaming Headset "  ,    
        price: 159.99,
        description: "HyperX Cloud Stinger 2 – Gaming Headset, DTS Headphone:X Spatial Audio, Lightweight Over-Ear Headset with mic, Swivel-to-Mute Function, 50mm Drivers, PC Compatible",
        category: "headsets",
        features: [
            "Immersive DTS Headphone:X Spatial Audio.",
            "HyperX signature comfort.",
            "Superior sound.",
            "Adjustable rotating earcups.",  
            "Compatibility: PC"            ],
        specs: {
            brand: "HyperX",
            model: "Cloud Stinger 2",
            connectivity: " Wired (3.5mm)",
            dimensions: "266 x 246 x 76 mm",
            weight: "286g"
        },
        images: ["img/products/stinger2.png"],
        badge: "Best Seller"    
    },
    {
        id: 34,
        name: "Razer Basilisk V3 Pro "  ,    
        price: 159.99,
        description: "Razer Basilisk V3 Pro 35K Wireless Gaming Mouse: HyperScroll Tilt Wheel - 35K DPI Optical Sensor Gen 2-13 Customizable Controls - Chroma RGB - Optical Switches Gen 3 - Up to 140 Hr Battery - Black",
        category: "mice",
        features: [
            "Razer™ HyperScroll Tilt Wheel.",
            "13-Zone Chroma Lighting with Full Underglow.",
            "Iconic Ergonomic Form with 10+1 Programmable Buttons.",
                  ],
        specs: {
            brand: "Razer",
            model: "Basilisk V3 Pro",
            connectivity: " Wireless",
            dimensions: "176 x 118 x 72 mm",
            weight: "139g"
        },
        images: ["img/products/bv3.png"],
        badge: null    
    },
    {
        id: 35,
        name: "Razer BlackWidow Pro "  ,    
        price: 249.99,
        description: "Razer BlackWidow V4 Pro Wired Mechanical Gaming Keyboard: Yellow Switches Linear & Silent - Doubleshot ABS Keycaps - Command Dial - Chroma RGB - Magnetic Wrist Rest - Snap Tap",
        category: "keyboards",
        features: [
            "Razer mechanical switch prcision excecution.",
            "Immersive underglow and RGB per key lighting.",
            "Razer commnad dail and 8 dedicated macro keys.",
            "Magnetic plush leatherette wirst rest with underglow RGB",
            "Razer Synapse 3 for full customization and control.",
            "USB-C connectivity for fast and reliable performance.",
                  ],
        specs: {
            brand: "Razer",
            model: "BlackWidow V4 Pro",
            connectivity: " Wired (USB-C)",
            dimensions: "466 x 153 x 44 mm",
            weight: "1.6kg"
        },
        images: ["img/products/bwv4.png"],
        badge: null    
    },
    {
        id: 36,
        name: "GIGABYTE G27FC 27\" Curved Gaming Monitor "  ,    
        price: 249.99,
        description: "GIGABYTE G27FC A (27\" 165Hz 1080P Curved Gaming Monitor, 1920 x 1080 VA 1500R Display, 1ms (MPRT) Response Time, 91% DCI-P3, FreeSync Premium, 1x Display Port 1.2, 2x HDMI 1.4)",
        category: "monitors",
        features: [
            "27” 1920x1080 VA Display with 165Hz Refresh Rate, 1ms (MPRT) Response Time Native 1500R Curvature.",
            "Smooth Gameplay with AMD FreeSync Premium Pro.",
            "Studio Grade 127% sRGB and 91% DCI-P3 Color Gamut.",
            "GIGABYTE Classic Tactical Features with OSD Sidekick",
            "GIGABYTE auto-update.",
           
                  ],
        specs: {
            brand: "GIGABYTE",
            model: "G27FC",
            connectivity: "DisplayPort, HDMI",
            dimensions: "369 x 614 x 73 mm",
            weight: "6.4kg"
        },
        images: ["img/products/g27fc.png"],
        badge: null    
    },
     {
        id: 37,
        name: "GIGABYTE G27FC 34\" Curved Gaming Monitor "  ,    
        price: 499.99,
        description: "GIGABYTE G34WQC A 34\" 144Hz Ultra-Wide Curved Gaming Monitor, 3440 x 1440 VA 1500R , 1ms (MPRT) Response Time, 90% DCI-P3, VESA Display HDR400, FreeSync Premium",
        category: "monitors",
        features: [
            "34” 3440x1440 VA Display Gaming Monitor.Viewing Angle is 178° (H) / 178° (V).Specific uses for product - Business.",
            "144Hz Refresh Rate, 1ms (MPRT) Response Time, Supports Freesync Premium.",
            "Immersive Ultrawide Aspect Ratio 21:9.",
            "Native 1500R Curvature",
            "Smooth Gameplay with AMD FreeSync Premium.",
           
                  ],
        specs: {
            brand: "GIGABYTE",
            model: "G34WQC",
            connectivity: "DisplayPort, HDMI",
            dimensions: "235 x 808 x 489 mm",
            weight: "8.4kg"
        },
        images: ["img/products/g34wqc.png"],
        badge: null    
    },






    


];