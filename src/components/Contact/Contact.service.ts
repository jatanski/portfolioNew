export default class ContactService {
	async sendMessage(senderMailAdress: string, messageToSend: string) {
		try {
			const url = "https://fathomless-bayou-45906.herokuapp.com/sendMessageFromBussinessCard";
			const body = { senderMailAdress, messageToSend };

			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});

			const res = await response.json();

			if (res) return true;

			console.log(res);
		} catch (error) {
			console.error(error);
		}
	}

	validateEmail(email: string) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
}
