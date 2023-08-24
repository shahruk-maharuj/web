import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto px-4">
      <div class="h-56 grid grid-cols-3 gap-4 content-center ...">
        <div></div>
        <div>
          <Card>
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@flowbite.com"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" type="password" required={true} />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Card>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
