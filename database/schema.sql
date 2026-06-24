CREATE DATABASE IF NOT EXISTS cms_db;

USE cms_db;

-- USERS TABLE
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('USER', 'STAFF', 'ADMIN') DEFAULT 'USER',
    phone_number VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

-- CATEGORIES TABLE
CREATE TABLE categories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

-- COMPLAINTS TABLE
CREATE TABLE complaints (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    complaint_code VARCHAR(20) UNIQUE,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,

    category_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    assigned_staff_id BIGINT,

    priority ENUM('LOW', 'MEDIUM', 'HIGH') DEFAULT 'MEDIUM',

    status ENUM(
        'PENDING',
        'ASSIGNED',
        'IN_PROGRESS',
        'RESOLVED',
        'CLOSED',
        'REJECTED'
    ) DEFAULT 'PENDING',

    attachment_url VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_complaint_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id),

    CONSTRAINT fk_complaint_user
        FOREIGN KEY (user_id)
        REFERENCES users(id),

    CONSTRAINT fk_complaint_staff
        FOREIGN KEY (assigned_staff_id)
        REFERENCES users(id)
);

-- COMMENTS TABLE
CREATE TABLE comments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    complaint_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,

    message TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_comment_complaint
        FOREIGN KEY (complaint_id)
        REFERENCES complaints(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_comment_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
);

-- NOTIFICATIONS TABLE
CREATE TABLE notifications (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    user_id BIGINT NOT NULL,

    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,

    is_read BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_notification_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
);

-- SAMPLE CATEGORIES
INSERT INTO categories (category_name, description) VALUES
('Internet', 'Wi-Fi and network related issues'),
('Electrical', 'Power supply and electrical issues'),
('Maintenance', 'Building and infrastructure issues'),
('Cleaning', 'Housekeeping and sanitation issues'),
('Water Supply', 'Water leakage and supply issues');