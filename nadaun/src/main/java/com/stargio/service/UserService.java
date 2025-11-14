package com.stargio.service;

import java.util.Optional;

import com.stargio.entity.User;
import com.stargio.repository.UserRepository;

public class UserService {
	
	private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User loginOrRegister(String email, String provider) {
        Optional<User> found = repo.findByEmail(email);
        if (found.isPresent()) {
            return found.get();
        }
        User newUser = User.builder()
                .email(email)
                .provider(provider)
                .build();
        return repo.save(newUser);
    }

}
