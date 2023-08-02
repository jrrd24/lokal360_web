import React from "react";

export function GetDate() {
  const currentDate = new Date();

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let day = addZero(currentDate.getDate());
  let month = addZero(currentDate.getMonth());
  let year = currentDate.getFullYear();

  let format = year + "-" + month + "-" + day;

  return format;
}

export function GetWeekFirstDay() {
  const currentDate = new Date();

  const firstDay = new Date(
    currentDate.setDate(currentDate.getDate() - currentDate.getDay())
  );

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let day = addZero(firstDay.getDate());
  let month = addZero(firstDay.getMonth());
  let year = firstDay.getFullYear();

  let format = year + "-" + month + "-" + day;

  return format;
}

export function GetWeekLastDay() {
  const currentDate = new Date();

  const lastDay = new Date(
    currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6)
  );

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let day = addZero(lastDay.getDate());
  let month = addZero(lastDay.getMonth());
  let year = lastDay.getFullYear();

  let format = year + "-" + month + "-" + day;

  return format;
}

export function GetMonthFirstDay() {
  const currentDate = new Date();

  const firstDay = "";
  {
    /*TODO: Complete Code */
  }
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let day = addZero(firstDay.getDate());
  let month = addZero(firstDay.getMonth());
  let year = firstDay.getFullYear();

  let format = year + "-" + month + "-" + day;

  return format;
}
