import Button from "@mui/material/Button";

export default function BlueButton({ children, ...props }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#3f74ff",
        textTransform: "none",
        marginTop: "5px",
        borderRadius: "10px",
        fontWeight: "600",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
