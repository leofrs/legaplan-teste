"use client";

//import { ModalType } from "@/@types";
import { useState } from "react";

export const ModalAddHook = () => {
    const [title, setTitle] = useState<string | null>(null);
    const [addIsOpen, setAddIsOpen] = useState<boolean>(false);

    //const modal: ModalType = { title, setTitle, isOpen, setIsOpen };

    return {
        title,
        setTitle,
        addIsOpen,
        setAddIsOpen,
    };
};

export const ModalDeleHook = () => {
    const [delIsOpen, setDelIsOpen] = useState<boolean>(false);

    return { delIsOpen, setDelIsOpen };
};
