// user.api.ts

import type { ApiResponse } from "@/types/common/ApiResponse";
import { API_ROUTES } from "./common/apiMappingPattern";
import { publicApi } from "./common/axiosInstance";
import type { UserDetail, UserList } from "@/types/user/user.type";

export const userApi = {
  getUser: async (userId: number) : Promise<UserDetail> => {
    const res = await publicApi.get<ApiResponse<UserDetail>>(
    API_ROUTES.USERS.DETAIL(userId)
    )
  return res.data.data;
}

getUserList: async (userId: number) :Promise<UserList> => {
    const res = await publicApi.get<ApiResponse<UserDetail>>(
    API_ROUTES.USERS.DETAIL(userId)
  )
  return res.data.data;
}
}
