import { Flex, Link, Text } from "@chakra-ui/react";

const settingsElements = [
    {
        title: "Настройки аккаунта",
        href: "#",
    },
    { title: "Безопасность", href: "#" },
    { title: "Выход", href: "#" },
];

export const NavBar = () => {
    return (
        <Flex flexDirection="column" gap="30px" ml="30px">
            {settingsElements.map((item, id) => (
                <Link key={id} href={item.href}>
                    <Text
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="27px"
                        bg="transparent"
                        _hover={{
                            background: "rgba(0, 0, 0, 0.4)",
                            //padding: "6px 20px",
                            borderRadius: "50px",
                            textDecoration: "none",
                        }}
                    >
                        {item.title}
                    </Text>
                </Link>
            ))}
        </Flex>
    );
};
