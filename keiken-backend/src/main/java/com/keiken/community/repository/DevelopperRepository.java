package com.keiken.community.repository;

import com.keiken.community.entitys.Developper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface DevelopperRepository extends JpaRepository<Developper, Long> {
}
