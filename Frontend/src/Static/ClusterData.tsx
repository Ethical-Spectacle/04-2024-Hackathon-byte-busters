import { clusterRowProps } from "../types/dataProps";

export const clusterData:clusterRowProps[] = [
  {
    "row_id": 1,
    "cooling_type": "row_level",
    "cluster_level_cooling": [
      1,
      2,
      3,
      3
    ],
    "clusters_status": [
      {
        "cluster_id": 1,
        "cluster_type": "CPU",
        "cooling_type": "cluster_level",
        "rack_level_cooling": [
          1,
          2,
          4
        ],
        "col_status": [
          {
            "cluster_id": 1,
            "col_id": 1,
            "temperature": 52.84,
            "fan_speed": 60
          },
          {
            "cluster_id": 1,
            "col_id": 2,
            "temperature": 40.66,
            "fan_speed": 50
          },
          {
            "cluster_id": 1,
            "col_id": 3,
            "temperature": 32.57,
            "fan_speed": 40
          },
          {
            "cluster_id": 1,
            "col_id": 4,
            "temperature": 51.84,
            "fan_speed": 60
          }
        ]
      },
      {
        "cluster_id": 2,
        "cluster_type": "CPU",
        "cooling_type": "cluster_level",
        "rack_level_cooling": [
          1,
          4,
          5
        ],
        "col_status": [
          {
            "cluster_id": 2,
            "col_id": 1,
            "temperature": 37.78,
            "fan_speed": 50
          },
          {
            "cluster_id": 2,
            "col_id": 2,
            "temperature": 31.1,
            "fan_speed": 40
          },
          {
            "cluster_id": 2,
            "col_id": 3,
            "temperature": 28.19,
            "fan_speed": 40
          },
          {
            "cluster_id": 2,
            "col_id": 4,
            "temperature": 47.61,
            "fan_speed": 50
          },
          {
            "cluster_id": 2,
            "col_id": 5,
            "temperature": 53.2,
            "fan_speed": 60
          }
        ]
      },
      {
        "cluster_id": 3,
        "cluster_type": "CPU",
        "cooling_type": "cluster_level",
        "rack_level_cooling": [
          1,
          3,
          4
        ],
        "col_status": [
          {
            "cluster_id": 3,
            "col_id": 1,
            "temperature": 45.53,
            "fan_speed": 50
          },
          {
            "cluster_id": 3,
            "col_id": 2,
            "temperature": 27.32,
            "fan_speed": 0
          },
          {
            "cluster_id": 3,
            "col_id": 3,
            "temperature": 44.33,
            "fan_speed": 50
          },
          {
            "cluster_id": 3,
            "col_id": 4,
            "temperature": 45.35,
            "fan_speed": 50
          }
        ]
      }
    ]
  },
  {
    "row_id": 2,
    "cooling_type": "row_level",
    "cluster_level_cooling": [
      1,
      2,
      3
    ],
    "clusters_status": [
      {
        "cluster_id": 1,
        "cluster_type": "CPU",
        "cooling_type": "cluster_level",
        "rack_level_cooling": [
          2,
          3,
          4
        ],
        "col_status": [
          {
            "cluster_id": 1,
            "col_id": 1,
            "temperature": 30.88,
            "fan_speed": 40
          },
          {
            "cluster_id": 1,
            "col_id": 2,
            "temperature": 57.52,
            "fan_speed": 60
          },
          {
            "cluster_id": 1,
            "col_id": 3,
            "temperature": 49.29,
            "fan_speed": 50
          },
          {
            "cluster_id": 1,
            "col_id": 4,
            "temperature": 45.26,
            "fan_speed": 50
          }
        ]
      },
      {
        "cluster_id": 2,
        "cluster_type": "CPU",
        "cooling_type": "cluster_level",
        "rack_level_cooling": [
          1,
          3,
          4
        ],
        "col_status": [
          {
            "cluster_id": 2,
            "col_id": 1,
            "temperature": 39.18,
            "fan_speed": 50
          },
          {
            "cluster_id": 2,
            "col_id": 2,
            "temperature": 30.08,
            "fan_speed": 40
          },
          {
            "cluster_id": 2,
            "col_id": 3,
            "temperature": 40.52,
            "fan_speed": 50
          },
          {
            "cluster_id": 2,
            "col_id": 4,
            "temperature": 54.58,
            "fan_speed": 60
          },
          {
            "cluster_id": 2,
            "col_id": 5,
            "temperature": 29.79,
            "fan_speed": 40
          }
        ]
      },
      {
        "cluster_id": 3,
        "cluster_type": "CPU",
        "cooling_type": "server_level",
        "rack_level_cooling": [
          2,
          4
        ],
        "col_status": [
          {
            "cluster_id": 3,
            "col_id": 1,
            "temperature": 31.37,
            "fan_speed": 40
          },
          {
            "cluster_id": 3,
            "col_id": 2,
            "temperature": 39.2,
            "fan_speed": 50
          },
          {
            "cluster_id": 3,
            "col_id": 3,
            "temperature": 29.65,
            "fan_speed": 40
          },
          {
            "cluster_id": 3,
            "col_id": 4,
            "temperature": 50.1,
            "fan_speed": 60
          }
        ]
      }
    ]
  },
  {
    "row_id": 3,
    "cooling_type": "row_level",
    "cluster_level_cooling": [
      1,
      2,
      3,
      3
    ],
    "clusters_status": [
      {
        "cluster_id": 1,
        "cluster_type": "CPU",
        "cooling_type": "cluster_level",
        "rack_level_cooling": [
          1,
          2,
          3,
          5,
          6,
          8
        ],
        "col_status": [
          {
            "cluster_id": 1,
            "col_id": 1,
            "temperature": 53.83,
            "fan_speed": 60
          },
          {
            "cluster_id": 1,
            "col_id": 2,
            "temperature": 56.35,
            "fan_speed": 60
          },
          {
            "cluster_id": 1,
            "col_id": 3,
            "temperature": 59.41,
            "fan_speed": 60
          },
          {
            "cluster_id": 1,
            "col_id": 4,
            "temperature": 33.51,
            "fan_speed": 40
          },
          {
            "cluster_id": 1,
            "col_id": 5,
            "temperature": 59.5,
            "fan_speed": 60
          },
          {
            "cluster_id": 1,
            "col_id": 6,
            "temperature": 43.6,
            "fan_speed": 50
          },
          {
            "cluster_id": 1,
            "col_id": 7,
            "temperature": 34.13,
            "fan_speed": 40
          },
          {
            "cluster_id": 1,
            "col_id": 8,
            "temperature": 35.73,
            "fan_speed": 50
          }
        ]
      },
      {
        "cluster_id": 2,
        "cluster_type": "CPU",
        "cooling_type": "cluster_level",
        "rack_level_cooling": [
          1,
          4,
          5
        ],
        "col_status": [
          {
            "cluster_id": 2,
            "col_id": 1,
            "temperature": 37.04,
            "fan_speed": 50
          },
          {
            "cluster_id": 2,
            "col_id": 2,
            "temperature": 32.87,
            "fan_speed": 40
          },
          {
            "cluster_id": 2,
            "col_id": 3,
            "temperature": 28.34,
            "fan_speed": 40
          },
          {
            "cluster_id": 2,
            "col_id": 4,
            "temperature": 50.09,
            "fan_speed": 60
          },
          {
            "cluster_id": 2,
            "col_id": 5,
            "temperature": 57.39,
            "fan_speed": 60
          }
        ]
      },
      {
        "cluster_id": 3,
        "cluster_type": "CPU",
        "cooling_type": "cluster_level",
        "rack_level_cooling": [
          1,
          2,
          3,
          4,
          7,
          8
        ],
        "col_status": [
          {
            "cluster_id": 3,
            "col_id": 1,
            "temperature": 50.58,
            "fan_speed": 60
          },
          {
            "cluster_id": 3,
            "col_id": 2,
            "temperature": 58.32,
            "fan_speed": 60
          },
          {
            "cluster_id": 3,
            "col_id": 3,
            "temperature": 54.33,
            "fan_speed": 60
          },
          {
            "cluster_id": 3,
            "col_id": 4,
            "temperature": 51.82,
            "fan_speed": 60
          },
          {
            "cluster_id": 3,
            "col_id": 5,
            "temperature": 32.19,
            "fan_speed": 40
          },
          {
            "cluster_id": 3,
            "col_id": 6,
            "temperature": 29.82,
            "fan_speed": 40
          },
          {
            "cluster_id": 3,
            "col_id": 7,
            "temperature": 46.15,
            "fan_speed": 50
          },
          {
            "cluster_id": 3,
            "col_id": 8,
            "temperature": 55.89,
            "fan_speed": 60
          }
        ]
      }
    ]
  }
]