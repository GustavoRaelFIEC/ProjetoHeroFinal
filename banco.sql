CREATE DATABASE portal_herois;

USE portal_herois;

CREATE TABLE
    `recrutador` (
        `id` int NOT NULL AUTO_INCREMENT,
        `nome_completo` varchar(150) NOT NULL,
        `email` varchar(255) NOT NULL,
        `senha` varchar(255) NOT NULL,
        `criado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`),
        UNIQUE KEY `email` (`email`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci