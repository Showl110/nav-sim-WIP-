class ship {
    
    lg_armor_piercing = 0;
    lg_attack = 0;
    hg_armor_piercing = 0;
    hg_attack = 0;
    torpedo_attack = 0;
    sub_attack = 0;
    anti_air_attack = 0;
    armor_value = 0;
    surface_detection = 20;
    sub_detection = 1;


    surface_visibility = 0;
    naval_speed = 0;
    reliability = 0;
    naval_range = 0;
    max_strength = 0;
    fuel_consumption = 0;
    build_cost_ic = 0;
    resources = {};
    manpower = 0;
    naval_supremacy_factor = '1';
    naval_weather_penalty_factor = '1'
    
    
    constructor({hullType, hullVariant, front_1_custom_slot, mid_1_custom_slot, mid_2_custom_slot, mid_3_custom_slot, rear_1_custom_slot, rear_2_custom_slot, 
        fixed_ship_battery_slot, fixed_ship_anti_air_slot, fixed_ship_radar_slot, fixed_ship_engine_slot, fixed_ship_secondaries_slot, fixed_ship_armor_slot}
    ) {
        this.hullType = hullType;
        this.hullVariant = hullVariant;

        this.fixed_ship_battery_slot = fixed_ship_battery_slot;
        this.fixed_ship_anti_air_slot = fixed_ship_anti_air_slot;
        this.fixed_ship_fire_control_system_slot = fixed_ship_fire_control_system_slot;
        this.fixed_ship_radar_slot = fixed_ship_radar_slot;
        this.fixed_ship_engine_slot = fixed_ship_engine_slot
        this.fixed_ship_secondaries_slot = fixed_ship_secondaries_slot;
        this.fixed_ship_armor_slot = fixed_ship_armor_slot

        this.front_1_custom_slot = front_1_custom_slot;
        this.mid_1_custom_slot = mid_1_custom_slot;
        this.mid_2_custom_slot = mid_2_custom_slot;
        this.mid_3_custom_slot = mid_3_custom_slot;
        this.rear_1_custom_slot = rear_1_custom_slot;
        this.rear_2_custom_slot = rear_2_custom_slot;
    }
    build() {

    }
}
const cruiser = new ship({
    hullType: 'cruiser',
    hullVariant: '1936',
    front_1_custom_slot: 'torpedo_launcher',
    mid_1_custom_slot: 'heavy_armor_piercing_laser',
    mid_2_custom_slot: 'heavy_attack_laser',
    mid_3_custom_slot: 'heavy_attack_laser',
    rear_1_custom_slot: 'heavy_attack_laser',
    rear_2_custom_slot: 'heavy_attack_laser',
    fixed_ship_battery_slot: 'battery_1000',
    fixed_ship_anti_air_slot: 'anti_air_fighter',
    fixed_ship_fire_control_system_slot: 'fire_control_system_1',
    fixed_ship_radar_slot: 'radar_1',
    fixed_ship_engine
})