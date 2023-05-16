import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { VStack } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

const Header= () => {

const {isOpen,onOpen,onClose}= useDisclosure()

return (
    <>
      <Button
      zIndex={'overlay'}
        position={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        width={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}> 
        <DrawerOverlay />

        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>VIDEO HUB</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-end '}>
                    <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}> 
                        <Link to={'/'}>Home</Link>
                    </Button>
                    
                    <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}> 
                        <Link to={'/videos'}>Videos</Link>
                    </Button>
                    
                    <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}> 
                        <Link to={'/videos?category=free'}>Free video</Link>
                    </Button>
                    
                    <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}> 
                        <Link to={'/upload'}>upload Video</Link>
                    </Button>
                    </VStack>
                    <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly '}>
                      <Button  colorScheme={'purple'} onClick={onClose}>
                        <Link to={'/login'}> Log in</Link>
                      </Button>
                      <Button colorScheme={'purple'} variant={'outline'} onClick={onClose}>
                        <Link to={'/signup'}>Sign up</Link>
                      </Button>
                    </HStack>
                
            </DrawerBody>
        </DrawerContent>
        <DrawerFooter></DrawerFooter>

      </Drawer>
    </>
  );
 }

export default Header;
 