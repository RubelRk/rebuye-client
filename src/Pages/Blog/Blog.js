import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }
  return (
    <div className="border p-5 m-5 md:w-3/4 mx-auto">
      <div>
        <h3 className="my-2 text-bold text-2xl text-green-500">
          1.What are the different ways to manage a state in a React
          application?
        </h3>
        <p className="py-5">
          #There are four main types of state you need to properly manage in
          your React apps:
        </p>
        <p>
          *Local (UI) state Local state is data we manage in one or another
          component.
        </p>
        <p className="py-5">
          *Global (UI) state Global state is data we manage across multiple
          components.
        </p>
        <p>
          *URL state Data that exists on our URLs, including the pathname and
          query parameters.
        </p>
        <p className="py-5">
          *Server state Data that comes from an external server that must be
          integrated with our UI state.
        </p>
      </div>
      <div>
        <h1 className=" my-2 text-bold text-2xl text-green-500">
          {" "}
          How does prototypical inheritance work?
        </h1>
        <p>
          *The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div>
        <h3 className="my-2 text-bold text-2xl text-green-500">
          What is a unit test? Why should we write unit tests?
        </h3>
        <p>
          *The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>React</th>
              <th>Angular</th>
              <th>Vue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React is a UI library</td>
              <td>Angular is a fully-fledged front-end framework</td>
              <td>while Vue. js is a progressive framework</td>
            </tr>
            <tr>
              <td>
                React Elements are the smallest building blocks of React apps.
              </td>
              <td>AngularJS, the original framework, is an MVC framework.</td>
              <td>
                Vue’s templating syntax lets you create View components, and it
                combines familiar HTML with special directives and features.
              </td>
            </tr>
            <tr>
              <td>
                Components are larger building blocks that define independent
                and reusable pieces to be used throughout the application.
              </td>
              <td>
                Projects in Angular are structured into Modules, Components, and
                Services.
              </td>
              <td>
                Components in Vue are small, self-contained, and can be reused
                throughout the application. Single File Components (SFCs) with
                the{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
