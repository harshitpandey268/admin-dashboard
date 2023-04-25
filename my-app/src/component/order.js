import {
    Container,
    
    Table,
  
  Tfoot,
  Tr,
  Th,
  
  TableContainer,
  } from '@chakra-ui/react';
  import React from 'react';

  const Order = () => {
    return (
      <Container maxW={'container.4xl'} w={'90%'} h={'90%'} p={'20'}>

        <TableContainer>
  <Table variant='simple' color='orange'>

    {/* <TableCaption>Order Details</TableCaption> */}
    <Tfoot>
      <Tr color={'orange.400'}>
        <Th>Order ID</Th>
        <Th>Status</Th>
        <Th>Items Qty</Th>
        <Th isNumeric>Amount</Th>
        <Th>Actions</Th>
      </Tr>
    </Tfoot>
    </Table>
</TableContainer>
     
      </Container>
    );
  };
  
  export default Order;
  