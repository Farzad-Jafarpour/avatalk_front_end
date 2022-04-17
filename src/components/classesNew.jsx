import React, { useState, useEffect, useCallback } from "react";
import classService from "../services/classService";

const ClassesNew = () => {
  const [classesData, setClassesData] = useState([]);

  useEffect(async () => {
    const classes = await classService.getClasses();

    if (classes) {
      setClassesData(classes.data);
      console.log(classes.data);
    }
  }, []);

  if (classesData.length === 0) return null;

  return (
    <>
      <div>ClassId: {classesData[0]._id}</div>
    </>
  );
};

export default ClassesNew;
