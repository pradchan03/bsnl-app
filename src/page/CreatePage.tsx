import {
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar,
	IonPage,
} from "@ionic/react";
import React from "react";

const HomePage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Create Conference</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				This is the create conference page
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
