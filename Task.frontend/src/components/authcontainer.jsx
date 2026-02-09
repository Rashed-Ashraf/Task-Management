import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function AuthContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            display: "flex",
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#f5f5f5",
              borderRadius: "20px",
            }}
          >
            {children} {/* Login form goes here */}
          </Box>

          {/* Right side: Image + Animated Text */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#cfe8fc",
              color: "#fff",
              textAlign: "center",
              p: 4,
            }}
          ></Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
