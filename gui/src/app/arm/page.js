'use client';

import { Box, Typography } from '@mui/material';
import MainLayout from '@/components/layout/MainLayout';
import ConnectionManager from '@/components/control/ConnectionManager';
import JoystickStatus from '@/components/status/JoystickStatus';
import { useArmGamepad } from '@/hooks/useArmGamepad';
import { useROSConnection } from '@/hooks/useROSConnection';

function ArmControlPanel() {
  const { isConnected } = useROSConnection();
  useArmGamepad();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <ConnectionManager />

      {isConnected && (
        <>
          <JoystickStatus />
        </>
      )}
    </Box>
  );
}

function ArmStatusArea() {
  const { isConnected } = useROSConnection();

  if (!isConnected) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'text.disabled',
        }}
      >
        <Typography variant="h6">Connect to rover to see arm status</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
        Arm Control — Laptop B
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
        This page publishes joystick input directly to <code>/joy</code> →{' '}
        <code>motor_node</code> on the rover.
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Laptop A (Drive) connects at <code>/</code>. Both share rosbridge port 9090.
      </Typography>
    </Box>
  );
}

export default function ArmPage() {
  return (
    <MainLayout
      cameraPanel={<ArmStatusArea />}
      controlPanel={<ArmControlPanel />}
    />
  );
}
