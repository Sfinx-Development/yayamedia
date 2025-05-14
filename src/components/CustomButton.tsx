import { Button, styled, Typography, TypographyProps } from "@mui/material";
// import { isTablet } from "./GreyComponent";

interface CustomButtonProps {
  ariaLabel: string;
  handleOnClik: () => void;
  title: string;
  disabled: boolean;
  animation: boolean;
}

export default function CustomButton(props: CustomButtonProps) {
  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  //   const TextingATYP = styled(Typography)<TypographyProps>`
  //     font-family: "atyp-bl-variable", sans-serif;
  //     font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  //   `;
  return (
    <Button
      aria-label={props.ariaLabel}
      variant="outlined"
      disabled={props.disabled}
      sx={{
        backgroundColor: "#1D5880",
        marginTop: 1,
        minWidth: 200,
        width: "fit-content",
        
        color: "#F7F7F7",
        borderRadius: 2,
        paddingY: 1.2,
        textTransform: "none",
        marginY: { xs: 2, md: 0 },
        "&:hover": {
            backgroundColor: "#363434",
          },
      }}
      onClick={() => {
        props.handleOnClik();
      }}
    >
      <Texting
        sx={{
            fontSize: {xs: 18, md: 18, xl: 25 },
          textAlign: "center",

          color: "#F7F7F7",
          position: "relative",
        //   fontWeight: 600, // Fet text för att säkerställa läsbarhet
        //   textTransform: "uppercase",
          letterSpacing: "2px",
        
        }}
      >
        {props.title}
      </Texting>
    </Button>
    //   <Button
    //           aria-label="Navigera till om oss-sidan"
    //           onClick={() => navigate("/yaya")}
    //           sx={{
    //             backgroundColor: "#1D5880",
    //             marginTop: 1,
    //             width: isTablet ? "50%" : "35%",
    //             color: "#F7F7F7",
    //             borderRadius: 2,
    //             paddingY: 1.2,
    //             textTransform: "none",
    //             marginY: { xs: 2, md: 0 },
    //             "&:hover": {
    //               backgroundColor: "#363434",
    //             },
    //           }}
    //         >
    //           <Texting sx={{ fontSize: { md: 18, xl: 25 } }}>Om oss</Texting>
    //         </Button>
  );
}
