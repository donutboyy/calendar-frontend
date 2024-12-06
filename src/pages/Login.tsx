import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import UserApi from "@/api/user/user-api-service";
import { UserApiService } from "@/api/user/user-api-definitions";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email("This is not a valid email"),
  password: z.string().min(3).max(50),
});

function Login() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const loginFormData = new FormData();
    // form data uses username but I only need email, hence:
    loginFormData.append("username", values.email);
    loginFormData.append("password", values.password);

    try {
      const userService: UserApiService = new UserApi();
      const fetchToken = await userService.fetchToken(loginFormData);
      window.sessionStorage.setItem("bearer_token", fetchToken.access_token);
      navigate("/");
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  }

  return (
    <div className="flex-col w-full items-center justify-center">
      <div className="flex text-3xl w-full p-10 items-center justify-center">
        <div className="flex items-center space-x-20 w-3/5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormDescription>
                      Your email for this account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} />
                    </FormControl>
                    <FormDescription>
                      A password for accessing this account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Login / Register</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
