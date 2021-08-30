-- #################################################################
-- Create database structure
-- #################################################################

-- Lookup Table Colour
CREATE TABLE Member (
	Mem_Id NUMBER(4) PRIMARY KEY,
	Mem_FName VARCHAR2(15) NOT NULL,
	Mem_LName VARCHAR2(15) NOT NULL,
	Mem_Phone NUMBER(20) NOT NULL,
	Mem_Email VARCHAR2(50) NOT NULL,
	Mem_DOB DATE NOT NULL,
	Mem_ConType VARCHAR2(30) NOT NULL 
);

CREATE TABLE Payment (
	Payment_Num NUMBER(6) PRIMARY KEY,
	Payment_Date DATE NOT NULL,
	Payment_Amt NUMBER(6,2) NOT NULL,
	Mem_Id NUMBER(4) FOREIGN KEY (Mem_Id) REFERENCES Member(Mem_Id)
);

CREATE TABLE Classes (
	Class_Id VARCHAR2(20) PRIMARY KEY,
	Class_Day VARCHAR2(10) NOT NULL,
	Class_Time NUMBER(4) NOT NULL,
	Mem_Id NUMBER(4) FOREIGN KEY (Mem_Id) REFERENCES Member(Mem_Id),
	Admin_Id NUMBER(4) FOREIGN KEY (Admin_Id) REFERENCES Admin(Admin_Id)
);

CREATE TABLE Admins(
	Admin_Id NUMBER(4) PRIMARY KEY,
	Ad_Name VARCHAR2(30) NOT NULL,
	Ad_Phone NUMBER(20) NOT NULL,
	Ad_Email VARCHAR2(50) NOT NULL,
	Ad_add VARCHAR2(100) NOT NULL
	
	);
	
/* Insert data in to Member table*/
INSERT INTO Member (Mem_Id, Mem_FName, Mem_LName, Mem_Phone, Mem_Email, Mem_DOB, Mem_ConType)
VALUES (0001, 'Ahna' ,'Lee', 0213334444, 'student@wintec.ac.nz', 01/01/1987,'concession');
INSERT INTO Member (Mem_Id, Mem_FName, Mem_LName, Mem_Phone, Mem_Email, Mem_DOB, Mem_ConType)
VALUES (0002, 'Sunjoo' ,'Yeom', 02122223333, 'student2@wintec.ac.nz', 02/01/1977,'non-concession');
INSERT INTO Member (Mem_Id, Mem_FName, Mem_LName, Mem_Phone, Mem_Email, Mem_DOB, Mem_ConType)
VALUES (0003, 'Noah' ,'Pheoung', 0275556666, 'student3@wintec.ac.nz', 03/03/2002,'concession');
INSERT INTO Member (Mem_Id, Mem_FName, Mem_LName, Mem_Phone, Mem_Email, Mem_DOB, Mem_ConType)
VALUES (0004, 'Felix' ,'Bangana', 02159998888, 'student4@wintec.ac.nz', 05/15/2000,'concession');
INSERT INTO Member (Mem_Id, Mem_FName, Mem_LName, Mem_Phone, Mem_Email, Mem_DOB, Mem_ConType)
VALUES (0005, 'Daniel' ,'Johnson', 0227778989, 'email@gmail.com', 05/30/1994,'non-concession');
/* Insert data in to Payment Table*/
INSERT INTO Payment (Payment_Num, Payment_Date, Payment_Amt, Mem_Id)
VALUES (000001, '08/07/2021' ,250.00, 0001);
INSERT INTO Payment (Payment_Num, Payment_Date, Payment_Amt, Mem_Id)
VALUES (000002, '10/07/2021' ,10.00, 0005);
INSERT INTO Payment (Payment_Num, Payment_Date, Payment_Amt, Mem_Id)
VALUES (000003, '15/07/2021' ,10.00, 0002);
INSERT INTO Payment (Payment_Num, Payment_Date, Payment_Amt, Mem_Id)
VALUES (000004, '20/07/2021' ,150.00, 0003);
INSERT INTO Payment (Payment_Num, Payment_Date, Payment_Amt, Mem_Id)
VALUES (000005, '20/07/2021' ,10.00, 0002);
INSERT INTO Payment (Payment_Num, Payment_Date, Payment_Amt, Mem_Id)
VALUES (000006, '21/07/2021' ,250.00, 0004);
/* Insert data in to Classes Table*/
INSERT INTO Classes (Class_Id, Class_Day, Class_Time, Mem_Id, Admin_Id)
VALUES ('Beginner', 'Monday' ,0700, 0001,1000);
INSERT INTO Classes (Class_Id, Class_Day, Class_Time, Mem_Id, Admin_Id)
VALUES ('Beginner', 'Tuesday' ,1200, 0002,1000);
INSERT INTO Classes (Class_Id, Class_Day, Class_Time, Mem_Id, Admin_Id)
VALUES ('Advance', 'Monday' ,1800, 0005,1000);
INSERT INTO Classes (Class_Id, Class_Day, Class_Time, Mem_Id, Admin_Id)
VALUES ('Beginner2', 'Friday' ,1800, 0002,1000);
INSERT INTO Classes (Class_Id, Class_Day, Class_Time, Mem_Id, Admin_Id)
VALUES ('Beginner', 'Monday' ,0700, 0003,1000);
INSERT INTO Classes (Class_Id, Class_Day, Class_Time, Mem_Id, Admin_Id)
VALUES ('Beginner1', 'Saturday' ,1100, 0004,1000);\
/*Insert data in to Admin table*/
INSERT INTO Admins (Admin_Id, Ad_Name, Ad_Phone, Ad_Email, Ad_add)
VALUES (1000, 'Admin-Name' ,0211234567, 'admin@gmail.com', 'Wintec Hamilton Hall');
