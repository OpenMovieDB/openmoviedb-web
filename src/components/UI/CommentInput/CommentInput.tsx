import React from "react";
import { Box, IconButton, Input } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";

type CommentInputProps = {
  avatarSrc: string;
  onCommentSubmit: (comment: string) => void;
};

const CommentInput: React.FC<CommentInputProps> = ({
  avatarSrc,
  onCommentSubmit,
}) => {
  const [comment, setComment] = React.useState("");

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      onCommentSubmit(comment.trim());
      setComment("");
    }
  };

  return (
    <Box py={4} borderTopWidth={1}>
      <Input
        placeholder="Add a comment..."
        value={comment}
        onChange={handleCommentChange}
        size="md"
        borderRadius={999}
        px={4}
        py={2}
        mr={4}
        bg="white"
        _focus={{
          boxShadow: "0 0 0 1px var(--chakra-colors-blue-500)",
        }}
        _placeholder={{ color: "gray.400" }}
        _hover={{ _placeholder: { color: "gray.500" } }}
        _disabled={{ opacity: 0.4, cursor: "not-allowed" }}
        sx={{
          "&::-webkit-input-placeholder": {
            /* WebKit, Blink, Edge */
            fontFamily: "inherit",
            opacity: 0.5,
          },
          "&::-moz-placeholder": {
            /* Mozilla Firefox 19+ */
            fontFamily: "inherit",
            opacity: 0.5,
          },
          "&::-ms-placeholder": {
            /* Microsoft Edge */
            fontFamily: "inherit",
            opacity: 0.5,
          },
        }}
      />
      <IconButton
        aria-label="Send comment"
        icon={<FiSend />}
        onClick={handleCommentSubmit}
        bg="blue.500"
        borderRadius={999}
        color="white"
        _hover={{ bg: "blue.600" }}
        _active={{
          bg: "blue.700",
          transform: "scale(0.95)",
        }}
        sx={{ flexShrink: 0 }}
      />
    </Box>
  );
};

export default CommentInput;
