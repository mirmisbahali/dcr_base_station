// ROS Topic Names
export const TOPICS = {
  CAN_STATUS: '/system/can_status',
  RS485_STATUS: '/system/rs485_status',
  POWER: '/system/power',
  JOYSTICK: '/joy',
  NETWORK: '/system/network',
  NODES: '/system/nodes',
  MOTOR_STAT1: '/motor_stat_1',
  MOTOR_STAT2: '/motor_stat_2',
  ARM_MODE: '/arm/mode',
  JOY: '/joy',
  ARM_JOY: '/arm/joy',
  ANTENNA_TRIGGER: '/antenna/trigger',
};

// ROS Message Types
export const MSG_TYPES = {
  BOOL: 'std_msgs/msg/Bool',
  STRING: 'std_msgs/msg/String',
  BATTERY_STATE: 'sensor_msgs/msg/BatteryState',
  JOY: 'sensor_msgs/msg/Joy',
  // Custom message types (to be defined in rover packages)
  NETWORK_STATUS: 'std_msgs/msg/String', // JSON-encoded for flexibility
  NODE_LIST: 'std_msgs/msg/String',      // JSON-encoded list of nodes
  MOTOR_STAT1: 'arm_interfaces/msg/MotorStat1',
  MOTOR_STAT2: 'arm_interfaces/msg/MotorStat2',
};

// ROS Service Types
export const SRV_TYPES = {
  TRIGGER: 'std_srvs/srv/Trigger',
  SET_BOOL: 'std_srvs/srv/SetBool',
};

// Camera Configuration (mjpg-streamer URLs — format: http://<host>:<port>/?action=stream)
export const DEFAULT_STREAM_URLS = [
  { label: 'Front Camera', url: 'http://dcr-rover.local:8080/?action=stream' },
  { label: 'Rear Camera',  url: 'http://dcr-rover.local:8090/?action=stream' },
  { label: 'Arm Camera',   url: 'http://dcr-rover.local:8091/?action=stream' },
  { label: 'Empty',        url: '' },
];

// Default configurable nodes that can be launched from the GUI
export const DEFAULT_NODES = [
  { id: 'camera_node', name: 'Camera Node', package: 'rover_camera', executable: 'camera_node' },
  { id: 'can_bridge', name: 'CAN Bridge', package: 'rover_can', executable: 'can_bridge_node' },
  { id: 'sensor_hub', name: 'Sensor Hub', package: 'rover_monitor', executable: 'system_monitor_node' },
  { id: 'system_monitor', name: 'System Monitor', package: 'rover_monitor', executable: 'system_monitor_node' },
];
