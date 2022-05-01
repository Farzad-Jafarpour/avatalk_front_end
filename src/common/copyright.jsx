import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright(props) {
  const { companyname } = props;
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        {companyname}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
