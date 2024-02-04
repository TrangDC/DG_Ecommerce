package com.example.personal_project_ecommerce.controller;

import com.example.personal_project_ecommerce.model.Game;
import com.example.personal_project_ecommerce.service.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/games")
public class GameController {

    @Autowired
    private IGameService gameService;

    @GetMapping
    public ResponseEntity<Iterable<Game>>findAllGames() {
        List<Game> games = (List<Game>) gameService.findAll();
        if (games.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(games, HttpStatus.OK);
    }
}
