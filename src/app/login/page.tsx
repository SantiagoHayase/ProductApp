"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      return setError(res.error as string);
    }

    if (res?.ok) {
      return router.push("/");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <form onSubmit={handleSubmit} className="">
        {error && <div>{error}</div>}
        <h2 className="p-5">Iniciar sesión</h2>
        <label className="font-semibold block text-gray-600">Usuario:</label>
        <input
          type="email"
          placeholder="John@email.com"
          name="email"
          className="m-2"
        />
        <label className="font-semibold block text-gray-600">Contraseña:</label>

        <input
          type="password"
          placeholder="******"
          name="password"
          className="m-2"
        />
        <button className="px-2 m-2 font-bold flex">Ingresar</button>
        <h3>
          <Link href={"/register"}>Aun no tienes una cuenta?</Link>
        </h3>
      </form>
    </div>
  );
}

export default LoginPage;
