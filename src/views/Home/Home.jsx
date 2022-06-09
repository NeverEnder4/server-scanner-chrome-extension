import React from 'react';
import { Fab, Zoom, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import NoServersFound from './NoServersFound';
import PopupLayout from '../../layouts/PopupLayout';
import useNavigation from '../../hooks/useNavigation';
import viewNames from '../viewNames';
import FAB_DIAMETER from './constant';

const ICON_DIMENSION = 32;

function Home() {
  const theme = useTheme();
  const { currentView } = useNavigation();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <PopupLayout>
      <NoServersFound />
      <Zoom
        in={currentView === viewNames.HOME}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${transitionDuration.exit}ms`,
        }}
        unmountOnExit
      >
        <Fab
          color="primary"
          sx={{
            position: 'absolute',
            right: theme.spacing(3),
            bottom: theme.spacing(3),
            width: FAB_DIAMETER,
            height: FAB_DIAMETER,
          }}
          aria-label="Add Server"
        >
          <AddIcon
            sx={{
              fill: theme.palette.common.white,
              width: ICON_DIMENSION,
              height: ICON_DIMENSION,
            }}
          />
        </Fab>
      </Zoom>
    </PopupLayout>
  );
}

export default Home;
