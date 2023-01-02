import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Button, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center" gridGap={3}>
      <Text fontWeight="700"> Welcome, {user}</Text>
      <Button
        colorScheme="blue"
        _hover={{
          background: 'blue',
          color: 'blue.500',
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};