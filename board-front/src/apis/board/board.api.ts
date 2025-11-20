// boardsApi.ts

import type { ApiResponse } from "@/types/common/ApiResponse"
import { publicApi } from "../common/axiosInstance"
import { BOARD_FILE_PREFIX } from "./board.file.path";
import type { BoardListReponse } from "@/types/board/board.dto";

export const boardApi = {
  uploadBoardFiles: async (boardId: number, formData: FormData) => {
    const res = await publicApi.post<ApiResponse<void>>(
      BOARD_FILE_PREFIX.FILES_BY_BOARD(boardId),
      formData,
      { headers: { "Content-Type": "multipart/form-data "} }
    );
    return res.data.data;
  },

  getFileByBoard: async (boardId: number) => {
    const res = await publicApi.get<ApiResponse<BoardListReponse>>(
      BOARD_FILE_PREFIX.FILES_BY_BOARD(boardId)
    );
    return res.data.data;
  },

  download: async (fileId: number): Promise<Blob> => {
    const res = await publicApi.get<Blob>(BOARD_FILE_PREFIX.DOWNLOAD(fileId), {
      responseType: 'blob'
    });
    return res.data;
  },

  deleteFileByBoard: async (fileId: number): Promise<void> => {
    await publicApi.delete(BOARD_FILE_PREFIX.FILE_BY_ID(fileId));
  },

  updateFileByBoard: async (boardId: number, formData: FormData) => {
    const res = await publicApi.put<ApiResponse<void>>(
      BOARD_FILE_PREFIX.FILES_BY_BOARD(boardId),
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return res.data.data;
  },
}