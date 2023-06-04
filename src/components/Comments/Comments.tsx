import {
  Button,
  Flex,
  Input,
  VStack,
  Avatar,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { Comment } from "@/UI/Comment/Comment";

interface CommentData {
  id: number;
  avatarUrl: string;
  username: string;
  date: Date;
  content: string;
  replyTo?: number;
}

export const Comments = () => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState<string | undefined>(undefined);

  const handleAddComment = () => {
    const now = new Date();
    const comment: CommentData = {
      id: comments.length + 1,
      avatarUrl: "https://via.placeholder.com/50",
      username: "John Doe",
      date: now,
      content: newComment,
      replyTo: undefined,
    };
    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <VStack align="stretch" spacing={4}>
      {comments.length > 0 && ( // Если есть комментарии, выводим общее количество
        <Text fontWeight="bold">
          {comments.length} Comment{comments.length !== 1 && "s"}
        </Text>
      )}
      <Flex alignItems="center">
        <Avatar src="https://via.placeholder.com/60" size="md" mr={2} />
        <Input
          placeholder="Add a comment"
          size="lg"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button onClick={handleAddComment} ml={2}>
          Add Comment
        </Button>
      </Flex>
      {comments.map((comment, index) => (
        <Box key={index} mt={4}>
          <Comment // Передаем имя пользователя, на чей комментарий отвечаем в компонент Comment
            {...comment}
            replyTo={replyTo === comment.username ? "" : comment.username}
            // Если пользователь отвечает самому себе, сбрасываем состояние replyTo,
            // иначе передаем в качестве значения поля replyTo имя пользователя, на чей комментарий отвечаем
          />
          <Button
            size="sm"
            variant="link"
            onClick={() => setReplyTo(comment.username)}
            mt={2}
          >
            Reply
          </Button>
        </Box>
      ))}
    </VStack>
  );
};
