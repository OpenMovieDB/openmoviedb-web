import React from "react";
import { Avatar, Box, Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { FiFlag } from "react-icons/fi";
import { FaReply } from "react-icons/fa";

type CommentProps = {
  avatarUrl: string;
  username: string;
  date: any;
  content: string;
  replyTo: any;
};

export const Comment: React.FC<CommentProps> = ({
  avatarUrl,
  username,
  date,
  content,
}) => {
  return (
    <Flex alignItems="center" my={4}>
      <Avatar size="md" src={avatarUrl} mr={4} />
      <Box flex={1}>
        <Text fontWeight="bold">{username}</Text>
        <Text color="gray.500" fontSize="sm" mb={2}>
          {date}
        </Text>
        <Text>{content}</Text>
      </Box>
      <Tooltip label="Report comment">
        <IconButton aria-label="Report comment" icon={<FiFlag />} />
      </Tooltip>
      <IconButton aria-label="Reply to comment" icon={<FaReply />} ml={2} />
    </Flex>
  );
};
