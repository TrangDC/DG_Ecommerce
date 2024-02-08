package com.example.personal_project_ecommerce.controller;

import com.example.personal_project_ecommerce.model.Game;
import com.example.personal_project_ecommerce.service.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
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

    @GetMapping("/{id}")
    public ResponseEntity<Game> findGameById(@PathVariable String id) {
        Optional<Game> gameOptional = gameService.findById(Long.valueOf(id));

        if (!gameOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(gameOptional.get(), HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<Game> saveGame(@RequestBody Game game) {
        return new ResponseEntity<>(gameService.save(game), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Game> updateGame(@RequestBody Game game, @PathVariable Long id) {
        Optional<Game> gameOptional = gameService.findById(id);

        if (!gameOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        game.setId(gameOptional.get().getId());
        return new ResponseEntity<>(gameService.save(game), HttpStatus.OK);
    }

}
