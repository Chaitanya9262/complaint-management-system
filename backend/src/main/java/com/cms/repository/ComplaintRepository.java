package com.cms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.entity.Complaint;
import com.cms.entity.ComplaintStatus;

public interface ComplaintRepository
        extends JpaRepository<Complaint, Long> {

    long countByStatus(ComplaintStatus status);
}