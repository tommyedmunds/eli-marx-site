import React from 'react';
import { AppBar, Toolbar, Bar, Button } from 'react95';
// import styled from 'styled-components';

// export default {
//   title: 'Bar',
//   component: Bar,
//   decorators: [(story) => <Wrapper>{story()}</Wrapper>],
// };

// const Wrapper = styled.div`
//   padding: 5rem;
//   background: ${({ theme }) => theme.desktopBackground};
// `;

export default function Nav() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Bar size={35} />
          <Button variant='menu'>Edit</Button>

          <Button variant='menu'>poo</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.story = {
  name: 'default',
};
