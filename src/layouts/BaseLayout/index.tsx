"use client";

import { FC, ReactNode, Suspense } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Header from "./components/Header";
import useStyles from "./style";
interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div>
      <Header />
      <main className={classes.wrapper}>
        <Suspense>{children}</Suspense>
      </main>
    </div>
  );
};

export default BaseLayout;
