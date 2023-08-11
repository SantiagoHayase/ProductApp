"use client";
import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const signupResponse = await axios.post("/api/auth/signup", {
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.ok) {
        return router.push("/");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center flex-col">
        <form onSubmit={handleSubmit}>
          {error && <div>{error}</div>}
          <h2 className="p-5">Registrate</h2>
          <label className="font-semibold block text-gray-600">
            Nombre completo:
          </label>

          <input
            type="text"
            placeholder="John Doe"
            name="fullname"
            className="m-2"
          />
          <label className="font-semibold block text-gray-600">Usuario:</label>

          <input
            type="email"
            placeholder="John@email.com"
            name="email"
            className="m-2"
          />
          <label className="font-semibold block text-gray-600">
            Contraseña:
          </label>

          <input
            type="password"
            placeholder="******"
            name="password"
            className="m-2"
          />
          <button className="px-2 m-2 font-bold flex ">Crear cuenta</button>
        </form>
        <h3>
          <Link href={"/login"}>Ya tienes una cuenta?</Link>
        </h3>
      </div>
    </>
  );
}
