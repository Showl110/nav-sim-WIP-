const fs = require('fs');
const thing = {
    "limit": {
        "has_dlc": "\"Man the Guns\""
    },
    "ship_light_battery_1": {
        "abbreviation": "\"saa\"",
        "category": "ship_light_battery",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "1",
            "build_cost_ic": "90"
        },
        "multiply_stats": {
            "naval_speed": "-0.01"
        },
        "add_average_stats": {
            "lg_armor_piercing": "1"
        },
        "can_convert_from": {
            "module_category": "ship_light_battery",
            "convert_cost_ic": "60"
        },
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "ship_light_battery_2": {
        "abbreviation": "\"sab\"",
        "category": "ship_light_battery",
        "parent": "ship_light_battery_1",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "1.5",
            "build_cost_ic": "120"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        },
        "add_average_stats": {
            "lg_armor_piercing": "4"
        },
        "can_convert_from": [
            {
                "module_category": "ship_light_battery",
                "convert_cost_ic": "75"
            },
            {
                "module": "ship_light_battery_1",
                "convert_cost_ic": "45"
            }
        ],
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "ship_light_battery_3": {
        "abbreviation": "\"sac\"",
        "category": "ship_light_battery",
        "parent": "ship_light_battery_2",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "3",
            "build_cost_ic": "150"
        },
        "add_average_stats": {
            "lg_armor_piercing": "8"
        },
        "multiply_stats": {
            "naval_speed": "-0.03"
        },
        "can_convert_from": [
            {
                "module_category": "ship_light_battery",
                "convert_cost_ic": "75"
            },
            {
                "module": "ship_light_battery_2",
                "convert_cost_ic": "45"
            }
        ],
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "ship_light_battery_4": {
        "abbreviation": "\"sad\"",
        "category": "ship_light_battery",
        "parent": "ship_light_battery_3",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "4",
            "build_cost_ic": "175"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "multiply_stats": {
            "naval_speed": "-0.04"
        },
        "add_average_stats": {
            "lg_armor_piercing": "10"
        },
        "can_convert_from": [
            {
                "module_category": "ship_light_battery",
                "convert_cost_ic": "190"
            },
            {
                "module": "ship_light_battery_3",
                "convert_cost_ic": "120"
            }
        ],
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "dp_light_battery_1": {
        "abbreviation": "\"sae\"",
        "category": "dp_light_battery",
        "gui_category": "ship_light_battery",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "1",
            "anti_air_attack": "1",
            "build_cost_ic": "100"
        },
        "multiply_stats": {
            "naval_speed": "-0.01"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "add_average_stats": {
            "lg_armor_piercing": "3"
        },
        "can_convert_from": {
            "module_category": "ship_light_battery",
            "convert_cost_ic": "100"
        },
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "dp_light_battery_2": {
        "abbreviation": "\"saf\"",
        "category": "dp_light_battery",
        "gui_category": "ship_light_battery",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "1.5",
            "anti_air_attack": "2",
            "build_cost_ic": "130"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "add_average_stats": {
            "lg_armor_piercing": "4"
        },
        "can_convert_from": [
            {
                "module_category": "ship_light_battery",
                "convert_cost_ic": "85"
            },
            {
                "module": "ship_light_battery_1",
                "convert_cost_ic": "55"
            }
        ],
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "dp_light_battery_3": {
        "abbreviation": "\"sag\"",
        "category": "dp_light_battery",
        "gui_category": "ship_light_battery",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "2",
            "anti_air_attack": "3",
            "build_cost_ic": "160"
        },
        "multiply_stats": {
            "naval_speed": "-0.03"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "add_average_stats": {
            "lg_armor_piercing": "6"
        },
        "can_convert_from": [
            {
                "module_category": "ship_light_battery",
                "convert_cost_ic": "85"
            },
            {
                "module": "ship_light_battery_2",
                "convert_cost_ic": "55"
            }
        ],
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "dp_light_battery_4": {
        "abbreviation": "\"sah\"",
        "category": "dp_light_battery",
        "gui_category": "ship_light_battery",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "2.5",
            "anti_air_attack": "4",
            "build_cost_ic": "185"
        },
        "multiply_stats": {
            "naval_speed": "-0.04"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "add_average_stats": {
            "lg_armor_piercing": "8"
        },
        "can_convert_from": [
            {
                "module_category": "ship_light_battery",
                "convert_cost_ic": "200"
            },
            {
                "module": "ship_light_battery_3",
                "convert_cost_ic": "130"
            }
        ],
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "ship_heavy_battery_1": {
        "abbreviation": "\"sai\"",
        "category": "ship_heavy_battery",
        "sfx": "sfx_ui_sd_module_turret",
        "add_equipment_type": "capital_ship",
        "add_stats": {
            "hg_attack": "18",
            "build_cost_ic": "1550"
        },
        "multiply_stats": {
            "naval_speed": "-0.05"
        },
        "add_average_stats": {
            "hg_armor_piercing": "34"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "can_convert_from": {
            "module_category": "ship_heavy_battery",
            "convert_cost_ic": "700"
        },
        "critical_parts": {
            "damaged_heavy_guns": ""
        }
    },
    "ship_heavy_battery_2": {
        "abbreviation": "\"saj\"",
        "category": "ship_heavy_battery",
        "parent": "ship_heavy_battery_1",
        "sfx": "sfx_ui_sd_module_turret",
        "add_equipment_type": "capital_ship",
        "add_stats": {
            "hg_attack": "22",
            "build_cost_ic": "1650"
        },
        "multiply_stats": {
            "naval_speed": "-0.06"
        },
        "add_average_stats": {
            "hg_armor_piercing": "40"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "can_convert_from": [
            {
                "module_category": "ship_heavy_battery",
                "convert_cost_ic": "900"
            },
            {
                "module": "ship_heavy_battery_1",
                "convert_cost_ic": "600"
            }
        ],
        "critical_parts": {
            "damaged_heavy_guns": ""
        }
    },
    "ship_heavy_battery_3": {
        "abbreviation": "\"sak\"",
        "category": "ship_heavy_battery",
        "parent": "ship_heavy_battery_2",
        "sfx": "sfx_ui_sd_module_turret",
        "add_equipment_type": "capital_ship",
        "add_stats": {
            "hg_attack": "26",
            "build_cost_ic": "1750"
        },
        "multiply_stats": {
            "naval_speed": "-0.07"
        },
        "add_average_stats": {
            "hg_armor_piercing": "45"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "can_convert_from": [
            {
                "module_category": "ship_heavy_battery",
                "convert_cost_ic": "1200"
            },
            {
                "module": "ship_heavy_battery_2",
                "convert_cost_ic": "600"
            }
        ],
        "critical_parts": {
            "damaged_heavy_guns": ""
        }
    },
    "ship_heavy_battery_4": {
        "abbreviation": "\"sal\"",
        "category": "ship_heavy_battery",
        "parent": "ship_heavy_battery_3",
        "sfx": "sfx_ui_sd_module_turret",
        "add_equipment_type": "capital_ship",
        "add_stats": {
            "hg_attack": "30",
            "build_cost_ic": "1850"
        },
        "multiply_stats": {
            "naval_speed": "-0.08"
        },
        "add_average_stats": {
            "hg_armor_piercing": "48"
        },
        "build_cost_resources": {
            "steel": "1",
            "chromium": "1"
        },
        "can_convert_from": [
            {
                "module_category": "ship_heavy_battery",
                "convert_cost_ic": "1450"
            },
            {
                "module": "ship_heavy_battery_3",
                "convert_cost_ic": "800"
            }
        ],
        "critical_parts": {
            "damaged_heavy_guns": ""
        }
    },
    "ship_super_heavy_battery_1": {
        "abbreviation": "\"sam\"",
        "category": "ship_heavy_battery",
        "sfx": "sfx_ui_sd_module_turret",
        "gfx": "ship_heavy_battery_5",
        "add_equipment_type": "capital_ship",
        "add_stats": {
            "hg_attack": "28",
            "build_cost_ic": "2000"
        },
        "build_cost_resources": {
            "steel": "1",
            "chromium": "1"
        },
        "multiply_stats": {
            "naval_speed": "-0.08"
        },
        "add_average_stats": {
            "hg_armor_piercing": "45"
        },
        "can_convert_from": {
            "module_category": "ship_heavy_battery",
            "convert_cost_ic": "1600"
        },
        "critical_parts": {
            "damaged_heavy_guns": ""
        }
    },
    "ship_medium_battery_1": {
        "abbreviation": "\"san\"",
        "category": "ship_medium_battery",
        "sfx": "sfx_ui_sd_module_turret",
        "add_equipment_type": "capital_ship",
        "add_stats": {
            "hg_attack": "9.0",
            "build_cost_ic": "650"
        },
        "multiply_stats": {
            "naval_speed": "-0.04",
            "max_strength": "0.4"
        },
        "add_average_stats": {
            "hg_armor_piercing": "24",
            "surface_visibility": "5"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "forbid_module_categories": {
            "ship_light_medium_battery": "",
            "dp_light_battery": "",
            "ship_light_battery": ""
        },
        "can_convert_from": [
            {
                "module_category": "ship_light_battery",
                "convert_cost_ic": "400"
            },
            {
                "module_category": "ship_medium_battery",
                "convert_cost_ic": "400"
            }
        ],
        "critical_parts": {
            "damaged_heavy_guns": ""
        }
    },
    "ship_medium_battery_2": {
        "abbreviation": "\"sao\"",
        "category": "ship_medium_battery",
        "parent": "ship_medium_battery_1",
        "sfx": "sfx_ui_sd_module_turret",
        "add_equipment_type": "capital_ship",
        "add_stats": {
            "hg_attack": "12.0",
            "build_cost_ic": "700"
        },
        "multiply_stats": {
            "naval_speed": "-0.06",
            "max_strength": "0.4"
        },
        "add_average_stats": {
            "hg_armor_piercing": "28",
            "surface_visibility": "5"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "forbid_module_categories": {
            "ship_light_medium_battery": "",
            "dp_light_battery": "",
            "ship_light_battery": ""
        },
        "can_convert_from": [
            {
                "module_category": "ship_medium_battery",
                "convert_cost_ic": "400"
            },
            {
                "module": "ship_medium_battery_1",
                "convert_cost_ic": "300"
            }
        ],
        "critical_parts": {
            "damaged_heavy_guns": ""
        }
    },
    "ship_medium_battery_3": {
        "abbreviation": "\"sap\"",
        "category": "ship_medium_battery",
        "parent": "ship_medium_battery_2",
        "add_equipment_type": "capital_ship",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "hg_attack": "15.0",
            "build_cost_ic": "750"
        },
        "multiply_stats": {
            "naval_speed": "-0.07",
            "max_strength": "0.4"
        },
        "add_average_stats": {
            "hg_armor_piercing": "32",
            "surface_visibility": "5"
        },
        "build_cost_resources": {
            "steel": "2"
        },
        "forbid_module_categories": {
            "ship_light_medium_battery": "",
            "dp_light_battery": "",
            "ship_light_battery": ""
        },
        "can_convert_from": [
            {
                "module_category": "ship_medium_battery",
                "convert_cost_ic": "500",
                "convert_cost_resources": {
                    "steel": "2"
                }
            },
            {
                "module": "ship_medium_battery_2",
                "convert_cost_ic": "350"
            }
        ],
        "critical_parts": {
            "damaged_heavy_guns": ""
        }
    },
    "ship_medium_battery_4": {
        "abbreviation": "\"saq\"",
        "category": "ship_medium_battery",
        "parent": "ship_medium_battery_3",
        "add_equipment_type": "capital_ship",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "hg_attack": "18.0",
            "build_cost_ic": "850"
        },
        "multiply_stats": {
            "naval_speed": "-0.08",
            "max_strength": "0.4"
        },
        "add_average_stats": {
            "hg_armor_piercing": "36",
            "surface_visibility": "5"
        },
        "build_cost_resources": {
            "steel": "2"
        },
        "forbid_module_categories": {
            "ship_light_medium_battery": "",
            "dp_light_battery": "",
            "ship_light_battery": ""
        },
        "can_convert_from": [
            {
                "module_category": "ship_medium_battery",
                "convert_cost_ic": "600",
                "convert_cost_resources": {
                    "steel": "2"
                }
            },
            {
                "module": "ship_medium_battery_3",
                "convert_cost_ic": "400"
            }
        ],
        "critical_parts": {
            "damaged_heavy_guns": ""
        }
    },
    "ship_light_medium_battery_1": {
        "abbreviation": "\"sar\"",
        "category": "ship_light_medium_battery",
        "gui_category": "ship_medium_battery",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "4",
            "build_cost_ic": "300",
            "max_strength": "10"
        },
        "multiply_stats": {
            "naval_speed": "-0.03"
        },
        "add_average_stats": {
            "lg_armor_piercing": "5.5"
        },
        "forbid_module_categories": {
            "ship_medium_battery": ""
        },
        "can_convert_from": {
            "module_category": "ship_medium_battery",
            "convert_cost_ic": "500"
        },
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "ship_light_medium_battery_2": {
        "abbreviation": "\"sas\"",
        "category": "ship_light_medium_battery",
        "gui_category": "ship_medium_battery",
        "parent": "ship_light_medium_battery_1",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "5",
            "build_cost_ic": "350",
            "max_strength": "10"
        },
        "multiply_stats": {
            "naval_speed": "-0.04"
        },
        "add_average_stats": {
            "lg_armor_piercing": "7.0"
        },
        "forbid_module_categories": {
            "ship_medium_battery": ""
        },
        "can_convert_from": [
            {
                "module_category": "ship_medium_battery",
                "convert_cost_ic": "400",
                "convert_cost_resources": {
                    "steel": "1"
                }
            },
            {
                "module": "ship_light_medium_battery_1",
                "convert_cost_ic": "300"
            }
        ],
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "ship_light_medium_battery_3": {
        "abbreviation": "\"sat\"",
        "category": "ship_light_medium_battery",
        "gui_category": "ship_medium_battery",
        "parent": "ship_light_medium_battery_2",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "6",
            "build_cost_ic": "375",
            "max_strength": "10"
        },
        "multiply_stats": {
            "naval_speed": "-0.05"
        },
        "add_average_stats": {
            "lg_armor_piercing": "9"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "forbid_module_categories": {
            "ship_medium_battery": ""
        },
        "can_convert_from": [
            {
                "module_category": "ship_medium_battery",
                "convert_cost_ic": "500",
                "convert_cost_resources": {
                    "steel": "1"
                }
            },
            {
                "module": "ship_light_medium_battery_2",
                "convert_cost_ic": "350"
            }
        ],
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "ship_light_medium_battery_4": {
        "abbreviation": "\"sau\"",
        "category": "ship_light_medium_battery",
        "gui_category": "ship_medium_battery",
        "sfx": "sfx_ui_sd_module_turret",
        "parent": "ship_light_medium_battery_3",
        "add_stats": {
            "lg_attack": "8",
            "build_cost_ic": "425",
            "max_strength": "10"
        },
        "multiply_stats": {
            "naval_speed": "-0.06"
        },
        "add_average_stats": {
            "lg_armor_piercing": "11"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "forbid_module_categories": {
            "ship_medium_battery": ""
        },
        "can_convert_from": [
            {
                "module_category": "ship_medium_battery",
                "convert_cost_ic": "600",
                "convert_cost_resources": {
                    "steel": "1"
                }
            },
            {
                "module": "ship_light_medium_battery_3",
                "convert_cost_ic": "400"
            }
        ],
        "critical_parts": {
            "damaged_light_guns": ""
        }
    },
    "dp_ship_medium_1": {
        "abbreviation": "\"sdq\"",
        "category": "ship_light_medium_battery",
        "gui_category": "ship_medium_battery",
        "sfx": "sfx_ui_sd_module_turret",
        "parent": "ship_light_medium_battery_3",
        "add_stats": {
            "lg_attack": "7.5",
            "anti_air_attack": "4.5",
            "build_cost_ic": "450",
            "max_strength": "10"
        },
        "multiply_stats": {
            "naval_speed": "-0.06"
        },
        "add_average_stats": {
            "lg_armor_piercing": "9"
        },
        "forbid_module_categories": {
            "ship_medium_battery": ""
        },
        "can_convert_from": [
            {
                "module_category": "ship_medium_battery",
                "convert_cost_ic": "650",
                "convert_cost_resources": {
                    "steel": "1"
                }
            },
            {
                "module": "ship_light_medium_battery_3",
                "convert_cost_ic": "450"
            }
        ],
        "critical_parts": {
            "damaged_secondaries": ""
        }
    },
    "ship_secondaries_1": {
        "abbreviation": "\"sav\"",
        "category": "ship_secondaries",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "3",
            "build_cost_ic": "180"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        },
        "add_average_stats": {
            "lg_armor_piercing": "5.5"
        },
        "can_convert_from": {
            "module_category": "ship_secondaries",
            "convert_cost_ic": "100"
        },
        "critical_parts": {
            "damaged_secondaries": ""
        }
    },
    "ship_secondaries_2": {
        "abbreviation": "\"saw\"",
        "category": "ship_secondaries",
        "parent": "ship_secondaries_1",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "4",
            "build_cost_ic": "240"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        },
        "add_average_stats": {
            "lg_armor_piercing": "7"
        },
        "can_convert_from": {
            "module_category": "ship_secondaries",
            "convert_cost_ic": "120"
        },
        "critical_parts": {
            "damaged_secondaries": ""
        }
    },
    "ship_secondaries_3": {
        "abbreviation": "\"sdr\"",
        "category": "ship_secondaries",
        "parent": "ship_secondaries_2",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "5",
            "build_cost_ic": "300"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        },
        "add_average_stats": {
            "lg_armor_piercing": "9"
        },
        "can_convert_from": [
            [
                {
                    "module_category": "ship_secondaries",
                    "convert_cost_ic": "180"
                },
                {
                    "module_category": "ship_dp_secondaries",
                    "convert_cost_ic": "180"
                }
            ],
            {
                "module": "ship_secondaries_2",
                "convert_cost_ic": "120"
            }
        ],
        "critical_parts": {
            "damaged_secondaries": ""
        }
    },
    "dp_ship_secondaries_1": {
        "abbreviation": "\"sax\"",
        "category": "ship_dp_secondaries",
        "gui_category": "ship_secondaries",
        "gfx": "dp_secondary_battery_1",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "2",
            "anti_air_attack": "1",
            "build_cost_ic": "180"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        },
        "add_average_stats": {
            "lg_armor_piercing": "3"
        },
        "can_convert_from": [
            {
                "module_category": "ship_secondaries",
                "convert_cost_ic": "100"
            },
            {
                "module_category": "ship_dp_secondaries",
                "convert_cost_ic": "100"
            }
        ],
        "critical_parts": {
            "damaged_secondaries": ""
        }
    },
    "dp_ship_secondaries_2": {
        "abbreviation": "\"say\"",
        "category": "ship_dp_secondaries",
        "gui_category": "ship_secondaries",
        "parent": "dp_ship_secondaries_1",
        "gfx": "dp_secondary_battery_2",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "3",
            "anti_air_attack": "2",
            "build_cost_ic": "240"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        },
        "add_average_stats": {
            "lg_armor_piercing": "4"
        },
        "can_convert_from": [
            {
                "module_category": "ship_secondaries",
                "convert_cost_ic": "150"
            },
            {
                "module_category": "ship_dp_secondaries",
                "convert_cost_ic": "150"
            }
        ],
        "critical_parts": {
            "damaged_secondaries": ""
        }
    },
    "dp_ship_secondaries_3": {
        "abbreviation": "\"saz\"",
        "category": "ship_dp_secondaries",
        "gui_category": "ship_secondaries",
        "parent": "dp_ship_secondaries_2",
        "gfx": "dp_secondary_battery_3",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "4",
            "anti_air_attack": "2.5",
            "build_cost_ic": "300"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        },
        "add_average_stats": {
            "lg_armor_piercing": "7"
        },
        "can_convert_from": [
            {
                "module_category": "ship_secondaries",
                "convert_cost_ic": "180"
            },
            {
                "module_category": "ship_dp_secondaries",
                "convert_cost_ic": "180"
            }
        ],
        "critical_parts": {
            "damaged_secondaries": ""
        }
    },
    "dp_ship_secondaries_4": {
        "abbreviation": "\"sba\"",
        "category": "ship_dp_secondaries",
        "gui_category": "ship_secondaries",
        "parent": "dp_ship_secondaries_3",
        "gfx": "dp_secondary_battery_4",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "lg_attack": "5",
            "anti_air_attack": "3",
            "build_cost_ic": "360"
        },
        "multiply_stats": {
            "naval_speed": "-0.03"
        },
        "add_average_stats": {
            "lg_armor_piercing": "9"
        },
        "can_convert_from": [
            {
                "module_category": "ship_secondaries",
                "convert_cost_ic": "200"
            },
            {
                "module_category": "ship_dp_secondaries",
                "convert_cost_ic": "200"
            }
        ],
        "critical_parts": {
            "damaged_secondaries": ""
        }
    },
    "ship_anti_air_1": {
        "abbreviation": "\"sbb\"",
        "category": "ship_anti_air",
        "sfx": "sfx_ui_sd_module_turret",
        "add_equipment_type": "anti_air",
        "add_stats": {
            "anti_air_attack": "2.5",
            "build_cost_ic": "80"
        },
        "multiply_stats": {
            "naval_speed": "-0.005",
            "anti_air_attack": "0.05"
        },
        "can_convert_from": {
            "module_category": "ship_anti_air",
            "convert_cost_ic": "60"
        }
    },
    "ship_anti_air_2": {
        "abbreviation": "\"sbc\"",
        "category": "ship_anti_air",
        "parent": "ship_anti_air_1",
        "sfx": "sfx_ui_sd_module_turret",
        "add_equipment_type": "anti_air",
        "add_stats": {
            "anti_air_attack": "3.5",
            "build_cost_ic": "110"
        },
        "multiply_stats": {
            "naval_speed": "-0.005",
            "anti_air_attack": "0.1"
        },
        "can_convert_from": [
            {
                "module_category": "ship_anti_air",
                "convert_cost_ic": "90"
            },
            {
                "module": "ship_anti_air_1",
                "convert_cost_ic": "60"
            }
        ]
    },
    "ship_anti_air_3": {
        "abbreviation": "\"sbd\"",
        "category": "ship_anti_air",
        "parent": "ship_anti_air_2",
        "sfx": "sfx_ui_sd_module_turret",
        "add_equipment_type": "anti_air",
        "add_stats": {
            "anti_air_attack": "4.5",
            "build_cost_ic": "140"
        },
        "multiply_stats": {
            "naval_speed": "-0.005",
            "anti_air_attack": "0.125"
        },
        "can_convert_from": [
            {
                "module_category": "ship_anti_air",
                "convert_cost_ic": "90"
            },
            {
                "module": "ship_anti_air_2",
                "convert_cost_ic": "60"
            }
        ]
    },
    "ship_anti_air_4": {
        "abbreviation": "\"sbe\"",
        "category": "ship_anti_air",
        "parent": "ship_anti_air_2",
        "sfx": "sfx_ui_sd_module_turret",
        "add_equipment_type": "anti_air",
        "add_stats": {
            "anti_air_attack": "5.5",
            "build_cost_ic": "170"
        },
        "multiply_stats": {
            "naval_speed": "-0.005",
            "anti_air_attack": "0.15"
        },
        "can_convert_from": [
            {
                "module_category": "ship_anti_air",
                "convert_cost_ic": "120"
            },
            {
                "module": "ship_anti_air_3",
                "convert_cost_ic": "50"
            }
        ]
    },
    "ship_fire_control_system_0": {
        "abbreviation": "\"sbf\"",
        "category": "ship_fire_control_system",
        "gfx": "ship_fire_control_system",
        "sfx": "sfx_ui_sd_module_sonar",
        "add_stats": {
            "build_cost_ic": "60",
            "naval_light_gun_hit_chance_factor": "0.025",
            "naval_heavy_gun_hit_chance_factor": "0.025"
        },
        "multiply_stats": {}
    },
    "ship_fire_control_system_1": {
        "abbreviation": "\"sbg\"",
        "category": "ship_fire_control_system",
        "parent": "ship_fire_control_system_0",
        "sfx": "sfx_ui_sd_module_sonar",
        "add_stats": {
            "build_cost_ic": "135",
            "naval_light_gun_hit_chance_factor": "0.05",
            "naval_heavy_gun_hit_chance_factor": "0.05"
        },
        "multiply_stats": {
            "anti_air_attack": "0.1"
        },
        "can_convert_from": {
            "module": "ship_fire_control_system_0",
            "convert_cost_ic": "85"
        }
    },
    "ship_fire_control_system_2": {
        "abbreviation": "\"sbh\"",
        "category": "ship_fire_control_system",
        "sfx": "sfx_ui_sd_module_sonar",
        "parent": "ship_fire_control_system_1",
        "add_stats": {
            "build_cost_ic": "165",
            "naval_light_gun_hit_chance_factor": "0.075",
            "naval_heavy_gun_hit_chance_factor": "0.075"
        },
        "multiply_stats": {
            "anti_air_attack": "0.15"
        },
        "can_convert_from": [
            {
                "module": "ship_fire_control_system_1",
                "convert_cost_ic": "105"
            },
            {
                "module_category": "ship_fire_control_system",
                "convert_cost_ic": "145"
            }
        ]
    },
    "ship_fire_control_system_3": {
        "abbreviation": "\"sbi\"",
        "category": "ship_fire_control_system",
        "sfx": "sfx_ui_sd_module_sonar",
        "parent": "ship_fire_control_system_2",
        "add_stats": {
            "build_cost_ic": "225",
            "naval_light_gun_hit_chance_factor": "0.1",
            "naval_heavy_gun_hit_chance_factor": "0.1"
        },
        "multiply_stats": {
            "anti_air_attack": "0.2"
        },
        "can_convert_from": [
            {
                "module": "ship_fire_control_system_2",
                "convert_cost_ic": "110"
            },
            {
                "module_category": "ship_fire_control_system",
                "convert_cost_ic": "145"
            }
        ]
    },
    "ship_radar_1": {
        "abbreviation": "\"sbj\"",
        "category": "ship_radar",
        "sfx": "sfx_ui_sd_module_sonar",
        "add_stats": {
            "build_cost_ic": "100",
            "surface_detection": "5"
        }
    },
    "ship_radar_2": {
        "abbreviation": "\"sbk\"",
        "category": "ship_radar",
        "sfx": "sfx_ui_sd_module_sonar",
        "parent": "ship_radar_1",
        "multiply_stats": {
            "anti_air_attack": "0.05"
        },
        "add_stats": {
            "naval_light_gun_hit_chance_factor": "0.025",
            "naval_heavy_gun_hit_chance_factor": "0.025",
            "build_cost_ic": "130",
            "surface_detection": "7",
            "sub_detection": "2"
        },
        "can_convert_from": {
            "module": "ship_radar_1",
            "convert_cost_ic": "30"
        }
    },
    "ship_radar_3": {
        "abbreviation": "\"sbl\"",
        "category": "ship_radar",
        "sfx": "sfx_ui_sd_module_sonar",
        "parent": "ship_radar_2",
        "multiply_stats": {
            "anti_air_attack": "0.075"
        },
        "add_stats": {
            "naval_light_gun_hit_chance_factor": "0.05",
            "naval_heavy_gun_hit_chance_factor": "0.05",
            "surface_detection": "12",
            "sub_detection": "6",
            "build_cost_ic": "160"
        },
        "can_convert_from": [
            {
                "module": "ship_radar_2",
                "convert_cost_ic": "50"
            },
            {
                "module_category": "ship_radar",
                "convert_cost_ic": "80"
            }
        ]
    },
    "ship_radar_4": {
        "abbreviation": "\"sbm\"",
        "category": "ship_radar",
        "sfx": "sfx_ui_sd_module_sonar",
        "parent": "ship_radar_3",
        "multiply_stats": {
            "anti_air_attack": "0.1"
        },
        "add_stats": {
            "naval_light_gun_hit_chance_factor": "0.1",
            "naval_heavy_gun_hit_chance_factor": "0.1",
            "build_cost_ic": "190",
            "surface_detection": "18",
            "sub_detection": "14"
        },
        "can_convert_from": [
            {
                "module": "ship_radar_3",
                "convert_cost_ic": "50"
            },
            {
                "module_category": "ship_radar",
                "convert_cost_ic": "110"
            }
        ]
    },
    "light_ship_engine_1": {
        "abbreviation": "\"sbn\"",
        "category": "light_ship_engine",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "7"
        },
        "multiply_stats": {
            "naval_speed": "0.15",
            "build_cost_ic": "0.125"
        },
        "can_convert_from": {
            "module_category": "light_ship_engine",
            "convert_cost_ic": "250"
        }
    },
    "light_ship_engine_2": {
        "abbreviation": "\"sbo\"",
        "category": "light_ship_engine",
        "parent": "light_ship_engine_1",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "8"
        },
        "multiply_stats": {
            "naval_speed": "0.20",
            "build_cost_ic": "0.15"
        },
        "can_convert_from": [
            {
                "module_category": "light_ship_engine",
                "convert_cost_ic": "250"
            },
            {
                "module": "light_ship_engine_1",
                "convert_cost_ic": "230"
            }
        ]
    },
    "light_ship_engine_3": {
        "abbreviation": "\"sbp\"",
        "category": "light_ship_engine",
        "parent": "light_ship_engine_2",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "10"
        },
        "multiply_stats": {
            "naval_speed": "0.25",
            "build_cost_ic": "0.175"
        },
        "can_convert_from": [
            {
                "module_category": "light_ship_engine",
                "convert_cost_ic": "250"
            },
            {
                "module": "light_ship_engine_2",
                "convert_cost_ic": "230"
            }
        ]
    },
    "light_ship_engine_4": {
        "abbreviation": "\"sbq\"",
        "category": "light_ship_engine",
        "parent": "light_ship_engine_3",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "10"
        },
        "multiply_stats": {
            "naval_speed": "0.30",
            "build_cost_ic": "0.20"
        },
        "can_convert_from": [
            {
                "module_category": "light_ship_engine",
                "convert_cost_ic": "250"
            },
            {
                "module": "light_ship_engine_3",
                "convert_cost_ic": "230"
            }
        ]
    },
    "sub_ship_engine_1": {
        "abbreviation": "\"sbr\"",
        "category": "sub_ship_engine",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "7"
        },
        "multiply_stats": {
            "naval_speed": "0.1",
            "build_cost_ic": "0.1"
        },
        "can_convert_from": {
            "module_category": "sub_ship_engine",
            "convert_cost_ic": "250"
        }
    },
    "sub_ship_engine_2": {
        "abbreviation": "\"sbs\"",
        "category": "sub_ship_engine",
        "parent": "sub_ship_engine_1",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "8"
        },
        "multiply_stats": {
            "naval_speed": "0.1",
            "build_cost_ic": "0.125",
            "sub_visibility": "-0.05"
        },
        "can_convert_from": [
            {
                "module_category": "sub_ship_engine",
                "convert_cost_ic": "250"
            },
            {
                "module": "sub_ship_engine_1",
                "convert_cost_ic": "230"
            }
        ]
    },
    "sub_ship_engine_3": {
        "abbreviation": "\"sbt\"",
        "category": "sub_ship_engine",
        "parent": "sub_ship_engine_2",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "10"
        },
        "multiply_stats": {
            "naval_speed": "0.15",
            "build_cost_ic": "0.15",
            "sub_visibility": "-0.1"
        },
        "can_convert_from": [
            {
                "module_category": "sub_ship_engine",
                "convert_cost_ic": "250"
            },
            {
                "module": "sub_ship_engine_2",
                "convert_cost_ic": "230"
            }
        ]
    },
    "sub_ship_engine_4": {
        "abbreviation": "\"sbu\"",
        "category": "sub_ship_engine",
        "parent": "sub_ship_engine_3",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "10"
        },
        "multiply_stats": {
            "naval_speed": "0.2",
            "build_cost_ic": "0.20",
            "sub_visibility": "-0.15"
        },
        "can_convert_from": [
            {
                "module_category": "sub_ship_engine",
                "convert_cost_ic": "250"
            },
            {
                "module": "sub_ship_engine_3",
                "convert_cost_ic": "230"
            }
        ]
    },
    "cruiser_ship_engine_1": {
        "abbreviation": "\"sbv\"",
        "category": "cruiser_ship_engine",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "12"
        },
        "multiply_stats": {
            "naval_speed": "0.2",
            "build_cost_ic": "0.15"
        },
        "can_convert_from": {
            "module_category": "cruiser_ship_engine",
            "convert_cost_ic": "2500"
        }
    },
    "cruiser_ship_engine_2": {
        "abbreviation": "\"sbw\"",
        "category": "cruiser_ship_engine",
        "parent": "cruiser_ship_engine_1",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "16"
        },
        "multiply_stats": {
            "naval_speed": "0.3",
            "build_cost_ic": "0.175"
        },
        "can_convert_from": [
            {
                "module_category": "cruiser_ship_engine",
                "convert_cost_ic": "2500"
            },
            {
                "module": "cruiser_ship_engine_1",
                "convert_cost_ic": "2300"
            }
        ]
    },
    "cruiser_ship_engine_3": {
        "abbreviation": "\"sbx\"",
        "category": "cruiser_ship_engine",
        "parent": "cruiser_ship_engine_2",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "20"
        },
        "multiply_stats": {
            "naval_speed": "0.35",
            "build_cost_ic": "0.20"
        },
        "can_convert_from": [
            {
                "module_category": "cruiser_ship_engine",
                "convert_cost_ic": "2500"
            },
            {
                "module": "cruiser_ship_engine_2",
                "convert_cost_ic": "2300"
            }
        ]
    },
    "cruiser_ship_engine_4": {
        "abbreviation": "\"sby\"",
        "category": "cruiser_ship_engine",
        "parent": "cruiser_ship_engine_3",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "24"
        },
        "multiply_stats": {
            "naval_speed": "0.4",
            "build_cost_ic": "0.225"
        },
        "can_convert_from": [
            {
                "module_category": "cruiser_ship_engine",
                "convert_cost_ic": "2500"
            },
            {
                "module": "cruiser_ship_engine_3",
                "convert_cost_ic": "2300"
            }
        ]
    },
    "heavy_ship_engine_1": {
        "abbreviation": "\"sbz\"",
        "category": "heavy_ship_engine",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "20"
        },
        "multiply_stats": {
            "naval_speed": "0.2",
            "build_cost_ic": "0.175"
        },
        "can_convert_from": {
            "module_category": "heavy_ship_engine",
            "convert_cost_ic": "4800"
        }
    },
    "heavy_ship_engine_2": {
        "abbreviation": "\"sca\"",
        "category": "heavy_ship_engine",
        "parent": "heavy_ship_engine_1",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "25"
        },
        "multiply_stats": {
            "naval_speed": "0.35",
            "build_cost_ic": "0.20"
        },
        "can_convert_from": [
            {
                "module_category": "heavy_ship_engine",
                "convert_cost_ic": "5000"
            },
            {
                "module": "heavy_ship_engine_1",
                "convert_cost_ic": "4800"
            }
        ]
    },
    "heavy_ship_engine_3": {
        "abbreviation": "\"scb\"",
        "category": "heavy_ship_engine",
        "parent": "heavy_ship_engine_2",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "30"
        },
        "multiply_stats": {
            "naval_speed": "0.45",
            "build_cost_ic": "0.225"
        },
        "can_convert_from": [
            {
                "module_category": "heavy_ship_engine",
                "convert_cost_ic": "5000"
            },
            {
                "module": "heavy_ship_engine_2",
                "convert_cost_ic": "4800"
            }
        ]
    },
    "heavy_ship_engine_4": {
        "abbreviation": "\"scc\"",
        "category": "heavy_ship_engine",
        "parent": "heavy_ship_engine_3",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "35"
        },
        "multiply_stats": {
            "naval_speed": "0.55",
            "build_cost_ic": "0.25"
        },
        "can_convert_from": [
            {
                "module_category": "heavy_ship_engine",
                "convert_cost_ic": "5000"
            },
            {
                "module": "heavy_ship_engine_3",
                "convert_cost_ic": "4800"
            }
        ]
    },
    "carrier_ship_engine_1": {
        "abbreviation": "\"scd\"",
        "category": "carrier_ship_engine",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "12"
        },
        "multiply_stats": {
            "naval_speed": "0.3",
            "build_cost_ic": "0.10"
        },
        "can_convert_from": {
            "module_category": "carrier_ship_engine",
            "convert_cost_ic": "2500"
        }
    },
    "carrier_ship_engine_2": {
        "abbreviation": "\"sce\"",
        "category": "carrier_ship_engine",
        "parent": "carrier_ship_engine_1",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "16"
        },
        "multiply_stats": {
            "naval_speed": "0.4",
            "build_cost_ic": "0.125"
        },
        "can_convert_from": [
            {
                "module_category": "carrier_ship_engine",
                "convert_cost_ic": "2500"
            },
            {
                "module": "carrier_ship_engine_1",
                "convert_cost_ic": "2300"
            }
        ]
    },
    "carrier_ship_engine_3": {
        "abbreviation": "\"scf\"",
        "category": "carrier_ship_engine",
        "parent": "carrier_ship_engine_2",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "20"
        },
        "multiply_stats": {
            "naval_speed": "0.5",
            "build_cost_ic": "0.15"
        },
        "can_convert_from": [
            {
                "module_category": "carrier_ship_engine",
                "convert_cost_ic": "2500"
            },
            {
                "module": "carrier_ship_engine_2",
                "convert_cost_ic": "2300"
            }
        ]
    },
    "carrier_ship_engine_4": {
        "abbreviation": "\"scg\"",
        "category": "carrier_ship_engine",
        "parent": "carrier_ship_engine_3",
        "sfx": "sfx_ui_sd_module_engine",
        "add_stats": {
            "fuel_consumption": "24"
        },
        "multiply_stats": {
            "naval_speed": "0.60",
            "build_cost_ic": "0.175"
        },
        "can_convert_from": [
            {
                "module_category": "carrier_ship_engine",
                "convert_cost_ic": "2500"
            },
            {
                "module": "carrier_ship_engine_3",
                "convert_cost_ic": "2300"
            }
        ]
    },
    "ship_torpedo_1": {
        "abbreviation": "\"sch\"",
        "category": "ship_torpedo",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "torpedo_attack": "18",
            "build_cost_ic": "90"
        },
        "multiply_stats": {
            "naval_speed": "-0.01"
        },
        "build_cost_resources": {
            "steel": "0"
        },
        "critical_parts": {
            "damaged_torpedoes": ""
        }
    },
    "ship_torpedo_2": {
        "abbreviation": "\"sci\"",
        "category": "ship_torpedo",
        "parent": "ship_torpedo_1",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "torpedo_attack": "24",
            "naval_torpedo_hit_chance_factor": "0.01",
            "build_cost_ic": "120"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        },
        "build_cost_resources": {
            "steel": "0"
        },
        "dismantle_cost_ic": "60",
        "dismantle_cost_resources": {
            "steel": "0"
        },
        "can_convert_from": {
            "module_category": "ship_torpedo",
            "convert_cost_ic": "60",
            "convert_cost_resources": {
                "steel": "0"
            }
        },
        "critical_parts": {
            "damaged_torpedoes": ""
        }
    },
    "ship_torpedo_3": {
        "abbreviation": "\"scj\"",
        "category": "ship_torpedo",
        "parent": "ship_torpedo_2",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "torpedo_attack": "30",
            "build_cost_ic": "150",
            "naval_torpedo_hit_chance_factor": "0.015"
        },
        "multiply_stats": {
            "naval_speed": "-0.03"
        },
        "dismantle_cost_ic": "60",
        "can_convert_from": {
            "module_category": "ship_torpedo",
            "convert_cost_ic": "60"
        },
        "critical_parts": {
            "damaged_torpedoes": ""
        }
    },
    "ship_torpedo_4": {
        "abbreviation": "\"sck\"",
        "category": "ship_torpedo",
        "parent": "ship_torpedo_3",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "torpedo_attack": "36",
            "build_cost_ic": "180",
            "naval_torpedo_hit_chance_factor": "0.02"
        },
        "multiply_stats": {
            "naval_speed": "-0.04"
        },
        "dismantle_cost_ic": "60",
        "can_convert_from": {
            "module_category": "ship_torpedo",
            "convert_cost_ic": "60"
        },
        "critical_parts": {
            "damaged_torpedoes": ""
        }
    },
    "ship_torpedo_sub_1": {
        "abbreviation": "\"scfl\"",
        "category": "ship_torpedo_sub",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "torpedo_attack": "10",
            "build_cost_ic": "80"
        },
        "multiply_stats": {
            "naval_speed": "-0.01"
        },
        "build_cost_resources": {
            "steel": "0"
        },
        "critical_parts": {
            "damaged_torpedoes": ""
        }
    },
    "ship_torpedo_sub_2": {
        "abbreviation": "\"scgm\"",
        "category": "ship_torpedo_sub",
        "parent": "ship_torpedo_sub_1",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "torpedo_attack": "14",
            "build_cost_ic": "120",
            "naval_torpedo_hit_chance_factor": "0.01"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        },
        "build_cost_resources": {
            "steel": "0"
        },
        "can_convert_from": {
            "module_category": "ship_torpedo_sub",
            "convert_cost_ic": "60"
        },
        "critical_parts": {
            "damaged_torpedoes": ""
        }
    },
    "ship_torpedo_sub_3": {
        "abbreviation": "\"scn\"",
        "category": "ship_torpedo_sub",
        "parent": "ship_torpedo_sub_2",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "torpedo_attack": "22",
            "build_cost_ic": "200",
            "naval_torpedo_hit_chance_factor": "0.015"
        },
        "multiply_stats": {
            "naval_speed": "-0.03"
        },
        "can_convert_from": {
            "module_category": "ship_torpedo_sub",
            "convert_cost_ic": "60"
        },
        "critical_parts": {
            "damaged_torpedoes": ""
        }
    },
    "ship_torpedo_sub_4": {
        "abbreviation": "\"sco\"",
        "category": "ship_torpedo_sub",
        "parent": "ship_torpedo_sub_3",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "torpedo_attack": "28",
            "build_cost_ic": "250",
            "naval_torpedo_hit_chance_factor": "0.02"
        },
        "multiply_stats": {
            "naval_speed": "-0.04"
        },
        "can_convert_from": {
            "module_category": "ship_torpedo_sub",
            "convert_cost_ic": "60"
        },
        "critical_parts": {
            "damaged_torpedoes": ""
        }
    },
    "ship_mine_layer_1": {
        "abbreviation": "\"scp\"",
        "category": "ship_mine_layer",
        "gui_category": "ship_mine_warfare",
        "gfx": "ship_mine_layer",
        "add_stats": {
            "mines_planting": "1",
            "build_cost_ic": "90"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        }
    },
    "ship_mine_layer_sub": {
        "abbreviation": "\"scq\"",
        "category": "ship_mine_layer_sub",
        "gfx": "ship_mine_layer_sub",
        "add_stats": {
            "mines_planting": "1",
            "build_cost_ic": "90",
            "naval_speed": "-0.02"
        }
    },
    "ship_mine_sweeper_1": {
        "abbreviation": "\"scr\"",
        "category": "ship_mine_warfare",
        "gfx": "ship_mine_sweeper",
        "add_stats": {
            "mines_sweeping": "1",
            "build_cost_ic": "30"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        }
    },
    "ship_depth_charge_1": {
        "abbreviation": "\"scs\"",
        "category": "ship_depth_charge",
        "sfx": "sfx_ui_sd_module_turret",
        "add_stats": {
            "sub_attack": "8",
            "build_cost_ic": "90"
        },
        "can_convert_from": {
            "module_category": "ship_depth_charge",
            "convert_cost_ic": "60"
        },
        "multiply_stats": {
            "naval_speed": "-0.01"
        }
    },
    "ship_depth_charge_2": {
        "abbreviation": "\"sct\"",
        "category": "ship_depth_charge",
        "sfx": "sfx_ui_sd_module_turret",
        "parent": "ship_depth_charge_1",
        "add_stats": {
            "sub_attack": "12",
            "build_cost_ic": "120"
        },
        "can_convert_from": {
            "module_category": "ship_depth_charge",
            "convert_cost_ic": "90"
        },
        "multiply_stats": {
            "naval_speed": "-0.01"
        }
    },
    "ship_depth_charge_3": {
        "abbreviation": "\"scu\"",
        "category": "ship_depth_charge",
        "sfx": "sfx_ui_sd_module_turret",
        "parent": "ship_depth_charge_2",
        "add_stats": {
            "sub_attack": "16",
            "build_cost_ic": "150"
        },
        "can_convert_from": {
            "module_category": "ship_depth_charge",
            "convert_cost_ic": "120"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        }
    },
    "ship_depth_charge_4": {
        "abbreviation": "\"scv\"",
        "category": "ship_depth_charge",
        "sfx": "sfx_ui_sd_module_turret",
        "parent": "ship_depth_charge_3",
        "add_stats": {
            "sub_attack": "20",
            "build_cost_ic": "180"
        },
        "can_convert_from": {
            "module_category": "ship_depth_charge",
            "convert_cost_ic": "150"
        },
        "multiply_stats": {
            "naval_speed": "-0.02"
        }
    },
    "ship_sub_snorkel_1": {
        "abbreviation": "\"scw\"",
        "category": "ship_sub_snorkel",
        "gfx": "ship_sub_snorkel_1",
        "multiply_stats": {
            "sub_visibility": "-0.05"
        },
        "add_stats": {
            "build_cost_ic": "50"
        }
    },
    "ship_sub_snorkel_2": {
        "abbreviation": "\"scx\"",
        "category": "ship_sub_snorkel",
        "gfx": "ship_sub_snorkel_2",
        "parent": "ship_sub_snorkel_1",
        "multiply_stats": {
            "sub_visibility": "-0.2"
        },
        "add_stats": {
            "build_cost_ic": "70"
        },
        "can_convert_from": {
            "module_category": "ship_sub_snorkel",
            "convert_cost_ic": "30"
        }
    },
    "ship_airplane_launcher_1": {
        "abbreviation": "\"scy\"",
        "category": "ship_airplane_launcher",
        "gfx": "ship_airplane_launcher_1",
        "add_stats": {
            "surface_detection": "7",
            "sub_detection": "2.5",
            "anti_air_attack": "2",
            "build_cost_ic": "150"
        },
        "multiply_stats": {
            "naval_speed": "-0.01"
        }
    },
    "ship_airplane_launcher_2": {
        "abbreviation": "\"scz\"",
        "category": "ship_airplane_launcher",
        "gfx": "ship_airplane_launcher_2",
        "parent": "ship_airplane_launcher_1",
        "add_stats": {
            "surface_detection": "10",
            "sub_detection": "3.5",
            "anti_air_attack": "3",
            "build_cost_ic": "170"
        },
        "can_convert_from": {
            "module_category": "ship_airplane_launcher",
            "convert_cost_ic": "80"
        },
        "multiply_stats": {
            "naval_speed": "-0.01"
        }
    },
    "ship_airplane_launcher_3": {
        "abbreviation": "\"sdt\"",
        "category": "ship_airplane_launcher",
        "gfx": "ship_airplane_launcher_3",
        "parent": "ship_airplane_launcher_2",
        "add_stats": {
            "surface_detection": "12",
            "sub_detection": "5",
            "anti_air_attack": "4",
            "build_cost_ic": "200"
        },
        "can_convert_from": {
            "module_category": "ship_airplane_launcher",
            "convert_cost_ic": "80"
        },
        "multiply_stats": {
            "naval_speed": "-0.01"
        }
    },
    "ship_deck_space": {
        "abbreviation": "\"sda\"",
        "category": "ship_deck_space",
        "gfx": "ship_deck_space",
        "add_equipment_type": "capital_ship",
        "add_stats": {
            "carrier_size": "2",
            "build_cost_ic": "1500"
        },
        "manpower": "500",
        "multiply_stats": {
            "naval_speed": "-0.05"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "dismantle_cost_ic": "700"
    },
    "ship_extra_fuel_tank": {
        "abbreviation": "\"sdb\"",
        "category": "ship_extra_fuel_tank",
        "multiply_stats": {
            "build_cost_ic": "0.1",
            "naval_range": "0.5"
        },
        "dismantle_cost_ic": "700"
    },
    "ship_sonar_1": {
        "abbreviation": "\"sdc\"",
        "category": "ship_sonar",
        "gfx": "ship_sonar_1",
        "sfx": "sfx_ui_sd_module_sonar",
        "add_stats": {
            "sub_detection": "6",
            "naval_torpedo_damage_reduction_factor": "0.1",
            "build_cost_ic": "40"
        }
    },
    "ship_sonar_2": {
        "abbreviation": "\"sdd\"",
        "category": "ship_sonar",
        "gfx": "ship_sonar_2",
        "sfx": "sfx_ui_sd_module_sonar",
        "parent": "ship_sonar_1",
        "add_stats": {
            "sub_detection": "10.0",
            "naval_torpedo_damage_reduction_factor": "0.2",
            "build_cost_ic": "60"
        },
        "can_convert_from": {
            "module_category": "ship_sonar",
            "convert_cost_ic": "25"
        }
    },
    "ship_armor_bb_1": {
        "abbreviation": "\"sde\"",
        "category": "ship_heavy_armor",
        "gfx": "ship_armor_thick_1",
        "multiply_stats": {
            "build_cost_ic": "0.125",
            "naval_speed": "-0",
            "max_strength": "0.05"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "add_stats": {
            "armor_value": "30",
            "naval_torpedo_enemy_critical_chance_factor": "-0.1",
            "naval_torpedo_damage_reduction_factor": "0.1"
        },
        "add_average_stats": {
            "surface_visibility": "5"
        },
        "dismantle_cost_ic": "2500",
        "can_convert_from": {
            "module_category": "ship_heavy_armor",
            "convert_cost_ic": "5500"
        }
    },
    "ship_armor_bc_1": {
        "abbreviation": "\"sdf\"",
        "category": "ship_heavy_armor",
        "gfx": "ship_armor_1",
        "multiply_stats": {
            "build_cost_ic": "0.1",
            "naval_speed": "0.1",
            "max_strength": "0.05"
        },
        "add_stats": {
            "armor_value": "20",
            "naval_torpedo_damage_reduction_factor": "0.1"
        },
        "can_convert_from": {
            "module_category": "ship_heavy_armor",
            "convert_cost_ic": "4500"
        }
    },
    "ship_armor_bb_2": {
        "abbreviation": "\"sdg\"",
        "category": "ship_heavy_armor",
        "gfx": "ship_armor_thick_2",
        "parent": "ship_armor_bb_1",
        "multiply_stats": {
            "build_cost_ic": "0.15",
            "naval_speed": "-0.05",
            "max_strength": "0.1"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "add_stats": {
            "armor_value": "36",
            "naval_torpedo_enemy_critical_chance_factor": "-0.15",
            "naval_torpedo_damage_reduction_factor": "0.15"
        },
        "add_average_stats": {
            "surface_visibility": "5"
        },
        "can_convert_from": {
            "module_category": "ship_heavy_armor",
            "convert_cost_ic": "6000"
        }
    },
    "ship_armor_bc_2": {
        "abbreviation": "\"sdh\"",
        "category": "ship_heavy_armor",
        "gfx": "ship_armor_2",
        "parent": "ship_armor_bc_1",
        "multiply_stats": {
            "build_cost_ic": "0.125",
            "naval_speed": "0.05",
            "max_strength": "0.1"
        },
        "build_cost_resources": {
            "steel": "1"
        },
        "add_stats": {
            "armor_value": "26",
            "naval_torpedo_enemy_critical_chance_factor": "-0.1",
            "naval_torpedo_damage_reduction_factor": "0.15"
        },
        "can_convert_from": {
            "module_category": "ship_heavy_armor",
            "convert_cost_ic": "5500"
        }
    },
    "ship_armor_bb_3": {
        "abbreviation": "\"sdi\"",
        "category": "ship_heavy_armor",
        "gfx": "ship_armor_thick_3",
        "parent": "ship_armor_bb_2",
        "multiply_stats": {
            "build_cost_ic": "0.175",
            "naval_speed": "-0.10",
            "max_strength": "0.15"
        },
        "build_cost_resources": {
            "steel": "2",
            "chromium": "1"
        },
        "add_stats": {
            "armor_value": "40",
            "naval_torpedo_enemy_critical_chance_factor": "-0.2",
            "naval_torpedo_damage_reduction_factor": "0.2"
        },
        "add_average_stats": {
            "surface_visibility": "5"
        },
        "dismantle_cost_ic": "7500",
        "can_convert_from": {
            "module_category": "ship_heavy_armor",
            "convert_cost_ic": "7500"
        }
    },
    "ship_armor_bc_3": {
        "abbreviation": "\"sdj\"",
        "category": "ship_heavy_armor",
        "gfx": "ship_armor_3",
        "parent": "ship_armor_bc_2",
        "multiply_stats": {
            "build_cost_ic": "0.125",
            "naval_speed": "-0",
            "max_strength": "0.15"
        },
        "build_cost_resources": {
            "steel": "1",
            "chromium": "1"
        },
        "add_stats": {
            "armor_value": "32",
            "naval_torpedo_enemy_critical_chance_factor": "-0.15",
            "naval_torpedo_damage_reduction_factor": "0.2"
        },
        "dismantle_cost_ic": "6200",
        "can_convert_from": {
            "module_category": "ship_heavy_armor",
            "convert_cost_ic": "6200"
        }
    },
    "ship_armor_shbb": {
        "abbreviation": "\"sk\"",
        "category": "ship_heavy_armor",
        "gfx": "ship_armor_thick_3",
        "multiply_stats": {
            "build_cost_ic": "0.25",
            "naval_speed": "-0.12",
            "max_strength": "0.1"
        },
        "build_cost_resources": {
            "steel": "2",
            "chromium": "1"
        },
        "add_stats": {
            "armor_value": "55",
            "naval_torpedo_enemy_critical_chance_factor": "-0.25",
            "naval_torpedo_damage_reduction_factor": "0.25"
        },
        "add_average_stats": {
            "surface_visibility": "5"
        },
        "dismantle_cost_ic": "8200",
        "can_convert_from": {
            "module_category": "ship_heavy_armor",
            "convert_cost_ic": "8200"
        }
    },
    "ship_armor_cruiser_1": {
        "abbreviation": "\"sdl\"",
        "category": "ship_cruiser_armor",
        "gfx": "ship_armor_thin_1",
        "multiply_stats": {
            "build_cost_ic": "0.1",
            "naval_speed": "-0.05"
        },
        "dismantle_cost_ic": "2500",
        "add_stats": {
            "armor_value": "6"
        }
    },
    "ship_armor_cruiser_2": {
        "abbreviation": "\"sdm\"",
        "category": "ship_cruiser_armor",
        "gfx": "ship_armor_thin_2",
        "parent": "ship_armor_cruiser_1",
        "multiply_stats": {
            "build_cost_ic": "0.15",
            "naval_speed": "-0.075",
            "max_strength": "0.05"
        },
        "dismantle_cost_ic": "3000",
        "add_stats": {
            "armor_value": "8"
        },
        "build_cost_resources": {
            "steel": "1"
        }
    },
    "ship_armor_cruiser_3": {
        "abbreviation": "\"sdn\"",
        "category": "ship_cruiser_armor",
        "gfx": "ship_armor_thin_3",
        "parent": "ship_armor_cruiser_2",
        "add_equipment_type": "capital_ship",
        "multiply_stats": {
            "build_cost_ic": "0.2",
            "naval_speed": "-0.1",
            "max_strength": "0.1"
        },
        "dismantle_cost_ic": "3500",
        "add_stats": {
            "armor_value": "12"
        },
        "add_average_stats": {
            "surface_visibility": "5"
        },
        "build_cost_resources": {
            "steel": "1",
            "chromium": "1"
        }
    },
    "ship_armor_cruiser_4": {
        "abbreviation": "\"sdo\"",
        "category": "ship_cruiser_armor",
        "gfx": "ship_armor_thin_4",
        "parent": "ship_armor_cruiser_3",
        "add_equipment_type": "capital_ship",
        "multiply_stats": {
            "build_cost_ic": "0.25",
            "naval_speed": "-0.125",
            "max_strength": "0.15"
        },
        "dismantle_cost_ic": "4000",
        "add_stats": {
            "armor_value": "15"
        },
        "add_average_stats": {
            "surface_visibility": "5"
        },
        "build_cost_resources": {
            "steel": "2",
            "chromium": "1"
        }
    },
    "ship_armor_carrier_deck": {
        "abbreviation": "\"sdp\"",
        "category": "ship_carrier_armor",
        "gfx": "ship_cruiser_armor",
        "multiply_stats": [
            {
                "build_cost_ic": "0.1"
            },
            {
                "naval_speed": "-0.05",
                "anti_air_attack": "1",
                "max_strength": "0.15"
            }
        ],
        "build_cost_resources": {
            "steel": "1"
        },
        "add_stats": {
            "armor_value": "5"
        },
        "dismantle_cost_ic": "2500"
    }
}
const light = {

}
for(let key in thing){
    if(!(key.includes("armor")) &&
    !(key.includes("battery")) &&
    !(key.includes("engine"))){
        light[key] = thing[key]
    }
}
fs.writeFileSync("light.json", JSON.stringify(light));