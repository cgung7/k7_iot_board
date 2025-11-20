//! board.dto.ts

export interface BoardFileListDto {
  fileId: number;
  originalName: string;
  storedName: string;
  contentType: string;
  fileSize: number;
  downloadUrl: string;
}

export type BoardListReponse = BoardFileListDto[];

export interface BoardFileUpdateReq {
  keepFileIds?: number[];
  files?: File[];
}