package com.stargio.repository;

import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;

import com.stargio.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
Optional<User> findByEmail(String email);
}
