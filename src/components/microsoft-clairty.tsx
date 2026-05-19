"use client";
import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

export default function MsClarity() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            Clarity.init('wqebbe6s61');
        }
      }, []);

    return null;
}