-- drop table
drop table if exists "Players";

-- create empty table
create table "Players" (
	id SERIAL NOT NULL,
	username VARCHAR NOT NULL UNIQUE,
	email TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	experience INTEGER,
	lvl INTEGER,
	"createdAt" TIMESTAMPTZ NOT NULL,
	"updatedAt" TIMESTAMPTZ NOT NULL,	
	primary key (id)
);

-- insert value in the table
insert into "Players" (username, email, "password", experience, lvl, "createdAt", "updatedAt")
values 
	('PussySlayer613', 
		'pussy.slay3r@gmail.com', 
		'$2b$10$KS6ogHo/ca2mOLMqGh/4N.S4grNMMZqWmq7uWJ16o9XLDoREcKQpu',
		 600000,
		 600,
		 current_timestamp,
		 current_timestamp),
	('HardcoreLevellingWarrior', 
		'hclw@gmail.com', 
		'$2b$10$fYYWkFKBr3upVU7/6abweeWjsXOAr/5YWAEOFjf.r0fZkUyeB5t6K',
		 600000,
		 666,
		 current_timestamp,
		 current_timestamp)
;
