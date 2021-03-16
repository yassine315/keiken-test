package com.keiken.community.validation;

import com.keiken.community.entitys.Developper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.HashMap;

@Component
public class DevelopperValidation implements Validator {

    @Value("${github.key}")
    private String key = "7a34ee0534aed765bb9b8e19384b9089188a8acd";

    @Override
    public boolean supports(Class<?> aClass) {
        return Developper.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        Developper developper = (Developper) o;
        boolean resulta = WebClient.builder().baseUrl("https://api.github.com/users/").build()
                .get().uri("/"+developper.getGithubUsername())
                .header(HttpHeaders.AUTHORIZATION, key)
                .exchangeToMono((ClientResponse respnse)->{
                    if (respnse.statusCode().equals(HttpStatus.OK))
                        return Mono.just(true);
                    else
                        return Mono.just(false);
                }
        ).block();

        if (!resulta)
            errors.rejectValue("username", "username does not exist");
    }
}
