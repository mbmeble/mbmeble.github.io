var APP_DATA = {
  "scenes": [
    {
      "id": "0-prawy360",
      "name": "prawy360",
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
          "yaw": -0.8747995662734773,
          "pitch": 0.19109165822393592,
          "rotation": 0,
          "target": "1-prawy360wnetrz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-prawy360wnetrz",
      "name": "prawy360wnetrz",
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
          "yaw": -0.8372265533665484,
          "pitch": 0.20080027874345419,
          "rotation": 0,
          "target": "0-prawy360"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "lewy360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
