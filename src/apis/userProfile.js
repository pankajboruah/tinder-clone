import profileService from "./axiosInstances/profileService";

export const getProfiles = () => profileService.get("tinder/profiles");
