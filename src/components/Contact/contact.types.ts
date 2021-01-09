import { MouseEvent } from "react";

export interface ContactFormProps {
	sendMessage: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface ContactViewProps {
	contactClass: string;
	sendMessage: (e: MouseEvent<HTMLButtonElement>) => void;
}
