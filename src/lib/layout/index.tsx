import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      <Meta />
      <Flex wrap="wrap" minHeight="90vh">
        <Header />
        <Box width="full" as="main" marginY={22}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
