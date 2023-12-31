import {
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar,
	IonPage,
} from "@ionic/react";
import React from "react";

const SettingsPage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Settings</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">This is the settings page</IonContent>
		</IonPage>
	);
};

export default SettingsPage;
