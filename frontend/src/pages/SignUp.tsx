import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchema } from "../validation/Validation";
import { SignUpType } from "../types/AuthType";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<SignUpType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpType> = async (data) => {
    try {
      console.log(data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="relative h-[50vh] md:h-screen">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
          alt="Stylish woman with shopping bags"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24">
        <div className="space-y-6 max-w-md mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Sign Up
          </h1>
          <p className="text-lg text-gray-600">
            Join our community and elevate your style
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                {...register("name")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                {...register("email")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                {...register("password")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors duration-300"
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/signin"
              className="font-medium text-black hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
