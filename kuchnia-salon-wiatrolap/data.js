var APP_DATA = {
  "scenes": [
    {
      "id": "0-kuchnia-czarne-uchwyty",
      "name": "kuchnia-czarne-uchwyty",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.2268104639487163,
        "pitch": 0.4158304643382067,
        "fov": 1.6144802818346875
      },
      "linkHotspots": [
        {
          "yaw": 0.6728753234065579,
          "pitch": 0.9135154557620169,
          "rotation": 0.7853981633974483,
          "target": "1-kuchnia-srebrne-uchwyty"
        },
        {
          "yaw": -0.1908445149434268,
          "pitch": 1.024545612460905,
          "rotation": 18.06415775814132,
          "target": "2-wnetrze"
        },
        {
          "yaw": -0.5720461189913912,
          "pitch": 0.2745902338801933,
          "rotation": 5.497787143782138,
          "target": "3-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kuchnia-srebrne-uchwyty",
      "name": "kuchnia-srebrne-uchwyty",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.2868304237595556,
        "pitch": 0.5501564619891983,
        "fov": 1.6144802818346875
      },
      "linkHotspots": [
        {
          "yaw": 0.687955658878959,
          "pitch": 0.9137911806754495,
          "rotation": 13.351768777756625,
          "target": "0-kuchnia-czarne-uchwyty"
        },
        {
          "yaw": -0.49683723960894177,
          "pitch": 0.25780973839507126,
          "rotation": 5.497787143782138,
          "target": "3-salon"
        },
        {
          "yaw": -0.2628857186248901,
          "pitch": 1.0191908121615825,
          "rotation": 5.497787143782138,
          "target": "2-wnetrze"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wnetrze",
      "name": "wnetrze",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.40755305699953226,
        "pitch": 0.4973178945232224,
        "fov": 1.6144802818346875
      },
      "linkHotspots": [
        {
          "yaw": -0.3596878992939345,
          "pitch": 1.0062720609238855,
          "rotation": 5.497787143782138,
          "target": "0-kuchnia-czarne-uchwyty"
        },
        {
          "yaw": -0.6493227889658488,
          "pitch": 0.2698727584867804,
          "rotation": 5.497787143782138,
          "target": "3-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salon",
      "name": "salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.39350518673567514,
          "pitch": 0.2812687965150289,
          "rotation": 0,
          "target": "0-kuchnia-czarne-uchwyty"
        },
        {
          "yaw": 1.007670430199795,
          "pitch": 0.35319994332700766,
          "rotation": 0.7853981633974483,
          "target": "4-przejcie-garaz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-przejcie-garaz",
      "name": "przejście-garaz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6582756041004654,
          "pitch": 0.3101578078498015,
          "rotation": 0.7853981633974483,
          "target": "3-salon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "kuchnia-salon-wiatrolap",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
