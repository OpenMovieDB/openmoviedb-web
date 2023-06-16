import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { RatingProps } from "@/types/IMovieRatingProps";

const Rating: FC<RatingProps> = ({
    rating = 0,
    className,
    hasBg,
    ...props
}) => {
    const ratingOMDB = Number(rating);

    return (
        <Box className={className} {...props}>
            <Flex alignItems="center">
                <Box
                    mr={1}
                    p="2px 10px"
                    borderRadius="full"
                    style={{
                        backgroundColor: hasBg
                            ? `${rating >= 6 ? "#00950F" : rating < 6 ? "#D32F2F" : "#5F5F5F"
                            }`
                            : "transparent",
                    }}
                >
                    <Flex alignItems="center">
                        <Text
                            fontSize="sm"
                            fontWeight="bold"
                            style={{
                                color: hasBg
                                    ? "white"
                                    : `${rating >= 6
                                        ? "#00950F"
                                        : rating < 6
                                            ? "#D32F2F"
                                            : "#5F5F5F"
                                    }`,
                            }}
                        >
                            {ratingOMDB.toFixed(1)}
                        </Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default Rating;
