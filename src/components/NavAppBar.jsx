import React from 'react';
import { AppBar, Toolbar, Button, List, ListItem, Divider } from 'react95';
import { Logo } from '@react95/icons';
export default function NavAppBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <AppBar
        style={{
          top: 'unset',
          bottom: 0,
        }}
      >
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: 'bold' }}
            >
              <Logo />
              Start
            </Button>
            {open && (
              <List
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '-450%',
                }}
                onClick={() => setOpen(false)}
              >
                <ListItem>
                  <span role='img' aria-label='👨‍💻'>
                    👨‍💻
                  </span>
                  Profile
                </ListItem>
                <ListItem>
                  <span role='img' aria-label='📁'>
                    📁
                  </span>
                  My account
                </ListItem>
                <Divider />
                <ListItem disabled>
                  <span role='img' aria-label='🔙'>
                    🔙
                  </span>
                  Logout
                </ListItem>
              </List>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
