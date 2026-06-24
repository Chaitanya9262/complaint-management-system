package com.cms.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cms.entity.Complaint;
import com.cms.entity.ComplaintStatus;
import com.cms.service.ComplaintService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/complaints")
@RequiredArgsConstructor
public class ComplaintController {

    private final ComplaintService complaintService;

    @PostMapping
    public Complaint createComplaint(@RequestBody Complaint complaint) {
        return complaintService.createComplaint(complaint);
    }

    @GetMapping
    public List<Complaint> getAllComplaints() {
        return complaintService.getAllComplaints();
    }

    @GetMapping("/count")
    public long getTotalComplaints() {
        return complaintService.getTotalComplaints();
    }
    @PutMapping("/{id}/status")
public Complaint updateStatus(
        @PathVariable Long id,
        @RequestParam ComplaintStatus status) {

    return complaintService.updateStatus(id, status);
}

    @GetMapping("/count/{status}")
    public long getComplaintsByStatus(
            @PathVariable ComplaintStatus status) {

        return complaintService.getComplaintsByStatus(status);
    }
}