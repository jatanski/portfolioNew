import { FormEvent, MouseEvent } from "react";

export interface ContactFormProps {
	sendMessage: (e: MouseEvent<HTMLButtonElement>) => void;
	senderMailAdress: string;
	messageToSend: string;
	onChangeSenderMailAdress: (e: FormEvent<HTMLInputElement>) => void;
	onChangeMessageToSend: (e: FormEvent<HTMLInputElement>) => void;
	isShowFetchLoader: boolean;
}

export interface ContactViewProps {
	contactClass: string;
	sendMessage: (e: MouseEvent<HTMLButtonElement>) => void;
	senderMailAdress: string;
	messageToSend: string;
	onChangeSenderMailAdress: (e: FormEvent<HTMLInputElement>) => void;
	onChangeMessageToSend: (e: FormEvent<HTMLInputElement>) => void;
	isShowFetchLoader: boolean;
}
