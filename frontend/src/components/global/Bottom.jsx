import { Footer } from "flowbite-react";
import React from "react";

export default function Bottom() {
  return (
    <div className="container mx-auto px-4">
      <Footer container={true}>
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
}
