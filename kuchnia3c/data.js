var APP_DATA = {
  "scenes": [
    {
      "id": "0-w360-p1",
      "name": "w360-p1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.41357451901899,
          "pitch": 0.1918249295872716,
          "rotation": 0,
          "target": "1-w360-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-w360-p2",
      "name": "w360-p2",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.401763856521626,
          "pitch": 0.19099302779589777,
          "rotation": 0,
          "target": "0-w360-p1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "kuchnia3",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
