package com.keiken.community.validation;

import com.keiken.community.entitys.Developper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class DevelopperValidation implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return Developper.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        Developper developper = (Developper) o;
        boolean resulta = WebClient.builder().baseUrl("https://api.github.com/users/").build()
                .get().uri("/"+developper.getUsername())
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
