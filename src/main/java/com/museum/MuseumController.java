package com.museum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/artifacts")
public class MuseumController {

    @Autowired
    private ArtifactRepository artifactRepository;

    @GetMapping
    public Page<Artifact> getArtifacts(
            @RequestParam(required = false, defaultValue = "") String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("name").ascending());
        return artifactRepository.findBySearchTerm(search.toLowerCase(), pageable);
    }

    @PostMapping
    public Artifact createArtifact(@RequestBody Artifact artifact) {
        return artifactRepository.save(artifact);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Artifact> updateArtifact(@PathVariable Integer id, @RequestBody Artifact updatedArtifact) {
        return artifactRepository.findById(id)
                .map(existing -> {
                    updatedArtifact.setId(id);
                    return ResponseEntity.ok(artifactRepository.save(updatedArtifact));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void deleteArtifact(@PathVariable Integer id) {
        artifactRepository.findById(id)
                .map(artifact -> {
                    artifactRepository.deleteById(id);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
