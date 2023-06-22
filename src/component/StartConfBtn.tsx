import { IonContent, IonPage, IonButton } from "@ionic/react";
import React from "react";

const StartConfBtn: React.FC = () => {
	return (
		<IonPage>
			<IonContent className="ion-padding">
				<IonButton expand="block">Start Conference</IonButton>
			</IonContent>
		</IonPage>
	);
};

export default StartConfBtn;
