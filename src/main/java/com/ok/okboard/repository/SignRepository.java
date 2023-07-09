package com.ok.okboard.repository;

import com.ok.okboard.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
