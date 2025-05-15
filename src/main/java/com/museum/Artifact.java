package com.museum;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "artifacts")
@Data
public class Artifact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String code;
    private String name;
    private String category;
    private String material;
    private String period;

    @Column(name = "author_or_origin")
    private String authorOrOrigin;

    @Column(name = "short_description")
    private String shortDescription;

    @Column(name = "photo_url")
    private String photoUrl;

    @Column(name = "museum_location")
    private String museumLocation;

    @Column(name = "related_items")
    private String relatedItems;
}
