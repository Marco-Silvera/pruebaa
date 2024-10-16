import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA-cMGESxpmrNOHGoXA1_YzuiTSrbIsVr8",
    authDomain: "my-auth-domain",
    projectId: "test-cacab",
};

export const app = initializeApp(firebaseConfig);