package org.example.boardback.repository.board;

import org.example.boardback.entity.board.Board;
import org.example.boardback.entity.file.BoardFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board,Long> {
}
