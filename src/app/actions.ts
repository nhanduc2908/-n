"use server";

import { db } from "@/db";
import { students, teachers, classes, subjects, schedules, grades, attendance, tuition } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

// Students
export async function getStudents() {
  return await db.select().from(students).orderBy(desc(students.id));
}

export async function addStudent(data: any) {
  await db.insert(students).values(data);
}

export async function updateStudent(id: number, data: any) {
  await db.update(students).set(data).where(eq(students.id, id));
}

export async function deleteStudent(id: number) {
  await db.delete(students).where(eq(students.id, id));
}

// Teachers
export async function getTeachers() {
  return await db.select().from(teachers).orderBy(desc(teachers.id));
}

export async function addTeacher(data: any) {
  await db.insert(teachers).values(data);
}

export async function updateTeacher(id: number, data: any) {
  await db.update(teachers).set(data).where(eq(teachers.id, id));
}

export async function deleteTeacher(id: number) {
  await db.delete(teachers).where(eq(teachers.id, id));
}

// Classes
export async function getClasses() {
  return await db.select().from(classes).orderBy(desc(classes.id));
}

export async function addClass(data: any) {
  await db.insert(classes).values(data);
}

export async function updateClass(id: number, data: any) {
  await db.update(classes).set(data).where(eq(classes.id, id));
}

export async function deleteClass(id: number) {
  await db.delete(classes).where(eq(classes.id, id));
}

// Subjects
export async function getSubjects() {
  return await db.select().from(subjects).orderBy(desc(subjects.id));
}

export async function addSubject(data: any) {
  await db.insert(subjects).values(data);
}

export async function updateSubject(id: number, data: any) {
  await db.update(subjects).set(data).where(eq(subjects.id, id));
}

export async function deleteSubject(id: number) {
  await db.delete(subjects).where(eq(subjects.id, id));
}

// Schedules
export async function getSchedules() {
  return await db.select().from(schedules).orderBy(desc(schedules.id));
}

export async function addSchedule(data: any) {
  await db.insert(schedules).values(data);
}

export async function updateSchedule(id: number, data: any) {
  await db.update(schedules).set(data).where(eq(schedules.id, id));
}

export async function deleteSchedule(id: number) {
  await db.delete(schedules).where(eq(schedules.id, id));
}

// Grades
export async function getGrades() {
  return await db.select().from(grades).orderBy(desc(grades.id));
}

export async function addGrade(data: any) {
  await db.insert(grades).values(data);
}

export async function updateGrade(id: number, data: any) {
  await db.update(grades).set(data).where(eq(grades.id, id));
}

export async function deleteGrade(id: number) {
  await db.delete(grades).where(eq(grades.id, id));
}

// Attendance
export async function getAttendance() {
  return await db.select().from(attendance).orderBy(desc(attendance.id));
}

export async function addAttendanceRecord(data: any) {
  await db.insert(attendance).values(data);
}

export async function updateAttendance(id: number, data: any) {
  await db.update(attendance).set(data).where(eq(attendance.id, id));
}

export async function deleteAttendance(id: number) {
  await db.delete(attendance).where(eq(attendance.id, id));
}

// Tuition
export async function getTuition() {
  return await db.select().from(tuition).orderBy(desc(tuition.id));
}

export async function addTuitionRecord(data: any) {
  await db.insert(tuition).values(data);
}

export async function updateTuition(id: number, data: any) {
  await db.update(tuition).set(data).where(eq(tuition.id, id));
}

export async function deleteTuition(id: number) {
  await db.delete(tuition).where(eq(tuition.id, id));
}

// Dashboard stats
export async function getDashboardStats() {
  const studentCount = await db.select({ count: students.id }).from(students);
  const teacherCount = await db.select({ count: teachers.id }).from(teachers);
  const classCount = await db.select({ count: classes.id }).from(classes);
  const subjectCount = await db.select({ count: subjects.id }).from(subjects);
  
  return {
    totalStudents: studentCount[0].count || 0,
    totalTeachers: teacherCount[0].count || 0,
    totalClasses: classCount[0].count || 0,
    totalSubjects: subjectCount[0].count || 0,
  };
}