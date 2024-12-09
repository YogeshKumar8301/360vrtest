var APP_DATA = {
  "scenes": [
    {
      "id": "0-final-360-vr-02",
      "name": "Final 360 vr 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 3.1362087692204703,
        "pitch": -0.018465875964627898,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.976898567874791,
          "pitch": -0.27923600741054244,
          "rotation": 0,
          "target": "1-final-360-vr"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6122707977154507,
          "pitch": -0.2780323183364217,
          "title": "Guest Bedroom",
          "text": "Light"
        }
      ]
    },
    {
      "id": "1-final-360-vr",
      "name": "Final 360 vr",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": -0.0054061349406815395,
        "pitch": -0.07008457974132476,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.0634717220539045,
          "pitch": -0.28687206893916084,
          "rotation": 0,
          "target": "0-final-360-vr-02"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3352373273496383,
          "pitch": -0.49655664305753433,
          "title": "Master Bedroom",
          "text": "Dark"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
