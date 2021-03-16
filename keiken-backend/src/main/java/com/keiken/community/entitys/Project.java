package com.keiken.community.entitys;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Project {
    @Id @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String projectName;
    @Transient
    private List<String> technologies;
    @ManyToOne()
    private Developper developper;
}
