"use client";
import { useContext } from "react";
import Aside from "@/components/aside";
import { ModalContext } from "@/context/modal-context";
import Link from "next/link";
/* <Link href="/about">about</Link> */

export default function Home() {
  // const { open, setOpen } = useContext(ModalContext);
  // console.log(open);
  return <Aside />;
}
