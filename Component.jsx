function Component() {
  return (
    <Box
      id="my-div"
      position="relative"
      w="400px"
      h="200px"
      p="10px"
    >
      <VStack
        id="1"
        border="1px solid"
        position="absolute"
        w="75%"
        h="32%"
        top="0px"
        left="0px"
      >
        <Center w="full" h="20px" backgroundColor="yellow">Player 1</Center>
      </VStack>
      <VStack
        id="2"
        border="1px solid"
        position="absolute"
        w="23%"
        h="65%"
        top="0px"
        right="0px"
      >
        <Center w="full" h="20px" backgroundColor="yellow">Player 2</Center>
      </VStack>
      <HStack
        id="3"
        position="absolute"
        w="50%"
        h="30%"
        top="35%"
        left="25%"
      >
        <VStack w="full" h="full" border="1px solid">
           <Center w="full" h="20px" backgroundColor="yellow">Draw Crads</Center>
        </VStack>
        <VStack w="full" h="full" border="1px solid">
           <Center w="full" h="20px" backgroundColor="yellow">Cards</Center>
        </VStack>
      </HStack>
      <VStack
        id="4"
        border="1px solid"
        position="absolute"
        w="23%"
        h="65%"
        left="0px"
        bottom="0px"
      >
        <Center w="full" h="20px" backgroundColor="yellow">Player 3</Center>
      </VStack>
      <VStack
        id="5"
        border="1px solid"
        position="absolute"
        w="75%"
        h="32%"
        right="0px"
        bottom="0px"
     >
       <Center w="full" h="20px" backgroundColor="yellow">You</Center>
     </VStack>
    </Box>
  )
}
