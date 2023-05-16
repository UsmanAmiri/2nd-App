import React from 'react'
import {Box, Stack, Heading, VStack, HStack,Button, Input, Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return <Box bgColor={'blackAlpha.900'} minW={'40'} p={'16'} color={'white'}>
    <Stack direction={['column','row']}> 

        <VStack alignItems={'strech'} w={'full'} px={'4'}>
            <Heading size='md' textTransform={'uppercase'}>
                subscribe to get update
                
            </Heading>
            <HStack
            borderBottom={'2px solid  white'} py={'2'}
            >
                <Input placeholder='Enter Email Here...'
                border={'none'}
                borderRadius='none'
                outline={'none'}
                />
                <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
                >
                    <AiOutlineSend/>
                </Button>
            </HStack>
        </VStack>
        <VStack w={'full'} borderLeft={['none','1px solide white']}  borderRight={['none','1px solide white']}>
            <Heading textTransform={'uppercase'} textAlign={'center'}>
                VIDEO HUB
            </Heading>
            <Text>All rights are reserved</Text>

        </VStack>
        <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <Button varient={'link'} colorScheme={'white'}>
                <a target={'blank'} href="/">You Tube</a>
                
            </Button>
            <Button varient={'link'} colorScheme={'white'}>
                <a target={'blank'} href="/">Instagram</a>
                
            </Button>
            <Button varient={'link'} colorScheme={'white'}>
                <a  target={'blank'} href="/">Git Hub</a>
                
            </Button>

        </VStack>


    </Stack>

  </Box>

}

export default Footer