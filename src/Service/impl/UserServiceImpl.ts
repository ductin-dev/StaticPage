import { GET_ALL_USER, GET_USER_PROFILE } from "@application/api/endpoint";

import { API } from "@service/helper/APIHelper";
import { UserService } from "@service/UserService";

export class UserServiceImpl implements UserService {
    getUserProfile = (userId: string) => {
        API
            .get(GET_USER_PROFILE.replace("{userId}", userId))
            .then((response: any) => {
            })
            .catch((err) => {
            });
    };

    getAllUser = () => {
        API
            .get(GET_ALL_USER)
            .then((response: any) => {
            })
            .catch((err) => {
            });
    };
};
