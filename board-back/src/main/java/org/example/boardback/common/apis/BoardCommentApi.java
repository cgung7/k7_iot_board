package org.example.boardback.common.apis;

public class BoardCommentApi {
    private BoardCommentApi() {}

    // ================================================================//
    // 4. Comment  //
    // ================================================================//

    // + 댓글 기능
    public static final String ROOT = ApiBase.BASE + "/boards/{boardId}/comments";
    public static final String COMMENTS_BY_ID = ROOT + "/{commentId}";
}
