import React from 'react';
import { Window, WindowHeader, WindowContent, Button, Panel, Toolbar } from 'react95';

export default function ModalWindow() {
  const styles = {
    wrapper: {
      zIndex: '1',
      // position: 'relative',
    },
    window: {
      width: '400px',
    },
  };

  return (
    <div style={styles.wrapper}>
      <Window style={styles.window}>
        <WindowHeader className='window-header'>
          <span>react95.exe</span>

          <Button>
            <span>
              <strong>X</strong>
            </span>
          </Button>
        </WindowHeader>

        <Toolbar>
          <Button variant='menu' size='sm'>
            File
          </Button>

          <Button variant='menu' size='sm'>
            Edit
          </Button>

          <Button variant='menu' size='sm' disabled>
            Save
          </Button>
        </Toolbar>

        <WindowContent>
          <p>
            When you set &quot;resizable&quot; prop, there will be drag handle in the
            bottom right corner (but resizing itself must be handled by you tho!)
          </p>
        </WindowContent>

        <Panel variant='well' className='footer'>
          Put some useful informations here
        </Panel>
      </Window>
    </div>
  );
}
