import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function BasicBreadcrumbs({
  present,
  navigation,
}: {
  present: string;
  navigation: { content: string; href: string }[];
}) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {navigation.map((item: { content: string; href: string }) => (
          <Link
            key={item.href}
            underline="hover"
            color="inherit"
            href={item.href}
          >
            {item.content}
          </Link>
        ))}
        <Typography color="text.primary">{present}</Typography>
      </Breadcrumbs>
    </div>
  );
}
