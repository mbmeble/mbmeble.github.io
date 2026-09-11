var APP_DATA = {
  "scenes": [
    {
      "id": "0-kuchnia",
      "name": "kuchnia",
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
          "yaw": 0.5991877319808943,
          "pitch": 0.8506952780018633,
          "rotation": 0,
          "target": "1-kuchnia-otwarte"
        },
        {
          "yaw": 1.434484250012411,
          "pitch": 0.20041832804614046,
          "rotation": 0.7853981633974483,
          "target": "2-spizarnia"
        },
        {
          "yaw": -0.5470585038720017,
          "pitch": 0.162261979303727,
          "rotation": 3.141592653589793,
          "target": "3-kuchnia-od-salonu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kuchnia-otwarte",
      "name": "kuchnia-otwarte",
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
          "yaw": -0.5730889474427254,
          "pitch": 0.11505710619613296,
          "rotation": 3.141592653589793,
          "target": "3-kuchnia-od-salonu"
        },
        {
          "yaw": 0.5307400148641452,
          "pitch": 0.850517704378305,
          "rotation": 0,
          "target": "0-kuchnia"
        },
        {
          "yaw": 1.4544433102311691,
          "pitch": 0.22184819134228206,
          "rotation": 0.7853981633974483,
          "target": "2-spizarnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-spizarnia",
      "name": "spizarnia",
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
          "yaw": 0.0942908693219291,
          "pitch": 0.07320884855529819,
          "rotation": 3.141592653589793,
          "target": "3-kuchnia-od-salonu"
        },
        {
          "yaw": -0.3297829256006537,
          "pitch": 0.28860423829052806,
          "rotation": 5.497787143782138,
          "target": "0-kuchnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kuchnia-od-salonu",
      "name": "kuchnia-od-salonu",
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
        "yaw": 0.17392948483434978,
        "pitch": 0.14972834246168354,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": 0.2845092002339502,
          "pitch": 0.16165131339813676,
          "rotation": 3.141592653589793,
          "target": "0-kuchnia"
        },
        {
          "yaw": -0.28369480793841007,
          "pitch": 0.1484973663111564,
          "rotation": 0.7853981633974483,
          "target": "2-spizarnia"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "kuchnia",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
