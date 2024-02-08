package com.example.personal_project_ecommerce.service.impl;

import com.example.personal_project_ecommerce.model.Game;
import com.example.personal_project_ecommerce.repository.GameRepository;
import com.example.personal_project_ecommerce.service.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GameService implements IGameService {

    @Autowired
    private GameRepository gameRepository;

    @Override
    public Iterable<Game> findAll() {
        return gameRepository.findAll();
    }

    @Override
    public Optional<Game> findById(Long id) {
        return gameRepository.findById(id);
    }

    @Override
    public Game save(Game game) {
        return gameRepository.save(game);
    }

    public Iterable<Game> findAllByWord(String word) {
        return gameRepository.findAllByTitleContainingIgnoreCase(word);
    }
}

