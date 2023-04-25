import {
    Container,
    
    Table,
  
  Tfoot,
  Tr,
  Th,

  TableContainer,
  } from '@chakra-ui/react';
  import React from 'react';

  const Product = () => {
    return (
      <Container maxW={'container.4xl'} w={'90%'} h={'90%'} p={'20'}>

        <TableContainer>
  <Table variant='simple' color='orange'>

    {/* <TableCaption>Order Details</TableCaption> */}
    <Tfoot>
      <Tr color={'orange.400'}>
        <Th>Product ID ID</Th>
        <Th>Name</Th>
        <Th>Stock</Th>
        <Th isNumeric>Price</Th>
        <Th>Actions</Th>
      </Tr>
    </Tfoot>
    </Table>
</TableContainer>
     
      </Container>
    );
  };
  
  export default Product;
  