import {
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar,
	IonPage,
} from "@ionic/react";
import React from "react";

const TempPage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Templates</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				This is the templates page
			</IonContent>
		</IonPage>
	);
};

export default TempPage;
