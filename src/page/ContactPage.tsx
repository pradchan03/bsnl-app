import {
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar,
	IonPage,
} from "@ionic/react";
import React from "react";

const ContactPage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Contacts</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">This is the contact page</IonContent>
		</IonPage>
	);
};

export default ContactPage;
