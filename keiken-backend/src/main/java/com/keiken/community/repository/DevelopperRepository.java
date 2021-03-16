package com.keiken.community.repository;

import com.keiken.community.entitys.Developper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface DevelopperRepository extends JpaRepository<Developper, Long> {
}
