package com.example.personal_project_ecommerce.repository;

import com.example.personal_project_ecommerce.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
