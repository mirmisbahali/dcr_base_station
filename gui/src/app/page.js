'use client';

import { Box } from '@mui/material';
import MainLayout from '@/components/layout/MainLayout';
import ConnectionManager from '@/components/control/ConnectionManager';
import CameraFeedPanel from '@/components/camera/CameraFeedPanel';
import JoystickStatus from '@/components/status/JoystickStatus';

export default function Home() {
  const cameraPanel = <CameraFeedPanel />;
  const controlPanel = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <ConnectionManager />
      <JoystickStatus />
    </Box>
  );

  return (
    <MainLayout
      cameraPanel={cameraPanel}
      controlPanel={controlPanel}
    />
  );
}
