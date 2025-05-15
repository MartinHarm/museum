package com.museum;

import com.museum.Artifact;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ArtifactRepository extends JpaRepository<Artifact, Integer> {

    @Query("SELECT a FROM Artifact a WHERE " +
            "LOWER(a.name) LIKE %:search% OR " +
            "LOWER(a.category) LIKE %:search% OR " +
            "LOWER(a.material) LIKE %:search% OR " +
            "LOWER(a.authorOrOrigin) LIKE %:search% OR " +
            "LOWER(a.shortDescription) LIKE %:search%")
    Page<Artifact> findBySearchTerm(String search, Pageable pageable);
}
