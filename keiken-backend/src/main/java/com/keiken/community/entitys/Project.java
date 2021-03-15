package com.keiken.community.entitys;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Project {
    @Id @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String projectName;
    private String technologies;
    @ManyToOne()
    private Developper developper;
}
