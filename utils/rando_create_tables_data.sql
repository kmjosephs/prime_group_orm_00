/** ---------- TALENT ---------- **/
DROP TABLE IF EXISTS talent CASCADE;

CREATE TABLE talent (
	talent_id serial PRIMARY KEY,
	talent_legacy_id int,
	first_name varchar(80),
	last_name varchar(80),
	city varchar(40),
	state varchar(2),
	created_at timestamp,
	updated_at timestamp
);
/** ---------- SKILLS ---------- **/
DROP TABLE IF EXISTS skills CASCADE;

CREATE TABLE skills (
	skill_id serial PRIMARY KEY,
	skill_name varchar(60),
	created_at timestamp,
	updated_at timestamp
);
/** ---------- TALENT-SKILLS ---------- **/
/* Helps form the many-to-many relationship between talent and skills.
 * Uses foreign key constraints via the REFERENCES key word.
 * Learn more about constraints in Postgres
 * http://www.postgresql.org/docs/9.3/static/ddl-constraints.html
 */
DROP TABLE IF EXISTS talent_skills;

CREATE TABLE talent_skills (
	talent_id int REFERENCES talent,
	skill_id int REFERENCES skills,
	PRIMARY KEY(talent_id, skill_id),
	created_at timestamp,
	updated_at timestamp
);
/** ---------- WAGE REQUIREMENTS ---------- **/
/* Foreign key constraint helps keep/define the 1-to-many relationship 
 * between talent and wage_requirements.
 */
DROP TABLE IF EXISTS wage_requirements;

CREATE TABLE wage_requirements (
	wage_requirement_id serial PRIMARY KEY,
	minimum int,
	maximum int,
	talent_id int REFERENCES talent,
	type varchar(8) CHECK (type IN ('salary', 'hourly')),
	created_at timestamp,
	updated_at timestamp
);
/** ---------- HISTORY ---------- **/
/* Another 1 to many relationship between talent and history.
 */
DROP TABLE IF EXISTS history CASCADE;

CREATE TABLE history (
	history_id serial PRIMARY KEY,
	org varchar(200),
	start_date date,
	end_date date,
	is_current boolean,
	talent_id int REFERENCES talent,
	created_at timestamp,
	updated_at timestamp
);
