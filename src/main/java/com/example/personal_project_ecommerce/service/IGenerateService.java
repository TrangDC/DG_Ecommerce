package com.example.personal_project_ecommerce.service;

import java.util.List;
import java.util.Optional;

public interface IGenerateService<T> {

    Iterable<T> findAll();

    Optional<T> findById(Long id);

    T save(T t);

}
