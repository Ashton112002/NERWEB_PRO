import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Stack,
  Text,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { ChatState } from '../../context/ChatProvider';
import ChatLoading from './ChatLoading';
import { getSender } from '../../config/ChatLogics';
import GroupChatModal from './miscellaneous/GroupChatModal';
let REACT_APP_API_URL = process.env.REACT_APP_API_URL;
let dataImg;
const MyChats = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();

  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  const toast = useToast();
  const { onClose } = useDisclosure();

  const fetchChats = async () => {
    try {
      console.log("User: ", user);
      console.log("chats: ", chats);
      console.log("selectedChat: ", selectedChat);

      const response = await fetch(`${REACT_APP_API_URL}/api/chat`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      const data = await response.json();
      console.log("GET IMAGE NAME HEREEEEEE", data);
      // if (data[0].users[0].userRole === 0) {
      //   dataImg = data[1].users[1].userImage;
      // } else {
      //   dataImg = data[0].users[0].userImage;
      // }
      // console.log("Verifiy Image: ", dataImg)
      // dataImg = data[0].users[1].pic;
      
      //dataImg = "sample.jpg";
      // let sourcePath = "/Profile/";
      // dataImg = sourcePath + dataImg;
      // console.log("DATA IMAGE:", dataImg);
      
      // console.log("DATA IAMGE:", dataImg)
      setChats(data);
      onClose(); // Close the side drawer
    } catch (error) {
      return toast({
        title: 'Error Occured!',
        description: 'Failed to Load the Search Results',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom-left',
        variant: 'solid'
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem('userInfo')));
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? 'none' : 'flex', md: 'flex' }}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: '100%', md: '31%' }}
      borderRadius="lg"
      borderWidth="1px">
      <Box
        pb={3}
        px={3}
        fontSize={{ base: '30px', md: '32px' }}
        fontFamily="Work sans"
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center">
        My Chats
        {/* <GroupChatModal>
          <Button
            display="flex"
            fontSize={{ base: '17px', md: '10px', lg: '17px' }}
            rightIcon={<AddIcon />}>
            New Group Chat
          </Button>
        </GroupChatModal> */}
      </Box>

      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden">
        {chats ? (
          <Stack overflowY="scroll">
            {chats.map(chat => (

              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? '#679641' : '#E8E8E8'}
                color={selectedChat === chat ? 'white' : 'black'}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}>
                <Text>
                <img src={`${chat.users[0].userRole == 1 ? chat.users[0].userImage : chat.users[1].userImage}`} alt='Image' style={{width:'50px', borderRadius: '50%', border: '1px solid #fff', display: 'inline-flex', marginRight: '10px'}}/>
                {!chat.isGroupChat ? loggedUser && getSender(loggedUser, chat.users) : chat.chatName}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
