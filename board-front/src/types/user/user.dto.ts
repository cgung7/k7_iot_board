// user.dto.ts

// Dto request 타입: 백엔드로 보내는 request Dto
export interface UserCreateRequest {

}

// 단일 유저 상세 정보 (GET /users/{userId})
export interface UserDetailResponse {

}

// 리스트항목
export interface UserListItemResponse {

}

// 리스트 응답 데이터
export type UserListResponse = UserListItemResponse[];
