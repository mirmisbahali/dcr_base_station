// ROS Topic Names
export const TOPICS = {
  JOY: '/joy',
  CMD_VEL: '/diff_drive_controller/cmd_vel',
};

// ROS Message Types
export const MSG_TYPES = {
  STRING: 'std_msgs/msg/String',
  JOY: 'sensor_msgs/msg/Joy',
  TWIST_STAMPED: 'geometry_msgs/msg/TwistStamped',
};

// ROS Service Types
export const SRV_TYPES = {
  TRIGGER: 'std_srvs/srv/Trigger',
  SET_BOOL: 'std_srvs/srv/SetBool',
};

// Camera Configuration
export const DEFAULT_VIDEO_PORT = '8080';

export const DEFAULT_CAMERAS = [
  { id: 'cam1', label: 'Front Camera', topic: '/camera1/image_raw' },
  { id: 'cam2', label: 'Rear Camera', topic: '/camera2/image_raw' },
  { id: 'cam3', label: 'Arm Camera', topic: '/camera3/image_raw' },
];

export const STREAM_DEFAULTS = {
  type: 'mjpeg',
  quality: 80,
  width: 640,
  height: 480,
};
