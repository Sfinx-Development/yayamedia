import {
  Alert,
  AlertColor,
  Box,
  Checkbox,
  FormControlLabel,
  Snackbar,
  styled,
  TextField,
  Typography,
  TypographyProps,
} from "@mui/material";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useScreenSize } from "../ScreenSizeContext";
import CustomButton from "./CustomButton";
import { Radio } from "@mui/material";
// import { useLocation } from "react-router-dom";
import { useEffect } from "react";


type LocationState = {
    preselect?: string;
  };

  type OffertFormProps = {
    locationState?: LocationState;
  };
  
  


// emailjs.init("C8CxNnxZg6mg-d2tq");

export default function OffertForm({ locationState }: OffertFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //   const [services, setServices] = useState<string[]>([]);
  const [services, setServices] = useState<{ [key: string]: string }>({});

  const [error, setError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] =
    useState<AlertColor>("success");
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);

  const { isMobile } = useScreenSize();


   const Texting = styled(Typography)<TypographyProps>`
      font-family: "H3", sans-serif;
      font-variation-settings: "wght" 300;
    `;
  
    const TextingATYP = styled(Typography)<TypographyProps>`
      font-family: "atyp-bl-variable", sans-serif;
      font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
    `;

    const groupedServices = {
        "Sociala medier": ["Klick", "Klack", "Boom"],
        Webdesign: ["Klick", "Klack", "Boom"],
        "Grafisk profil": ["Klick", "Klack", "Boom"],
        Podcast: ["Klick", "Klack", "Boom"], // <- Här också utan mellanslag
      };

 useEffect(() => {
  if (locationState?.preselect) {
    const [categoryRaw, optionRaw] = locationState.preselect.split(":");
    const category = categoryRaw?.trim();
    const option = optionRaw?.trim();
    if (category && option) {
      setServices({ [category]: option });
    }
  }
}, [locationState]);


  //   const serviceChoices: string[] = [
  //     "Byggstäd",
  //     "Hemstäd",
  //     "Flyttstäd",
  //     "Fönsterputs",
  //     "Företagsstäd",
  //     "Trappstäd",
  //   ];

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyPolicyChecked(event.target.checked);
  };

  const handleServiceChange = (category: string, selectedOption: string) => {
    setServices((prev) => ({
      ...prev,
      [category]: prev[category] === selectedOption ? "" : selectedOption, // Toggle logik
    }));
  };

  //   const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const selectedService = event.target.value;
  //     setServices((prevServices) =>
  //       prevServices.includes(selectedService)
  //         ? prevServices.filter((service) => service !== selectedService)
  //         : [...prevServices, selectedService]
  //     );
  //   };

  const handleSubmit = () => {
    setError(false);
    if (
      name !== "" &&
      message !== "" &&
      email !== "" &&
      phone !== "" &&
      Object.values(services).some((val) => val !== "")
    ) {
      const selectedServices = Object.entries(services)
        .filter(([, value]) => value !== "")
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

      const templateParams = {
        to_name: "Städtjejerna",
        from_name: name,
        reply_to: email,
        message: `Telefon: ${phone}
  Email: ${email}
  Tjänster:
  ${selectedServices}
  
  Meddelande: ${message}`,
      };

      emailjs
        .send("service_52wg30w", "template_itru98a", templateParams)
        .then(() => {
          setSnackbarSeverity("success");
          setSnackbarMessage("Förfrågan skickad!");
          setOpenSnackbar(true);
          setEmail("");
          setName("");
          setMessage("");
          setPhone("");
          setServices({});
        })
        .catch(() => {
          setSnackbarSeverity("error");
          setSnackbarMessage(
            "Något gick fel när förfrågan skickades. Försök igen."
          );
          setOpenSnackbar(true);
        });
    } else {
      setError(true);
    }
  };

  const handleSnackbarClose = (
    _event: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url(pexels-shvetsa-5217915.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: { xs: 0, md: 0 },
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          width: "100%",
          maxWidth: { xs: "90%", md: "600px" },
          padding: { xs: 15, sm: 15, md: 15, xl: 15 },

          display: "flex",
          flexDirection: "column",
          gap: 3,
          backdropFilter: "blur(5px)", // Subtil suddning för att ge kontrast
        }}
      >
        <Texting
          variant={isMobile ? "h4" : "h3"}
          sx={{
            color: "#333",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: 2,
            marginTop: 4,
            fontSize: { xs: 28, md: 42 },
          }}
        >
          Offertförfrågan
        </Texting>

        {error && (
          <TextingATYP
            color="error"
            sx={{
              textAlign: "center",
              fontSize: "0.9rem",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            Vänligen fyll i alla obligatoriska fält
          </TextingATYP>
        )}

        <Snackbar open={openSnackbar} autoHideDuration={6000}>
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>

        <TextField
          label="Namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              color: "rgba(0, 0, 0, 0.8)",
            },
            input: {
              color: "rgba(0, 0, 0, 0.8)",
            },
            label: {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />
        <TextField
          label="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              color: "rgba(0, 0, 0, 0.8)",
            },
            input: {
              color: "rgba(0, 0, 0, 0.8)",
            },
            label: {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />
        <TextField
          label="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              color: "rgba(0, 0, 0, 0.8)",
            },
            input: {
              color: "rgba(0, 0, 0, 0.8)",
            },
            label: {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
          }}
        >
          {Object.entries(groupedServices).map(([category, options]) => (
            <Box key={category} sx={{ marginBottom: 2 }}>
              <Texting
                variant="h6"
                sx={{ marginBottom: 1, fontWeight: "bold", color: "#363434" }}
              >
                {category}
              </Texting>
              <Box>
                {options.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Radio
                        onClick={() => handleServiceChange(category, option)}
                        checked={services[category] === option}
                        value={option}
                        sx={{
                          color: "rgba(0, 0, 0, 0.6)",
                          "&.Mui-checked": {
                            color: "rgba(0, 0, 0, 0.6)",
                          },
                        }}
                      />
                    }
                    label={option}
                    sx={{ color: "rgba(0, 0, 0, 0.8)" }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              // backgroundColor: "red",
              flexWrap: "wrap",
              marginLeft: { xs: 1.5 },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {serviceChoices.map((service, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={services.includes(service)}
                    onChange={handleServiceChange}
                    value={service}
                    sx={{
                      color: "rgba(0, 0, 0, 0.6)",
  
                      "&.Mui-checked": {
                        color: "rgba(0, 0, 0, 0.6)",
                      },
                    }}
                  />
                }
                label={service}
                sx={{
                  flex: "1 1 45%",
                  borderRadius: 1,
                  color: "rgba(0, 0, 0, 0.8)",
                  // backgroundColor: "rgba(255, 255, 255, 0.5)",
                }}
              />
            ))}
          </Box> */}

        <TextField
          label="Meddelande"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          multiline
          rows={4}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              color: "rgba(0, 0, 0, 0.6)",
            },
            textarea: {
              color: "rgba(0, 0, 0, 0.8)",
            },
            label: {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={privacyPolicyChecked}
              onChange={handleCheckboxChange}
              sx={{
                color: "rgba(0, 0, 0, 0.6)",
                "&.Mui-checked": {
                  color: "rgba(0, 0, 0, 0.6)",
                },
              }}
            />
          }
          label={
            <TextingATYP sx={{ fontSize: 13, color: "rgba(0,0,0,0.8)" }}>
              Jag samtycker till att yaya Media behandlar mina personuppgifter i
              enlighet med vår{" "}
              <a href="/privacy-policy" style={{ color: "rgba(0,0,0,0.8)" }}>
                integritetspolicy
              </a>
              .
            </TextingATYP>
          }
        />
        <CustomButton
          title="Skicka förfrågan"
          ariaLabel="Skicka formulär"
          disabled={!privacyPolicyChecked}
          handleOnClik={handleSubmit}
          animation={false}
        />
      </Box>
    </Box>
  );
}
