// import {
// 	IonContent,
// 	IonHeader,
// 	IonTitle,
// 	IonToolbar,
// 	IonPage,
// 	IonItem,
// 	IonGrid,
// 	IonCol,
// 	IonRow,
// 	IonButton,
// 	IonCard,
// } from "@ionic/react";
// import React from "react";
// import StartConfBtn from "../component/StartConfBtn";
// import Calendar from "../component/Calendar";

// const HomePage: React.FC = () => {
// 	return (
// 		<>
// 			<IonPage>
// 				<IonHeader>
// 					<IonToolbar>
// 						<IonTitle>Home</IonTitle>
// 					</IonToolbar>
// 				</IonHeader>
// 			</IonPage>
// 		</>
// 	);
// };

// export default HomePage;

import {
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar,
	IonPage,
	IonGrid,
	IonRow,
	IonCol,
} from "@ionic/react";
import React from "react";
import StartConfBtn from "../component/StartConfBtn";
import Calendar from "../component/Calendar";
import "../theme/home.css";

const HomePage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonGrid>
					<IonRow>
						<IonCol>
							<div className="start-conf-btn-container">
								<StartConfBtn />
							</div>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<div className="calendar-container">
								<Calendar />
							</div>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
