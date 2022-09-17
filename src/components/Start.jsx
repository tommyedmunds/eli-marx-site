import React, { useState } from 'react';
import { AppBar, Toolbar, Button, List, ListItem } from 'react95';

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar style={{ top: 'unset', bottom: 0 }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={'./refine.png'}
              alt='refine logo'
              style={{ height: '20px', marginRight: 4 }}
            />
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                bottom: '100%',
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>Posts</ListItem>
              <ListItem>Categories</ListItem>
              <ListItem>
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
  );
}
