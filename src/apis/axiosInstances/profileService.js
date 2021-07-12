import axios from "axios";

const profileService = axios.create({
	baseURL: "https://tinder-clone-backend-01.herokuapp.com/",
});

export default profileService;
