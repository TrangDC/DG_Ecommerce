package com.example.p_project.repository;

import com.example.p_project.models.ERole;
import com.example.p_project.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
