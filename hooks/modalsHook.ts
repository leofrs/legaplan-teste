"use client";

import { useState } from "react";

export const ModalAddHook = () => {
    const [title, setTitle] = useState<string | null>(null);
    const [addIsOpen, setAddIsOpen] = useState<boolean>(false);

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
