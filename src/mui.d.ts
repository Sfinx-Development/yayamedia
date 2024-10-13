// src/mui.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true; // This allows the 'xxl' breakpoint to be recognized
  }
}
