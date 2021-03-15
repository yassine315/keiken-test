package com.keiken.community.config;

import com.keiken.community.validation.DevelopperValidation;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.event.ValidatingRepositoryEventListener;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

@Configuration
public class RepositoryConfiguration implements RepositoryRestConfigurer {

    @Bean
    public DevelopperValidation sevelopperValidation(){
        return new DevelopperValidation();
    }

    @Override
    public void configureValidatingRepositoryEventListener(ValidatingRepositoryEventListener validatingListener) {
        validatingListener.addValidator("beforeCreate", new DevelopperValidation());
    }
}
