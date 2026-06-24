package com.cms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.entity.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
}