package com.cms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cms.entity.Complaint;
import com.cms.entity.ComplaintStatus;
import com.cms.entity.User;
import com.cms.repository.ComplaintRepository;
import com.cms.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ComplaintService {

    private final ComplaintRepository complaintRepository;
    private final UserRepository userRepository;

   public Complaint createComplaint(Complaint complaint) {

    User user = userRepository.findById(1L)
            .orElseThrow(() -> new RuntimeException("User not found"));

    complaint.setUser(user);

    return complaintRepository.save(complaint);
}

    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    public long getTotalComplaints() {
        return complaintRepository.count();
    }

    public long getComplaintsByStatus(ComplaintStatus status) {
        return complaintRepository.countByStatus(status);
    }

    public Complaint updateStatus(Long id, ComplaintStatus status) {

        Complaint complaint = complaintRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Complaint not found"));

        complaint.setStatus(status);

        return complaintRepository.save(complaint);
    }
}