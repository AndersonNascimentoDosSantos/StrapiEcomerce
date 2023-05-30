import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme"


const Footer = () => {
    const { palette: { neutral } } = useTheme();

    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clam(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}>
                        ECOMMER
                    </Typography>
                    <div>
                        Lorem ipsum mi lacinia tempus conubia velit convallis, nec pulvinar adipiscing mollis odio imperdiet aliquam condimentum, accumsan congue ut et nisl donec. platea iaculis justo cubilia hac faucibus hac habitasse pulvinar, gravida ullamcorper tellus viverra id dui neque sapien id, facilisis aenean fusce et erat netus vivamus.</div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Carrers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms & Condictions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Return & Refunds</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Contact Us
                    </Typography>
                    <Typography mb="30px">50 north Whatever blvd, Washington, DC 10501</Typography>
                    <Typography mb="30px">Email: something@gmail.com</Typography>
                    <Typography mb="30px">222 333 444</Typography>
                </Box>
            </Box>
        </Box>
    )

}

export default Footer;