package com.example.personal_project_ecommerce.repository;

import com.example.personal_project_ecommerce.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

    Iterable<Game> findAllByTitleContainingIgnoreCase(String word);

}
