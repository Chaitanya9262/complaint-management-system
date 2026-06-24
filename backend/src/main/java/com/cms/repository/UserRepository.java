package com.cms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.entity.Complaint;
import com.cms.entity.ComplaintStatus;
import com.cms.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByEmail(String email);
public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
    long countByStatus(ComplaintStatus status);
}
    Optional<User> findByEmail(String email);
}
