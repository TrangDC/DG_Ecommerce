package com.example.personal_project_ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "games")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private Long price;

    private String releaseDate;

    private String image;

    // Thiết lập giá trị mặc định cho rating, totalDownload và isActive
    @Column(columnDefinition = "DOUBLE DEFAULT 0.0")
    private Double rating;

    @Column(columnDefinition = "BIGINT DEFAULT 0")
    private Long totalDownload;

    @Column(columnDefinition = "BOOLEAN DEFAULT true")
    private boolean isActive;

    @ManyToOne
    @JoinColumn(name = "developer_id")
    private Developer developer;

    @ManyToMany
    @JoinTable(
            name = "game_categories",
            joinColumns = @JoinColumn(name = "game_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private Set<Category> categories = new HashSet<>();

}
