package com.stargio.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stargio.entity.User;
import com.stargio.service.UserService;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/api/login")
public class UserController {

	private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/{provider}")
    public Map<String, Object> login(@PathVariable String provider, @RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        User user = service.loginOrRegister(email, provider);
        return Map.of(
                "message", user.getEmail() + " 로그인 성공",
                "user", user
        );
    }
}
