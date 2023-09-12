import transporter from '$lib/components/nodeMailer.server';

export const prerender = false;

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const to = 'avidu97@gmail.com';
			const subject = formData.get('website');
			const body = formData.get('features');
			const email = formData.get('email');
			console.log(body);
			let html = `<h2>Hi!</h2><pre>${body}</pre>`;

			const message = {
				from: email,
				to: to,
				subject: subject,
				text: body,
				html: html,
				replyTo: email,
			};

			const sendEmail = async (message) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (err, info) => {
						if (err) {
							console.error(err);
							reject(err);
						} else {
							resolve(info);
						}
					});
				});
			};

			await sendEmail(message);

			return {
				success: 'Email is sent'
			};
		} catch (error) {
			console.error(error);
		}
	}
};
