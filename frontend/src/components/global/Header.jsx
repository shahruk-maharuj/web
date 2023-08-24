import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container mx-auto px-4">
      <Navbar fluid={true} rounded={true}>
        <Link to="/">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              task.app
            </span>
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse>
          <Link to="/">
            <Navbar.Link href="/" active={true}>
              Home
            </Navbar.Link>
          </Link>
          <Link to="/about">
            <Navbar.Link>About</Navbar.Link>
          </Link>
          <Link to="/contact">
            <Navbar.Link>Contact</Navbar.Link>
          </Link>
        </Navbar.Collapse>
        <div className="flex md:order-2">
          <Link to="/login">
            <Button>Get started</Button>
          </Link>
          <Navbar.Toggle />
        </div>
      </Navbar>
    </div>
  );
}
