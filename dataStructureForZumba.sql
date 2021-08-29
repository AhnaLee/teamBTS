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