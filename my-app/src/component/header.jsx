import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  
  
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="orange"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
    

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Admin-Dashboard</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                color={'tomato'}
              >
                <Link to={'/dashboard'}>Dashboard</Link>
              </Button>

              
                
           
              <Menu>
  <MenuButton  
        
        zIndex={'overlay'}
        pos={'relative'}
        // top={'4'}
        left={'2'}
        colorScheme="orange"
        p={'0'}
        w={'20'}
        h={'10'}
        borderRadius={'full'}
        // onClick={onOpen

        BiMenuAltLeft size={'20'} 
                color={'tomato'}>Products
                </MenuButton>
  <MenuList>
    <MenuItem as="a" href="./all_products"><strong>All</strong></MenuItem>
    <MenuItem as="a" href="./create_product">Create</MenuItem>
  </MenuList>
</Menu>

              <Button
                onClick={onClose}
                variant={'ghost'}
                color={'tomato'}
              >
                <Link to={'/order'}>Orders</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                color={'tomato'}
              >
                <Link to={'/users'}>Users</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                color={'tomato'}
              >
                <Link to={'/reviews'}>Reviews</Link>
              </Button>
            </VStack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;