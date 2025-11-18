//! board.path.ts

import { BASE } from "../common/base.path";

const BOARD_FREFIX = `${BASE}/boards`;

export const BOARD_PATH = {
  //? cf) SpringBoot의 controller는 class 파일 단위의 Mapping값 설정 가능
  //    VS React HTTP의 경로는 완전한 경로값을 전달
  ROOT: BOARD_FREFIX,

  LIST: BOARD_FREFIX,
  CREATE: BOARD_FREFIX,

  BY_ID: (boardId: number) => `${BOARD_FREFIX}/${boardId}`,

  // 카테고리
  CATEGORY: (categoryId: number) => `${BOARD_FREFIX}/category/${categoryId}`,
  COUNT_BY_CATEGORY: `${BOARD_FREFIX}/category-count`,

  // 검색
  SEARCH: `${BOARD_FREFIX}/search`,

  // 페이징 조회
  PAGE: `${BOARD_FREFIX}/page`,

  // 내가 쓴 글
  MY_BOARDS: `${BOARD_FREFIX}/me`,

  // 조회수 증가
  VIEW: (boardId: number) => `${BOARD_FREFIX}/${boardId}/view`,

  // 좋아요 기능
  LIKE: (boardId: number) => `${BOARD_FREFIX}/${boardId}/view`,
  LIKE_CANCEL: (boardId: number) => `${BOARD_FREFIX}/${boardId}/like/cancel`,
  LIKE_COUNT: (boardId: number) => `${BOARD_FREFIX}/${boardId}/count`,

  // 게시글 고정 (pin)
  PIN: (boardId: number) => `${BOARD_FREFIX}/${boardId}/pin`,
  UNPIN: (boardId: number) => `${BOARD_FREFIX}/${boardId}/unpin`,
  PINNED_LIST: `${BOARD_FREFIX}/pinned`,

  // 신고
  REPORT: (boardId: number) => `${BOARD_FREFIX}/${boardId}/report`,

  // 임시 저장
  DRAFT: `${BOARD_FREFIX}/draft`,
  DRAFT_BY_ID: (draftId: number) => `${BOARD_FREFIX}/draft/${draftId}`,

  // 통계
  STATS: `${BOARD_FREFIX}/stats`,
  STATS_DAILY: `${BOARD_FREFIX}/stats/dayily`,
  STATS_MONTHLY: `${BOARD_FREFIX}/stats/monthly`,
  STATS_GENDER: `${BOARD_FREFIX}/stats/gender`,
}