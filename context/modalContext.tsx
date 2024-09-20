import { UserContextType, ProviderProps } from "@/@types";
import { createContext, useState } from "react";

const defaultUserContext: UserContextType = {
    title: null,
    setTitle: () => {},
    isOpen: false,
    setIsOpen: () => {},
};

export const ModalContext = createContext<UserContextType>(defaultUserContext);

export const ContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [title, setTitle] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ title, setTitle, isOpen, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    );
};
