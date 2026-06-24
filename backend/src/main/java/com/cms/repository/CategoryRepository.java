package com.cms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}