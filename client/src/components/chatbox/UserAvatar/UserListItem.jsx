import { Avatar, Box, Text } from "@chakra-ui/react";

const currentUser = localStorage.getItem('userInfo');
let currentUserRole;
if (currentUser !== null){
  const pCurrentUser = JSON.parse(currentUser);
  currentUserRole = pCurrentUser.user.role;
}
let hideChatBox;
// HERE KA EDIT UG CHAT BOX OHHHH
const UserListItem = ({ user, handleFunction }) => {
  console.log(currentUserRole);
  if (currentUserRole === 1) {
    hideChatBox = false;
  } else {
    hideChatBox = user.userRole !== 1;
  }
  return (
    <>
      {!hideChatBox && (
        <Box
        onClick={handleFunction}
        cursor="pointer"
        bg="#E8E8E8"
        _hover={{
          background: "#38B2AC",
          color: "white",
        }}
        w="100%"
        display="flex"
        alignItems="center"
        color="black"
        px={3}
        py={2}
        mb={2}
        borderRadius="lg"
      >
        <Avatar
          mr={2}
          size="sm"
          cursor="pointer"
          name={user.name}
          src={user.userImage}
        />
        <Box>
          <Text>{user.name}</Text>
          <Text fontSize="xs">
            <b>Email : </b>
            {user.email}
          </Text>
        </Box>
      </Box>
      )}
    </>
  );
};

export default UserListItem;
