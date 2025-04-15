CREATE TABLE `consultations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`date` text NOT NULL,
	`time` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
