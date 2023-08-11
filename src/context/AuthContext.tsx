"use client";
import { SessionProvider } from "next-auth/react";
import { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
