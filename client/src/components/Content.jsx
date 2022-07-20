import React from 'react';
import { useState, useEffect } from "react";
import { useGetInfoStudents } from '../hooks/useGetInfoStudents';

const Content = () => {
    const  students = useGetInfoStudents();
    console.log(students)
    return (
        <div className='container-table'>
            <div id="site-main">
                <div class="container">
                    <form action="/" method="POST">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Course</th>
                                <th>Direction</th>
                                <th>Qualification</th>
                                <th>Mail</th>
                                <th>Phone number</th>
                                </tr>
                            </thead>
                            <tbody>
                            {students.data?.map((items) => (
                                <tr>
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.asignatura}</td>
                                    <td>{items.direction}</td>
                                    <td>{items.calification}</td>
                                    <td>{items.email}</td>
                                    <td>{items.phone_number}</td>
                                    {/* <td>
                                        <a href="/update-user?id=<%= users[i]._id%>" class="btn border-shadow update">
                                            <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                                        </a>
                                        <a class="btn border-shadow delete">
                                            <span class="text-gradient"><i class="fas fa-times"></i></span>
                                        </a>
                                    </td> */}
                                </tr>
                            ))}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Content;
