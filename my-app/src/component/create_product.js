import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Select,
  
} from '@chakra-ui/react';
import React from 'react';

const Create_product = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Create Product</Heading>

          <Input
            placeholder={'Product Name'}
            type={'text'}
            required
            focusBorderColor={'tomato.500'}
          />
          <Input
            placeholder={'Price'}
            type={'text'}
            required
            focusBorderColor={'tomato.500'}
          />
          <Input
            placeholder={'Product Description'}
            type={'password'}
            required
            focusBorderColor={'tomato.500'}
          />
          {/* <Input
            placeholder={'Choose Category'}
            type={'password'}
            required
            focusBorderColor={'tomato.500'} */}

<Select placeholder='Choose Category'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
          <Input
            placeholder={'Stocks'}
            type={'password'}
            required
            focusBorderColor={'tomato.500'}
          />
          <Input
            placeholder={'Choose file'}
            type={'password'}
            required
            focusBorderColor={'tomato.500'}
          />



          <Button colorScheme={'orange'} type={'submit'}>
            Create
          </Button>


      
        </VStack>
      </form>
    </Container>
  );
};

export default Create_product;
